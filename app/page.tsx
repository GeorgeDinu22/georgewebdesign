import NavBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/heroSection';
import Proiecte from '../components/Proiecte/Proiecte'; 
import dynamic from 'next/dynamic';

const CineSuntEu = dynamic(() => import('../components/CineSuntEu/CineSuntEu'));
const Recenzii = dynamic(() => import('../components/recenzii/Recenzii'));
const BodyCta1 = dynamic(() => import('../components/BodyCta1/BodyCta1'));
const CumDecurge = dynamic(() => import('../components/CumDecurge/CumDecurge'));
const BodyWhy = dynamic(() => import('../components/BodyWhy/BodyWhy'));
const BodyCta2 = dynamic(() => import('../components/BodyCta2/BodyCta2'));
const Footer = dynamic(() => import('../components/Footer/Footer'));

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