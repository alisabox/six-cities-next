import { RoomTypes } from '@/lib/const';
import { OffersType, ReviewsType } from '@/lib/types/global';

export const offers: OffersType[] = [{
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    },
    name: 'Amsterdam',
  },
  description: 'A beautifully maintained 2-bedroom, 1-bathroom apartment featuring an open living area with natural ' +
    'light, a modern kitchen with stainless steel appliances, spacious bedrooms with built-in wardrobes, and a sleek ' +
    'bathroom. Enjoy in-unit laundry, air conditioning, and a private balcony. The pet-friendly building offers ' +
    'secure entry, a gym, a pool, and reserved parking. Located in a quiet neighborhood near public transportation, ' +
    'shopping, parks, and schools, it provides the perfect mix of convenience and comfort. Schedule a tour today!',
  goods: ['washing machine', 'refrigerator'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 1,
    isPro: false,
    name: 'Angelina Taho',
  },
  id: 1,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3731,
    longitude: 4.8922,
    zoom: 12,
  },
  maxAdults: 3,
  previewImage: '/img/apartment-01.jpg',
  price: 1200,
  rating: 3,
  title: 'Apartment',
  type: RoomTypes.APARTMENT,
},
// Paris Offers
{
  bedrooms: 2,
  city: {
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
    name: 'Paris',
  },
  description: 'Charming apartment in the heart of Paris with a stunning Eiffel Tower view.',
  goods: ['WiFi', 'Coffee machine', 'Washing machine'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 2,
    isPro: true,
    name: 'John Doe',
  },
  id: 2,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 48.8570, longitude: 2.3500, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1500,
  rating: 5,
  title: 'Luxury Apartment near Eiffel Tower',
  type: RoomTypes.APARTMENT,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 48.8666, longitude: 2.3123, zoom: 12 },
    name: 'Paris',
  },
  description: 'Cozy private room in the lively Latin Quarter.',
  goods: ['WiFi', 'Air conditioning'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 3,
    isPro: false,
    name: 'Marie Claire',
  },
  id: 3,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 48.8668, longitude: 2.3140, zoom: 12 },
  maxAdults: 2,
  previewImage: 'img/apartment-01.jpg',
  price: 800,
  rating: 4,
  title: 'Private Room in Parisian Flat',
  type: RoomTypes.ROOM,
},
// Cologne Offers
{
  bedrooms: 3,
  city: {
    location: { latitude: 50.9375, longitude: 6.9603, zoom: 12 },
    name: 'Cologne',
  },
  description: 'Spacious house near the Cologne Cathedral, perfect for families.',
  goods: ['Parking', 'Garden', 'WiFi'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 4,
    isPro: true,
    name: 'Karl Müller',
  },
  id: 4,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 50.9380, longitude: 6.9610, zoom: 12 },
  maxAdults: 6,
  previewImage: '/img/apartment-01.jpg',
  price: 2000,
  rating: 5,
  title: 'Family House in Cologne',
  type: RoomTypes.HOUSE,
},
// Brussels Offers
{
  bedrooms: 1,
  city: {
    location: { latitude: 50.8503, longitude: 4.3517, zoom: 12 },
    name: 'Brussels',
  },
  description: 'Modern apartment near Grand Place with top amenities.',
  goods: ['WiFi', 'Elevator', 'TV'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 5,
    isPro: true,
    name: 'Sophie Laurent',
  },
  id: 5,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: true,
  location: { latitude: 50.8510, longitude: 4.3500, zoom: 12 },
  maxAdults: 3,
  previewImage: '/img/apartment-01.jpg',
  price: 1300,
  rating: 3,
  title: 'Stylish Apartment in Brussels',
  type: RoomTypes.APARTMENT,
},
// Amsterdam Offers
{
  bedrooms: 1,
  city: {
    location: { latitude: 52.3676, longitude: 4.9041, zoom: 12 },
    name: 'Amsterdam',
  },
  description: 'Canal-side hotel room with picturesque views.',
  goods: ['Breakfast included', 'Free WiFi'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 6,
    isPro: false,
    name: 'Hans Berg',
  },
  id: 6,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: false,
  location: { latitude: 52.3680, longitude: 4.9020, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 900,
  rating: 4,
  title: 'Hotel Room with Canal View',
  type: RoomTypes.HOTEL,
},
// Brussels Offers
{
  bedrooms: 2,
  city: {
    location: { latitude: 50.8503, longitude: 4.3517, zoom: 12 },
    name: 'Brussels',
  },
  description: 'Spacious apartment near the Grand Place with modern design and stunning city views.',
  goods: ['WiFi', 'Kitchen', 'Elevator'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 13,
    isPro: true,
    name: 'Clara Dupont',
  },
  id: 13,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 50.8510, longitude: 4.3520, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1200,
  rating: 5,
  title: 'Modern Apartment in Brussels',
  type: RoomTypes.APARTMENT,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 50.8496, longitude: 4.3548, zoom: 12 },
    name: 'Brussels',
  },
  description: 'Cozy private room in a classic townhouse near the European Parliament.',
  goods: ['WiFi', 'Air conditioning', 'Breakfast included'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 14,
    isPro: false,
    name: 'Jean-Pierre Lambert',
  },
  id: 14,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 50.8498, longitude: 4.3550, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 700,
  rating: 4,
  title: 'Private Room in Brussels Townhouse',
  type: RoomTypes.ROOM,
},
// Hamburg Offers
{
  bedrooms: 3,
  city: {
    location: { latitude: 53.5511, longitude: 9.9937, zoom: 12 },
    name: 'Hamburg',
  },
  description: 'Large house with a garden and close to the harbor, perfect for families.',
  goods: ['Garden', 'WiFi', 'Parking'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 15,
    isPro: true,
    name: 'Lars Wagner',
  },
  id: 15,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 53.5520, longitude: 9.9940, zoom: 12 },
  maxAdults: 6,
  previewImage: '/img/apartment-01.jpg',
  price: 1800,
  rating: 5,
  title: 'Family House in Hamburg',
  type: RoomTypes.HOUSE,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 53.5500, longitude: 9.9934, zoom: 12 },
    name: 'Hamburg',
  },
  description: 'Stylish hotel room in the city center with access to fine dining and shopping.',
  goods: ['WiFi', 'Breakfast included', 'TV'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 16,
    isPro: false,
    name: 'Julia Meyer',
  },
  id: 16,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 53.5515, longitude: 9.9920, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 950,
  rating: 4,
  title: 'City Center Hotel Room',
  type: RoomTypes.HOTEL,
},
// Dusseldorf Offers
{
  bedrooms: 2,
  city: {
    location: { latitude: 51.2277, longitude: 6.7735, zoom: 12 },
    name: 'Dusseldorf',
  },
  description: 'Modern apartment with a terrace, located in the heart of the Altstadt.',
  goods: ['WiFi', 'Air conditioning', 'Elevator'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 17,
    isPro: true,
    name: 'Sophie Klein',
  },
  id: 17,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 51.2280, longitude: 6.7740, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1350,
  rating: 5,
  title: 'Terrace Apartment in Dusseldorf',
  type: RoomTypes.APARTMENT,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 51.2260, longitude: 6.7725, zoom: 12 },
    name: 'Dusseldorf',
  },
  description: 'Private room in a charming home near the Rhine River.',
  goods: ['WiFi', 'Kitchen', 'Parking'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 18,
    isPro: false,
    name: 'Peter Hofmann',
  },
  id: 18,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 51.2265, longitude: 6.7728, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 600,
  rating: 3,
  title: 'Cozy Room by the Rhine',
  type: RoomTypes.ROOM,
}, {
  bedrooms: 1,
  city: {
    location: { latitude: 48.8582, longitude: 2.2945, zoom: 12 },
    name: 'Paris',
  },
  description: 'Stylish one-bedroom apartment located near the Eiffel Tower, ' +
    'featuring contemporary decor and modern amenities.',
  goods: ['WiFi', 'Kitchen', 'Air conditioning'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 19,
    isPro: false,
    name: 'Julien Lefevre',
  },
  id: 19,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 48.8586, longitude: 2.2950, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 1100,
  rating: 5,
  title: 'Elegant Apartment Near Eiffel Tower',
  type: RoomTypes.APARTMENT,
},
{
  bedrooms: 2,
  city: {
    location: { latitude: 48.8600, longitude: 2.3376, zoom: 12 },
    name: 'Paris',
  },
  description: 'Spacious two-bedroom apartment with a view of the Sacré-Cœur, offering a cozy home away from home.',
  goods: ['WiFi', 'TV', 'Kitchen'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 20,
    isPro: false,
    name: 'Camille Durand',
  },
  id: 20,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 48.8602, longitude: 2.3380, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1350,
  rating: 4,
  title: 'Two-Bedroom Parisian Gem',
  type: RoomTypes.APARTMENT,
},
// Cologne Offers
{
  bedrooms: 1,
  city: {
    location: { latitude: 50.9371, longitude: 6.9607, zoom: 12 },
    name: 'Cologne',
  },
  description: 'Bright and cozy private room in the heart of Cologne, ' +
    'ideal for short stays with easy access to local attractions.',
  goods: ['WiFi', 'Kitchen', 'Coffee machine'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 21,
    isPro: true,
    name: 'Markus Schneider',
  },
  id: 21,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 50.9375, longitude: 6.9610, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 800,
  rating: 5,
  title: 'Cozy Room in Central Cologne',
  type: RoomTypes.ROOM,
},
{
  bedrooms: 2,
  city: {
    location: { latitude: 50.9384, longitude: 6.9600, zoom: 12 },
    name: 'Cologne',
  },
  description: 'Charming two-bedroom apartment with a spacious living room, ' +
    'located near the Rhine River and great restaurants.',
  goods: ['WiFi', 'Parking', 'Balcony'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 22,
    isPro: false,
    name: 'Theresa Müller',
  },
  id: 22,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 50.9388, longitude: 6.9612, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1100,
  rating: 4,
  title: 'Spacious Apartment Near the Rhine',
  type: RoomTypes.APARTMENT,
},
// Hamburg Offers
{
  bedrooms: 2,
  city: {
    location: { latitude: 53.5515, longitude: 9.9938, zoom: 12 },
    name: 'Hamburg',
  },
  description: 'Modern two-bedroom apartment with a stylish living room ' +
    'and views of the Elbe River, perfect for city explorers.',
  goods: ['WiFi', 'TV', 'Coffee machine'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 23,
    isPro: true,
    name: 'Oliver Becker',
  },
  id: 23,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 53.5520, longitude: 9.9945, zoom: 12 },
  maxAdults: 4,
  previewImage: '/img/apartment-01.jpg',
  price: 1600,
  rating: 5,
  title: 'Riverfront Apartment in Hamburg',
  type: RoomTypes.APARTMENT,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 53.5527, longitude: 9.9915, zoom: 12 },
    name: 'Hamburg',
  },
  description: 'Comfortable hotel room with all amenities, situated in Hamburg’s city center for a convenient stay.',
  goods: ['WiFi', 'Air conditioning', 'Gym access'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 24,
    isPro: false,
    name: 'Klara Weber',
  },
  id: 24,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 53.5525, longitude: 9.9920, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 950,
  rating: 4,
  title: 'City Center Hotel Room in Hamburg',
  type: RoomTypes.HOTEL,
},
// Dusseldorf Offers
{
  bedrooms: 3,
  city: {
    location: { latitude: 51.2271, longitude: 6.7735, zoom: 12 },
    name: 'Dusseldorf',
  },
  description: 'A family-friendly house with a private backyard and access to public parks and shopping areas.',
  goods: ['Garden', 'Parking', 'WiFi'],
  host: {
    avatarUrl: '/img/avatar-max.jpg',
    id: 25,
    isPro: true,
    name: 'Michael Schmidt',
  },
  id: 25,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: true,
  location: { latitude: 51.2280, longitude: 6.7730, zoom: 12 },
  maxAdults: 6,
  previewImage: '/img/apartment-01.jpg',
  price: 2000,
  rating: 5,
  title: 'Spacious Family House in Dusseldorf',
  type: RoomTypes.HOUSE,
},
{
  bedrooms: 1,
  city: {
    location: { latitude: 51.2265, longitude: 6.7745, zoom: 12 },
    name: 'Dusseldorf',
  },
  description: 'Charming private room in a contemporary flat, perfect for business trips or short stays.',
  goods: ['WiFi', 'Coffee machine', 'Kitchen'],
  host: {
    avatarUrl: '/img/avatar-angelina.jpg',
    id: 26,
    isPro: false,
    name: 'Lena Wagner',
  },
  id: 26,
  images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
  isFavorite: false,
  isPremium: false,
  location: { latitude: 51.2270, longitude: 6.7740, zoom: 12 },
  maxAdults: 2,
  previewImage: '/img/apartment-01.jpg',
  price: 700,
  rating: 3,
  title: 'Private Room in Modern Flat',
  type: RoomTypes.ROOM,
},
];

