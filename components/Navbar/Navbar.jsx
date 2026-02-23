"use client";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp } from 'lucide-react';
import { useState , useEffect, useRef} from "react";
import ButtonContact from "../ButtonContact/ButtonContact";

export default function Header(){

    const [droped, SetDroped] = useState(false);
    const [radius,setRadius] = useState(false);

    const HandleBoxCLick = () =>{
        SetDroped(prev => !prev);

        if(!droped){
            setRadius(true);
        }
        else{
            setTimeout(() => {
                 setRadius(false);
            },400);
        }
    }

    const headerRef = useRef(null);

  useEffect(() => {
    let Scroll_Initial = window.scrollY;

    const handleScroll = () => {
      let current_Scroll = window.scrollY;

      if (current_Scroll > Scroll_Initial + 4 && current_Scroll > 20) {

        // ascunde headerul
        headerRef.current?.classList.add("headerHidden");

        // închide meniul
        SetDroped(false);

      } else if (current_Scroll < Scroll_Initial - 4 || current_Scroll <= 20) {
        headerRef.current?.classList.remove("headerHidden");
        setRadius(false);
      }

      Scroll_Initial = current_Scroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

    
    return(
        <>
        <header className={`${radius ? "headerRadius" : ""}`} ref={headerRef}>
            <Link className="logo" href="/">
            <Image
              src="/logo.svg"
              alt="George Web Design"
              width={150}
              height={50}
              priority
            />
            </Link>
            <div className="orizontalNavigation">
                <Link  className="linkHeaderHor" href="/">Acasă</Link>
                <Link  className="linkHeaderHor" href="#proiecte">Proiecte</Link>
                <Link  className="linkHeaderHor" href="#despreMine">Despre Mine</Link>
                <Link  className="linkHeaderHor" href="#recenzii">Recenzii</Link>
                <Link  className="linkHeaderHor" href="#contact">Contact</Link>
            </div>
            <div onClick={() => HandleBoxCLick()} className="box">
                <div className={`line ${droped ? "cross" : ""}`}></div>
                <div className={`line ${droped ? "cross" : ""}`}></div>
                <div className={`line ${droped ? "cross" : ""}`}></div>
            </div>
            <div className={`dropDown ${droped ? "droped" : ""}`}>
                <Link onClick={() => HandleBoxCLick()} className="linkHeader" href="/">Acasă</Link>
                <Link onClick={() => HandleBoxCLick()} className="linkHeader" href="#proiecte">Proiecte</Link>
                <Link onClick={() => HandleBoxCLick()} className="linkHeader" href="#despreMine">Despre Min</Link>
                <Link onClick={() => HandleBoxCLick()} className="linkHeader" href="#recenzii">Recenzii</Link>
                <Link onClick={() => HandleBoxCLick()} className="linkHeader" href="#contact">Contact</Link>
            </div>
        </header>
        </>
    )
} 