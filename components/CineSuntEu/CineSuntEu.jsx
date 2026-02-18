import Image from 'next/image';
import './styles.css';
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { MapPin } from 'lucide-react';

export default function CineSuntEu(){

    const places = [
  {
    id: 1,
    name: "The Metropolitan Museum of Art",
    label: "Museum",
    category: "Museum",
    rating: 4.8,
    reviews: 12453,
    hours: "10:00 AM - 5:00 PM",
    image:
      "/proiecte/infinitylounge.ro_ImageV2.png",
    lng: 26.1056,
    lat: 44.4303,
  }
];

    return(
        <div className="bodyEu">

        <div className="leftPart">
            <div className="containerTitle">
                <h2>Despre mine</h2>
            </div>

            <div className="containerEU">

                <p>
                    Mă numesc <strong>Dinu George</strong> și mă ocup cu realizarea 
                    platformelor digitale și a site-urilor de prezentare moderne.
                </p>

                <p>
                    Scopul meu este ca fiecare client cu care lucrez să aibă o 
                    imagine curată în online, o prezență solidă și 
                    bine conturată, cu un aspect modern și orientat spre rezultate.
                </p>

               <p>
                    Când vine vorba de AI sau template-uri deja făcute, cred că nu poți avea 
                    performanțe excelente atunci când singura ta prezenta în online este identică 
                    cu a altor zeci de afaceri. Diferența reală și rezultatele apare atunci când tehnologia este 
                    combinată cu gândire strategică, atenția la detalii și o abordare complet de la zero pentru viziunea ta.
                </p>
            </div>
        </div>  

    <div className="rightPart">
        <div className="wrapperImageEu">
            <Image
            src="/aboutMeV2.jpeg"
            width={700}
            height={700}
            alt=''
            />
        </div>
        </div>

        <div className="containerHarta">
            <div className="mapLegend">
                <div className="hallowDot"></div>
                <p>Disponibil</p>
            </div>
            <Map center={[26.1025, 44.4268]}
                dragPan={false}
                scrollZoom={false}
                doubleClickZoom={false}
                touchZoomRotate={false}
                keyboard={false}
                zoom={11.35}
                attributionControl={false}
            >
                {places.map((place) => (
                <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
                    <MarkerContent>
                        <MapPin size={40} fill='black' strokeWidth={2} color='#FF8A00'/>
                    <MarkerLabel position="bottom">{place.label}</MarkerLabel>
                    </MarkerContent>
                </MapMarker>
                ))}
            </Map>
        </div>
    </div>
    )
}