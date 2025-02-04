'use server';

import { cache } from 'react';
import { neon } from '@neondatabase/serverless';
import { toast } from 'react-toastify';
import { verifySession } from '@/lib/auth';
import { OffersType, PostReviewType, RawOfferData, RawReviewType, ReviewsType, UserType } from '@/lib/types/global';
import { convertOfferData, convertOffersData, convertReviewsData } from '@/lib/utils';


export const fetchOffers = cache(async (): Promise<OffersType[]> => {
  const { userId } = await verifySession();
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
        ARRAY_AGG(DISTINCT i.url) AS images,
        (CASE WHEN EXISTS (SELECT 1
                           FROM favorite_offers fav
                           WHERE fav.user_id = $1 AND
                               o.id = fav.offer_id
                         )
                  THEN TRUE ELSE FALSE
            END) AS is_favorite
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
    `, [userId]) as RawOfferData[];
    return convertOffersData(data);
  } catch (error) {
    toast.error('Failed to fetch the offers. Please, refresh the page.');
    console.log('fetchOffers', error);
    return [];
  }
});

export const fetchOfferById = cache(async(offerId: number): Promise<OffersType | null> => {
  const { userId } = await verifySession();
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
        ARRAY_AGG(DISTINCT i.url) AS images,
        (CASE WHEN EXISTS (SELECT 1
                           FROM favorite_offers fav
                           WHERE fav.user_id = $1 AND
                               o.id = fav.offer_id
        )
                  THEN TRUE ELSE FALSE
            END) AS is_favorite
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
    `, [userId]) as RawOfferData[];
    return convertOfferData(data[0]);
  } catch (error) {
    toast.error('Failed to fetch the offer. Please, refresh the page.');
    console.log('fetchOfferById', error);
    return null;
  }
});

export const fetchNearbyOffers = cache(async({ offerId, city }: { offerId: number, city: string }):
Promise<OffersType[]> => {
  const { userId } = await verifySession();
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
            ARRAY_AGG(DISTINCT i.url) AS images,
            (CASE WHEN EXISTS (SELECT 1
                               FROM favorite_offers fav
                               WHERE fav.user_id = $3 AND
                                   o.id = fav.offer_id
            )
                      THEN TRUE ELSE FALSE
                END) AS is_favorite
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
    `, [offerId, city, userId]) as RawOfferData[];
    return convertOffersData(data);
  } catch (error) {
    toast.error('Failed to fetch nearby offers.');
    console.log('fetchNearbyOffers', error);
    return [];
  }
});

export const fetchFavoriteOffers = cache(async(): Promise<OffersType[]> => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const { userId } = await verifySession();
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
        ARRAY_AGG(DISTINCT i.url) AS images,
        (CASE WHEN EXISTS (SELECT 1
                           FROM favorite_offers fav
                           WHERE fav.user_id = $1 AND
                               o.id = fav.offer_id
        )
                  THEN TRUE ELSE FALSE
            END) AS is_favorite
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
      LEFT JOIN
          favorite_offers fav ON o.id = fav.offer_id
      WHERE
          fav.user_id = $1
      GROUP BY
          o.id, c.id, h.id;
    `, [userId]) as RawOfferData[];
    return convertOffersData(data);
  } catch (error) {
    toast.error('Failed to fetch favorite offers.');
    console.log('fetchFavoriteOffers', error);
    return [];
  }
});

export const fetchReviewsById = cache(async(offerId: number): Promise<ReviewsType[]> => {
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
            c.offer_id = $1
        ORDER BY c.date DESC
        LIMIT 10;
    `, [offerId]) as RawReviewType[];
    return convertReviewsData(data);
  } catch (error) {
    toast.error('Failed to fetch reviews.');
    console.log('fetchReviewsById', error);
    return [];
  }
});

type UpdateOfferFavoriteStatus = {
  isFavorite: boolean;
  offerId: number;
};

export const updateOfferFavoriteStatus = cache(async({ isFavorite, offerId }: UpdateOfferFavoriteStatus):
Promise<OffersType | null> => {
  const { userId } = await verifySession();
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    if (isFavorite) {
      await sql(`
        INSERT INTO favorite_offers (offer_id, user_id)
        VALUES ($1, $2);
    `, [offerId, userId]);
    } else {
      await sql(`
        DELETE FROM favorite_offers
        WHERE offer_id = $1 AND user_id = $2;
    `, [offerId, userId]);
    }
    return fetchOfferById(offerId);
  } catch (error) {
    toast.error('Failed to update offer favorite status.');
    console.log('updateOfferFavoriteStatus', error);
    return null;
  }
});

export const getUserByEmail = cache(async(email: string): Promise<UserType | null> => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const user = await sql(`
    SELECT id, email, password 
    FROM users 
    WHERE email = $1
    `, [email]) as UserType[];
    return user[0];
  } catch (error) {
    toast.error('Failed to get user details.');
    console.log('getUserByEmail', error);
    return null;
  }
});

export const getUserById = cache(async(userId: number): Promise<UserType | null> => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const user = await sql(`
        SELECT id, email
        FROM users
        WHERE id = $1
    `, [userId]) as UserType[];
    return user[0];
  } catch (error) {
    toast.error('Failed to get user details.');
    console.log('getUserById', error);
    return null;
  }
});

export async function addReview({
  data,
  userId,
  offerId
}: {
  data: PostReviewType,
  userId: number,
  offerId: number
}): Promise<void> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    await sql(`
        INSERT INTO comments (date, comment, rating, offer_id, user_id)
        VALUES (NOW(), $1, $2, $3, $4);
    `, [data.comment, data.rating, offerId, userId]) as UserType[];
  } catch (error) {
    toast.error('Failed to add review.');
    console.log('addReview', error);
  }
}
