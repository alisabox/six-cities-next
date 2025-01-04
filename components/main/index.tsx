import Link from 'next/link';
import MainScreenEmpty from '@/components/main-empty';
import OffersList from '@/components/offers-list';
import { AppRoute, cities } from '@/lib/const';
import { OffersType } from '@/lib/types/global';
import '@/public/css/main.css';

export default function MainScreen() {
  const selectedCity = '';
  const offersInSelectedCity = [] as OffersType[];

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
                    className={`locations__item-link tabs__item ${menuCity === selectedCity ? 'tabs__item--active' : ''}`}
                    href={AppRoute.ROOT}
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
        offersInSelectedCity.length === 0
          ? <MainScreenEmpty selectedCity={selectedCity}/>
          : <OffersList selectedCity={selectedCity} offers={offersInSelectedCity}/>
      }
    </main>
  );
}
