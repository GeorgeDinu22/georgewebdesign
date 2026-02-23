"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
} from "@/components/ui/map";
import styles from './styles.module.css';
import { MapPin } from 'lucide-react';

export default function HartaClient() {
    const places = [
      {
        id: 1,
        lng: 26.1056,
        lat: 44.4303,
      }
    ];

    return (
        <div className={styles.containerHarta}>
            <div className={styles.mapLegend}>
                <div className={styles.hallowDot}></div>
                <p>Disponibil</p>
            </div>

            <Map
                center={[26.1025, 44.4268]}
                dragPan={false}
                scrollZoom={false}
                doubleClickZoom={false}
                touchZoomRotate={false}
                keyboard={false}
                zoom={11.35}
                attributionControl={false}
            >
                {places.map((place) => (
                    <MapMarker
                        key={place.id}
                        longitude={place.lng}
                        latitude={place.lat}
                    >
                        <MarkerContent>
                            <MapPin
                                size={40}
                                fill="black"
                                strokeWidth={2}
                                color="#FF8A00"
                            />
                        </MarkerContent>
                    </MapMarker>
                ))}
            </Map>
        </div>
    );
}