export const reviews: ReviewsType[] = [
  {
    comment: 'The apartment was clean and spacious. ' +
      'The location was perfect for sightseeing, with many attractions within walking distance.',
    date: '2024-12-01',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 101,
      isPro: false,
      name: 'John Doe'
    }
  },
  {
    comment: 'The host was very friendly and helpful. ' +
      'The kitchen was well-equipped, and the WiFi was fast. Highly recommend!',
    date: '2024-11-28',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 102,
      isPro: true,
      name: 'Sophia Lane'
    }
  },
  {
    comment: 'Great value for the price. ' +
      'However, the bedroom was a bit noisy due to the nearby street.',
    date: '2024-11-20',
    id: 3,
    rating: 3,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 103,
      isPro: false,
      name: 'Michael Brown'
    }
  },
  {
    comment: 'We had a lovely stay! The apartment is exactly as described, ' +
      'and the view from the balcony was stunning.',
    date: '2024-11-15',
    id: 4,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 104,
      isPro: true,
      name: 'Emily Green'
    }
  },
  {
    comment: 'The location was good, but the cleanliness could ' +
      'have been better. The bathroom needs some renovation.',
    date: '2024-11-10',
    id: 5,
    rating: 2,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 105,
      isPro: false,
      name: 'David Wilson'
    }
  },
  {
    comment: 'Fantastic stay! The host went above and ' +
      'beyond to ensure we were comfortable. Will definitely return.',
    date: '2024-10-30',
    id: 6,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 106,
      isPro: true,
      name: 'Olivia Taylor'
    }
  },
  {
    comment: 'The apartment was okay, but the check-in process was a bit confusing. ' +
      'Clearer instructions would be appreciated.',
    date: '2024-10-25',
    id: 7,
    rating: 3,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 107,
      isPro: false,
      name: 'Ethan Martinez'
    }
  },
  {
    comment: 'The place was charming and well-decorated. ' +
      'Close to many restaurants and cafes. Perfect for a weekend getaway.',
    date: '2024-10-20',
    id: 8,
    rating: 4,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 108,
      isPro: true,
      name: 'Isabella Johnson'
    }
  },
  {
    comment: 'Not worth the money. The furniture was old, ' +
      'and the photos didn’t match reality. Disappointed with the stay.',
    date: '2024-10-15',
    id: 9,
    rating: 1,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 109,
      isPro: false,
      name: 'Liam Garcia'
    }
  },
  {
    comment: 'Amazing experience! The apartment was luxurious, ' +
      'and the host provided excellent service. 10/10 would recommend.',
    date: '2024-10-05',
    id: 10,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 110,
      isPro: true,
      name: 'Ava Martinez'
    }
  }
];


