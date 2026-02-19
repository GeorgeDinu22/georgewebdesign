
import {Code, Handshake, Palette, Zap, LayoutDashboard, Clock } from 'lucide-react';
import Image from 'next/image';

export default function CardWhy({item, index}){
    const iconMap = {
                        Code,
                        Handshake,
                        Palette,
                        Zap,
                        LayoutDashboard,
                        Clock
                    };

    const Icon = iconMap[item.icon];

    return(
        <div className='cardWhy'>
                <div className="icon">
                    <Icon size="30" color="#FF8A00"/>
                </div>
                <h4>{item.titlu}</h4>
                <p>{item.descriere}</p>
                {index == 0 && (
                    <Image
                    className='backgroundCard'
                    src={"/cardBackground.png"}
                    alt=''
                    width={400}
                    height={400}
                    />
                )}
        </div>
    )
}