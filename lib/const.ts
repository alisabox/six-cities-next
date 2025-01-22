import { OffersType } from '@/lib/types/global';

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  OFFER: '/offer',
  FAVORITE: '/favorites',
  NOT_FOUND: '/not-found',
} as const;

type RoomTypesType = {
  [key: string]: string;
};

export const RoomTypes: RoomTypesType = {
  APARTMENT: 'Apartment',
  ROOM: 'Private room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

export const MAX_RATING = 5;

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const getRandomIndex = (min: number, max: number): number => {
  if (min < 0 || max < 0) {
    return 0;
  } else if (min > max) {
    [min, max] = [max, min];
  }
  return Math.round(Math.random() * (max - min) + min);
};

export const getRandomCity = (): string => {
  const index = getRandomIndex(0, cities.length - 1);
  return cities[index];
};

export const Markers = {
  DEFAULT: '../img/pin.svg',
  CURRENT: '../img/pin-active.svg',
};

export const Screen = {
  MAIN: 'cities',
  FAVORITE: 'favorites',
  PROPERTY: 'near-places',
};

export const BasicCardImageSize = {
  WIDTH: 260,
  HEIGHT: 200,
};

export const FavoriteCardImageSize = {
  WIDTH: 150,
  HEIGHT: 110,
};

export const SortMode = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const sortOffers = (data: OffersType[], filter: string | null): OffersType[] => {
  switch (filter) {
    case SortMode.PRICE_DOWN:
      return data.slice().sort((prev, next) => (next.price - prev.price));
    case SortMode.PRICE_UP:
      return data.slice().sort((prev, next) => (prev.price - next.price));
    case SortMode.TOP_RATED:
      return data.slice().sort((prev, next) => (next.rating - prev.rating));
    default:
      return data.slice();
  }
};

export const LoginRegexp = {
  EMAIL: /[^@\s]+@[^@\s]+\.[^@\s]+$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-zA-Z])/,
};
