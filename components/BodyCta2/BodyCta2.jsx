import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import './styles.css';
import ButtonContact from "../ButtonContact/ButtonContact";

export default function BodyCta2(){
    const images = [
    "/proiecte/statemihai.ro_ImageV2.png",
    "/galerieProiecte/statemihai-1.png",
    "/galerieProiecte/statemihai-1.png",
    "/galerieProiecte/statemihai-2.png",

    "/proiecte/mihaistate-abonare.ro_Image.png",
    "/galerieProiecte/mihaistate-abonare-2.png",

    "/proiecte/mombu.png",
    "/galerieProiecte/mombu-3.png",
    "/galerieProiecte/mombu-2.png",
    "/galerieProiecte/mombu-4.png",

    "/proiecte/joydetailing.ro_ImageV2.png",
    "/galerieProiecte/joy-1.png",
    "/galerieProiecte/joy-2.png",
    "/galerieProiecte/joy-3.png",

    "/proiecte/infinitylounge.ro_ImageV2.png",
    "/galerieProiecte/infinitylounge-1.png",
    "/galerieProiecte/infinitylounge-3.png",
    "/galerieProiecte/infinitylounge-4.png",
    "/proiecte/mihaistate-abonare.ro_Image.png",
    "/galerieProiecte/mihaistate-abonare-2.png",
    

    "/proiecte/mombu.png",
    "/galerieProiecte/mombu-3.png",
    "/galerieProiecte/mombu-2.png",
    "/galerieProiecte/mombu-4.png",

    "/proiecte/joydetailing.ro_ImageV2.png",
    "/galerieProiecte/joy-1.png",
    "/galerieProiecte/joy-2.png",
    "/galerieProiecte/joy-3.png",

    "/proiecte/infinitylounge.ro_ImageV2.png",
    "/galerieProiecte/infinitylounge-1.png",
    "/galerieProiecte/infinitylounge-3.png",
    "/galerieProiecte/infinitylounge-4.png"
];

    return(
        <div className="bodyCta2">
            <div className="containerMarquee">
                <ThreeDMarquee className="marquee" images={images} />
            </div>
            <div className="overlayCta">
                <h6>Gata să îți duci afacerea la <span>următorul nivel?</span></h6>
                <p>Construim împreună un website care atrage, convinge și generează rezultate</p>
                <div className="containerButton">
                    <ButtonContact textBtn={"Hai să discutăm"}/>
                </div>
                
            </div>
        </div>
    )
}