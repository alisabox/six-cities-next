import Link from 'next/link';
import Card from '@/components/card';
import FavoritesScreenEmpty from '@/components/favorites-empty';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { AppRoute, cities } from '@/lib/const';
import { offers } from '@/lib/data';
import { FavoriteCitiesType, OffersType } from '@/lib/types/global';
import '@/public/css/main.css';

export default function Favorites() {
  const favoriteOffers: OffersType[] = offers.filter(offer => offer.isFavorite);
  const favoriteCities: FavoriteCitiesType = {};
  cities.map((city) => {
    const cityFavoriteOffers = favoriteOffers.filter((offer) => offer.city.name === city);
    if (cityFavoriteOffers.length > 0) {
      return favoriteCities[city] = cityFavoriteOffers;
    }
    return null;
  });

  return !favoriteOffers.length
    ? (<FavoritesScreenEmpty />)
    : (
      <div className="page">
        <Header isWithUserNavigation />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.entries(favoriteCities).map((entry) => (
                    <li key={entry[0]} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link
                            className="locations__item-link"
                            href={AppRoute.ROOT + `?city=${entry[0].toLowerCase()}`}
                            data-city={entry[0]}
                          >
                            <span>{entry[0]}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          entry[1].map((favoriteOffer) =>
                            <Card key={favoriteOffer.id} offer={favoriteOffer} isFavoriteScreen />)
                        }
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
}
