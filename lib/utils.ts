import { ZodError } from 'zod';
import { OffersType, RawOfferData, RawReviewType, ReviewsType, StringMap } from '@/lib/types/global';

export const convertZodErrors = (error: ZodError): StringMap => {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message;
    return acc;
  }, {});
};

export const capitalize = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const convertOfferData = (data: RawOfferData): OffersType => {
  return {
    bedrooms: data.bedrooms,
    city: {
      location: {
        latitude: parseFloat(data.city_latitude),
        longitude: parseFloat(data.city_longitude),
        zoom: data.city_zoom,
      },
      name: data.city_name,
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host_avatar,
      id: data.host_id,
      isPro: data.host_is_pro,
      name: data.host_name,
    },
    id: data.offer_id,
    images: data.images,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    location: {
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      zoom: data.zoom,
    },
    maxAdults: data.max_adults,
    previewImage: data.preview_image,
    price: parseFloat(data.price),
    rating: parseFloat(data.rating),
    title: data.title,
    type: data.type,
  };
};

export const convertOffersData = (offers: RawOfferData[]): OffersType[] => {
  return offers.map((data) => convertOfferData(data));
};

export const convertReviewsData = (data: RawReviewType[]): ReviewsType[] => {
  return data.map(result => ({
    comment: result.comment,
    date: result.date,
    id: result.comment_id,
    rating: Number(result.rating),
    offerId: result.offer_id,
    user: {
      id: result.user_id,
      name: result.user_name,
      avatarUrl: result.user_avatar_url,
      isPro: result.user_is_pro,
    },
  }));
};
