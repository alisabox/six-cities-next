import { useEffect, useState, RefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { toast } from 'react-toastify';
import { CityType } from '@/lib/types/global';

function useMap(
  mapRef: RefObject<HTMLElement | null>,
  city: CityType,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      try {
        const instance = new Map(mapRef.current, {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: city.location.zoom,
        });

        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; ' +
              '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
              'contributors &copy; ' +
              '<a href="https://carto.com/attributions">CARTO</a>',
          },
        );

        instance.addLayer(layer);

        setMap(instance);
      } catch (e) {
        toast.error(e instanceof Error ? e.message : 'Could not load the map.');
      }
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
