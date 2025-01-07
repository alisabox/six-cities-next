'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import Loading from '@/app/loading';
import Card from '@/components/card';
import Header from '@/components/header';
import { BookmarkIcon } from '@/components/icons/bookmark';
import { MAX_RATING, RoomTypes } from '@/lib/const';
import { offers } from '@/lib/data';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

type OfferParams = {
  id: string;
};

const MAX_NUMBER_OF_IMAGES = 6;

export default function Offer() {
  const params = useParams<OfferParams>();
  const id = parseInt(params.id!, 10);

  const offer = offers.find(x => x.id === id);
  const nearbyOffers = offers.filter(x => x.city.name === offer?.city.name && x.id !== id);

  if (!offer) {
    return (
      <Loading />
    );
  }

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    isFavorite
  } = offer;
  const { avatarUrl, isPro, name } = host;

  return (
    <div className="page">
      <Header isWithUserNavigation />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.slice(0, MAX_NUMBER_OF_IMAGES).map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Property" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium
                  ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : ''
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button 
                    ${isFavorite ? 'property__bookmark-button--active' : ''} button`}
                  type="button"
                  onClick={() => console.log('clicked')}
                >
                  <BookmarkIcon className="property__bookmark-icon" />
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${Math.round(rating) / MAX_RATING * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {RoomTypes[type.toUpperCase()]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms === 1 ? '1 Bedroom' : `${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={`../${avatarUrl}`}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro
                      ?
                      <span className="property__user-status">
                        Pro
                      </span>
                      : ''
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              {/*{*/}
              {/*  reviews*/}
              {/*    ? <ReviewsList reviews={reviews} />*/}
              {/*    : ''*/}
              {/*}*/}
            </div>
          </div>
          <section className="property__map map">
            {
              nearbyOffers
                ? <Map offers={[offer, ...nearbyOffers]} selectedPoint={id} />
                : ''
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nearbyOffers
                  ? nearbyOffers.map((nearbyOffer) =>
                    <Card key={nearbyOffer.id} offer={nearbyOffer} isPropertyScreen />)
                  : ''
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
