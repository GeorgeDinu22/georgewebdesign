"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import './styles.css';
const HartaClient = dynamic(() => import('./HartaEu'), {
  ssr: false,
  loading: () => (
      <div className="containerHarta" style={{ background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{color: '#696969'}}>Se încarcă harta...</p>
      </div>
  )
});

export default function CineSuntEu(){


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

        <HartaClient/>
    </div>
    )
}