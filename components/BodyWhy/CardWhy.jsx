
import {Code, Handshake, Palette, Zap, LayoutDashboard, Clock } from 'lucide-react';

export default function CardWhy({item}){
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

          <div className="continutCardOverlay">
            
                </div>
            
            <div className='continutCard'>
                <h4>{item.titlu}</h4>
                <p>{item.descriere}</p>
                <div className="icon">
                    <Icon size="30" color="#FF8A00"/>
                </div>
            </div>
      
        </div>
    )
}