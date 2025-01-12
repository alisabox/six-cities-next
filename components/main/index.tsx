import Link from 'next/link';
import MainScreenEmpty from '@/components/main-empty';
import OffersList from '@/components/offers-list';
import { AppRoute, cities } from '@/lib/const';
import { fetchOffers } from '@/lib/data';
import '@/public/css/main.css';


export default async function MainScreen({ selectedCity }: { selectedCity: string }) {
  const offers = await fetchOffers();
  const offersInSelectedCity = offers.filter(offer => offer.city.name === selectedCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((menuCity) => (
                <li key={menuCity} className="locations__item">
                  <Link
                    className={`locations__item-link tabs__item 
                      ${menuCity === selectedCity ? 'tabs__item--active' : ''}`}
                    href={AppRoute.ROOT + `?city=${menuCity.toLowerCase()}`}
                  >
                    <span>{menuCity}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
      {
        offers.length === 0
          ? <MainScreenEmpty selectedCity={selectedCity}/>
          : <OffersList selectedCity={selectedCity} offers={offersInSelectedCity}/>
      }
    </main>
  );
}
