import dynamic from 'next/dynamic';

import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/heroSection';
import ScrollInit from '../components/ObserverAnimations';
import ProiecteWrapper from "../components/Proiecte/ProiecteWrapper";
import CineSuntEu from '../components/CineSuntEu/CineSuntEu';
import Recenzii from '../components/recenzii/Recenzii';
import BodyWhy from '../components/BodyWhy/BodyWhy';
import Footer from '../components/Footer/Footer';

const BodyCta1 = dynamic(() => import('../components/BodyCta1/BodyCta1'), {
  loading: () => <div style={{ minHeight: '400px' }} /> 
});
const CumDecurge = dynamic(() => import('../components/CumDecurge/CumDecurge'));
const BodyCta2 = dynamic(() => import('../components/BodyCta2/BodyCta2'));

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