'use client';

import React from 'react';
import { useRef, useEffect, memo } from 'react';
import { Icon, Marker } from 'leaflet';
import { Markers } from '@/lib/const';
import useMap from '@/lib/hooks/map';
import { OffersType } from '@/lib/types/global';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: OffersType[];
  selectedPoint?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: Markers.DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: Markers.CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map(props: MapProps) {
  const { offers, selectedPoint } = props;
  const city = offers[0].city;
  const points = offers.map((offer) => ({ location: offer.location, id: offer.id }));
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude]);
    }
  }, [map, city]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default memo(Map);
