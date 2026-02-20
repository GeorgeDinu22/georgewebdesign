"use client";
import { Play, Volume2, VolumeOff } from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

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
            className={styles.cardVideo}
        >

            {isLoading && (
            <div className={styles.videoLoader}>
                <div className={styles.spinner}></div>
            </div>
            )}

        <div onClick={(e) =>{
                        e.stopPropagation()
                        setIsMuted(prev => !prev)
                    }
            }className={styles.buttonSound}>
            {isMuted ? (
                <VolumeOff size={24}/>
            )
            : (
                <Volume2 size={24}/>
            )
        }
        </div>

        <div className={styles.coltStanga}></div>
        <div className={styles.coltDreapta}></div>

            <div className={`${styles.videoOverlay} ${isPlaying ? styles.videoPlaying : ""}`}>
                <div className={styles.playScreen}>
                    <Play size={60} stroke='#FF8A00'/>
                 </div>

                <p className={styles.numeRecenzie}>
                    {recenzie.nume}
                </p>
                <div className={styles.proiecteRecenzie}>
                    {recenzie.proiecte.map((rec,index) => (
                        <div key={index} className={styles.itemProiecteRecenzie}>
                            <div className={styles.dot}></div>
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