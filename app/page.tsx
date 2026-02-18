import HeroSection from '../components/HeroSection/heroSection';
import NavBar from '../components/Navbar/Navbar';
import Proiecte from '../components/Proiecte/Proiecte';
import ModalContact from '../components/ModalContact/ModalContact';
import CineSuntEu from '../components/CineSuntEu/CineSuntEu';
import Recenzii from '../components/recenzii/Recenzii';
import BodyCta1 from '../components/BodyCta1/BodyCta1';
import BodyWhy from '../components/BodyWhy/BodyWhy';
import Footer from '../components/Footer/Footer';
import CumDecurge from '../components/CumDecurge/CumDecurge';
import BodyCta2 from '../components/BodyCta2/BodyCta2';

export default function Page(){
  return(
    <>
        <NavBar/>
        <HeroSection/>
        <Proiecte/>
        <CineSuntEu/>
        <Recenzii/>
        <BodyCta1/>
        <CumDecurge/>
        <BodyWhy/>
        <BodyCta2/>
        <Footer/>
    </>
  )
}