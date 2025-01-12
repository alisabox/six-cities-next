'use client';

import dynamic from 'next/dynamic';
import { OffersType } from '@/lib/types/global';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

type Props = {
  currentOffer: OffersType;
  nearbyOffers: OffersType[];
};

export default function OfferPageMap({ currentOffer, nearbyOffers }: Props) {
  return (
    <section className="property__map map">
      {
        nearbyOffers
          ? <Map offers={[currentOffer, ...nearbyOffers]} selectedPoint={currentOffer.id}/>
          : ''
      }
    </section>
  );
}
