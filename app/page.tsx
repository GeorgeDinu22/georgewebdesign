import dynamic from 'next/dynamic';
import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/heroSection';
import ScrollInit from '../components/ObserverAnimations';
import ProiecteWrapper from "../components/Proiecte/ProiecteWrapper";

const CineSuntEu = dynamic(() => import('../components/CineSuntEu/CineSuntEu'));
const Recenzii = dynamic(() => import('../components/recenzii/Recenzii'));
const BodyCta1 = dynamic(() => import('../components/BodyCta1/BodyCta1'), {
  loading: () => <div style={{ minHeight: '400px' }} /> 
});
const CumDecurge = dynamic(() => import('../components/CumDecurge/CumDecurge'));
const BodyWhy = dynamic(() => import('../components/BodyWhy/BodyWhy'));
const BodyCta2 = dynamic(() => import('../components/BodyCta2/BodyCta2'));
const Footer = dynamic(() => import('../components/Footer/Footer'));

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