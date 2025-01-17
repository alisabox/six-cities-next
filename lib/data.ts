'use server';

import { neon } from '@neondatabase/serverless';
import { OffersType, RawOfferData, RawReviewType, ReviewsType } from '@/lib/types/global';
import { convertOfferData, convertOffersData, convertReviewsData } from '@/lib/utils';


export async function fetchOffers(): Promise<OffersType[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const data = await sql(`
      SELECT 
        o.id AS offer_id,
        o.title,
        o.description,
        o.bedrooms,
        o.max_adults,
        o.price,
        o.rating,
        o.is_favorite,
        o.is_premium,
        o.type,
        o.preview_image,
        c.name AS city_name,
        c.latitude AS city_latitude,
        c.longitude AS city_longitude,
        c.zoom AS city_zoom,
        h.id AS host_id,
        h.name AS host_name,
        h.avatar_url AS host_avatar,
        h.is_pro AS host_is_pro,
        o.latitude,
        o.longitude,
        o.zoom,
        ARRAY_AGG(DISTINCT g.name) AS goods,
        ARRAY_AGG(DISTINCT i.url) AS images
      FROM 
          offers o
      JOIN 
          cities c ON o.city_id = c.id
      JOIN 
          hosts h ON o.host_id = h.id
      LEFT JOIN 
          offer_goods og ON o.id = og.offer_id
      LEFT JOIN 
          goods g ON og.good_id = g.id
      LEFT JOIN 
          images i ON o.id = i.offer_id
      GROUP BY 
          o.id, c.id, h.id;
    `) as RawOfferData[];
    return convertOffersData(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the offers.');
  }
}

export async function fetchOfferById(offerId: number): Promise<OffersType> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const data = await sql(`
      SELECT 
        o.id AS offer_id,
        o.title,
        o.description,
        o.bedrooms,
        o.max_adults,
        o.price,
        o.rating,
        o.is_favorite,
        o.is_premium,
        o.type,
        o.preview_image,
        c.name AS city_name,
        c.latitude AS city_latitude,
        c.longitude AS city_longitude,
        c.zoom AS city_zoom,
        h.id AS host_id,
        h.name AS host_name,
        h.avatar_url AS host_avatar,
        h.is_pro AS host_is_pro,
        o.latitude,
        o.longitude,
        o.zoom,
        ARRAY_AGG(DISTINCT g.name) AS goods,
        ARRAY_AGG(DISTINCT i.url) AS images
      FROM 
          offers o
      JOIN 
          cities c ON o.city_id = c.id
      JOIN 
          hosts h ON o.host_id = h.id
      LEFT JOIN 
          offer_goods og ON o.id = og.offer_id
      LEFT JOIN 
          goods g ON og.good_id = g.id
      LEFT JOIN 
          images i ON o.id = i.offer_id
      WHERE
          o.id = ${offerId}
      GROUP BY 
          o.id, c.id, h.id;
    `) as RawOfferData[];
    return convertOfferData(data[0]);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch the offer with id ${offerId}.`);
  }
}

export async function fetchNearbyOffers({ offerId, city }: { offerId: number, city: string }):
Promise<OffersType[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const data = await sql(`
        SELECT
            o.id AS offer_id,
            o.title,
            o.description,
            o.bedrooms,
            o.max_adults,
            o.price,
            o.rating,
            o.is_favorite,
            o.is_premium,
            o.type,
            o.preview_image,
            c.name AS city_name,
            c.latitude AS city_latitude,
            c.longitude AS city_longitude,
            c.zoom AS city_zoom,
            h.id AS host_id,
            h.name AS host_name,
            h.avatar_url AS host_avatar,
            h.is_pro AS host_is_pro,
            o.latitude,
            o.longitude,
            o.zoom,
            ARRAY_AGG(DISTINCT g.name) AS goods,
            ARRAY_AGG(DISTINCT i.url) AS images
        FROM
            offers o
                JOIN
            cities c ON o.city_id = c.id
                JOIN
            hosts h ON o.host_id = h.id
                LEFT JOIN
            offer_goods og ON o.id = og.offer_id
                LEFT JOIN
            goods g ON og.good_id = g.id
                LEFT JOIN
            images i ON o.id = i.offer_id
        WHERE
            o.id != $1
            AND c.name = $2
        GROUP BY
            o.id, c.id, h.id;
    `, [offerId, city]) as RawOfferData[];
    return convertOffersData(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch nearby offers.');
  }
}

export async function fetchReviewsById(offerId: number): Promise<ReviewsType[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const data = await sql(`
        SELECT
            c.id AS comment_id,
            c.comment,
            c.date,
            c.rating,
            c.offer_id,
            u.id AS user_id,
            u.name AS user_name,
            u.avatar_url AS user_avatar_url,
            u.is_pro AS user_is_pro
        FROM
            comments c
                JOIN
            users u ON c.user_id = u.id
        WHERE
            c.offer_id = $1;
    `, [offerId]) as RawReviewType[];
    return convertReviewsData(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to reviews.');
  }
}

type UpdateOfferFavoriteStatus = {
  isFavorite: boolean;
  offerId: number;
};

export async function updateOfferFavoriteStatus({ isFavorite, offerId }: UpdateOfferFavoriteStatus):
Promise<OffersType> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    await sql(`
        UPDATE offers
        SET is_favorite = $1
        WHERE id = $2;
    `, [isFavorite, offerId]);
    return fetchOfferById(offerId);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update offer favorite status.');
  }
}
