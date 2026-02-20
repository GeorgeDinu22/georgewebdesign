"use client";
import { Play, Volume2, VolumeOff } from 'lucide-react';
import { useRef, useState } from 'react';

export default function CardRecenzie({recenzie}){

    const [isPlaying,setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVideo = async () => {
    if (!videoRef.current) return;

    try {
        if (videoRef.current.paused) {
        setIsLoading(true);
        await videoRef.current.play();
        setIsPlaying(true);
        } else {
        videoRef.current.pause();
        setIsPlaying(false);
        }
    } catch (err) {
        console.log("Play interrupted:", err);
    } finally {
        setIsLoading(false);
    }
    };


    return(
        <div
            onClick={toggleVideo}
            className="cardVideo"
        >

            {isLoading && (
            <div className="videoLoader">
                <div className="spinner"></div>
            </div>
            )}

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
            preload="none"
            muted={isMuted}
            onLoadStart={() => setIsLoading(true)}
            onWaiting={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onPlaying={() => setIsLoading(false)}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsLoading(false)}
            >
            Browserul tau nu suportă acest video!
            </video>
        </div>
    )
}