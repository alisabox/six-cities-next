'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Card from '@/components/card';
import SortVariants from '@/components/sort-variants';
import { sortOffers } from '@/lib/const';
import { OffersType } from '@/lib/types/global';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

type OffersProps = {
  selectedCity: string;
  offers: OffersType[];
};

export default function OffersList({ selectedCity, offers }: OffersProps) {

  const listItemHoverHandler = React.useCallback((id?: number) => {
    onListItemHover(id);
  }, []);

  const [selectedPoint, setSelectedPoint] = React.useState<number | undefined>(undefined);

  const onListItemHover = (id?: number) => {
    setSelectedPoint(id);
  };

  const [sortedOffers, setSortedOffers] = React.useState(offers);
  const onSortModeChange = React.useCallback((sort: string | null) => {
    setSortedOffers(sortOffers(offers, sort));
  }, [offers]);

  React.useEffect(() => {
    setSortedOffers(offers);
    window.scrollTo(0, 0);
  }, [offers]);

  React.useEffect(() => {
    setSelectedPoint(undefined);
  }, [selectedCity]);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length === 1 ? '1 place' : `${offers.length} places`} to stay in {selectedCity}
          </b>
          <SortVariants onSortModeChange={onSortModeChange} selectedCity={selectedCity} />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.slice().map((offer: OffersType) =>
              <Card key={offer.id} offer={offer} listItemHoverHandler={listItemHoverHandler} isMainScreen />,
            )}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={offers} selectedPoint={selectedPoint} />
          </section>
        </div>
      </div>
    </div>
  );
}
