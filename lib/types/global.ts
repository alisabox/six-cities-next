export interface StringMap {
  [key: string]: string;
}

export type LocationType = {
  latitude: number;
  longitude:  number;
  zoom: number;
};

export type CityType = {
  location: LocationType;
  name: string;
};

export type UserType = {
  avatarUrl?: string;
  id: number;
  isPro?: boolean;
  name: string;
  ['avatar_url']?: string,
  ['is_pro']?: boolean,
};

export type OffersType = {
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: UserType;
  id: number;
  images: string[];
  isFavorite?: boolean;
  isPremium?: boolean;
  location: LocationType;
  maxAdults?: number,
  previewImage?: string;
  price: number,
  rating: number,
  title: string,
  type: string,
  ['is_favorite']?: boolean,
  ['is_premium']?: boolean,
  ['max_adults']?: number,
  ['preview_image']?: string,
};

export type ReviewsType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserType;
  offerId: number;
};

export type PostReviewType = {
  comment: string;
  rating: number;
};

export type FavoriteCitiesType = {
  [key: CityType['name']]: OffersType[];
};

export type SearchParams = { [key: string]: string | string[] | undefined };

export type RawOfferData = {
  offer_id: number;
  title: string;
  description: string;
  bedrooms: number;
  max_adults: number;
  price: string;
  rating: string;
  is_favorite: boolean;
  is_premium: boolean;
  type: 'ROOM' | 'APARTMENT' | 'HOUSE' | 'HOTEL';
  preview_image: string;
  city_name: string;
  city_latitude: string;
  city_longitude: string;
  city_zoom: number;
  host_id: number;
  host_name: string;
  host_avatar: string;
  host_is_pro: boolean;
  latitude: string;
  longitude: string;
  zoom: number;
  goods: string[];
  images: string[];
};

export type RawReviewType = {
  comment_id: number;
  comment: string;
  date: string;
  rating: string;
  offer_id: number;
  user_id: number;
  user_name: string;
  user_avatar_url: string;
  user_is_pro: boolean;
};
