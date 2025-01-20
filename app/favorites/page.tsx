import Link from 'next/link';
import Card from '@/components/card';
import FavoritesScreenEmpty from '@/components/favorites-empty';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { verifySession } from '@/lib/auth';
import { AppRoute, cities } from '@/lib/const';
import { fetchFavoriteOffers } from '@/lib/data';
import { FavoriteCitiesType, OffersType } from '@/lib/types/global';
import '@/public/css/main.css';

export default async function Favorites() {
  const { userId } = await verifySession();
  const favoriteOffers: OffersType[] = await fetchFavoriteOffers();
  const favoriteOffersByCity: FavoriteCitiesType = cities.reduce((acc, city) => {
    const offersInCity = favoriteOffers.filter((offer) => offer.city.name === city);
    if (offersInCity.length > 0) {
      return { ...acc, [city]: offersInCity };
    }
    return acc;
  }, {} as FavoriteCitiesType);

  return !favoriteOffers.length
    ? (<FavoritesScreenEmpty />)
    : (
      <div className="page">
        <Header isWithUserNavigation={true} userId={userId} />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.entries(favoriteOffersByCity).map((entry) => (
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
