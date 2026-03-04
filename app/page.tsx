import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/heroSection';
import ScrollInit from '../components/ObserverAnimations';
import ProiecteWrapper from "../components/Proiecte/ProiecteWrapper";
import CineSuntEu from '../components/CineSuntEu/CineSuntEu';
import Recenzii from '../components/recenzii/Recenzii';
import BodyCta1 from '../components/BodyCta1/BodyCta1';
import CumDecurge from '../components/CumDecurge/CumDecurge';
import BodyWhy from '../components/BodyWhy/BodyWhy';
import BodyCta2 from '../components/BodyCta2/BodyCta2';
import Footer from '../components/Footer/Footer';

export default function Page(){
  return(
    <>
        <ScrollInit/>
        <NavBar/>
        <HeroSection/>
        <ProiecteWrapper/>
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