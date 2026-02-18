"use client";
import { Play, Volume2, VolumeOff } from 'lucide-react';
import { useRef, useState } from 'react';

export default function CardRecenzie({recenzie}){

    const [isPlaying,setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const toggleVideo = () => {
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause();
                setIsPlaying(false);
            }
            else{
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    }

    return(
        <div
            onClick={toggleVideo}
            className="cardVideo"
         >

        <div onClick={(e) =>{
                        e.stopPropagation()
                        setIsMuted(prev => !prev)
                    }
            }className="buttonSound">
            {isMuted ? (
                <VolumeOff size={24}/>
            )
            : (
                <Volume2 size={24}/>
            )
        }
        </div>

        <div className="coltStanga"></div>
        <div className="coltDreapta"></div>

            <div className={`videoOverlay ${isPlaying ? "videoPlaying" : ""}`}>
                <div className="playScreen">
                    <Play size={60} stroke='#FF8A00'/>
                 </div>

                <p className='numeRecenzie'>
                    {recenzie.nume}
                </p>
                <div className="proiecteRecenzie">
                    {recenzie.proiecte.map((rec,index) => (
                        <div key={index} className="itemProiecteRecenzie">
                            <div className="dot"></div>
                            <p>{rec}</p>
                        </div>
                    ))}               
                </div>
            </div>
            <video 
                ref={videoRef}
                src={recenzie.src}
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
                muted={isMuted}
            >
                Browserul tau nu supporta acest video!
            </video>
        </div>
    )
}