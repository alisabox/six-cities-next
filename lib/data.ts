import { cities, RoomTypes } from '@/lib/const';
import { OffersType } from '@/lib/types/global';

export const offers: OffersType[] = [{
  bedrooms: 1,
  city: {
    location: {
      latitude: 123,
      longitude: 123,
      zoom: 12,
    },
    name: cities[0],
  },
  description: '',
  goods: ['ss'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: false,
    name: '',
  },
  id: 1,
  images: [],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 123,
    longitude: 123,
    zoom: 12,
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 1200,
  rating: 5,
  title: 'Apartment',
  type: RoomTypes.APARTMENT,
}];

