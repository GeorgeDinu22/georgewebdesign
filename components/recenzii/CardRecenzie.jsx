"use client";

import { Play, Pause, Volume2, VolumeOff } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function CardRecenzie({ recenzie }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const videoSrc = recenzie.src;
  let hls;

  async function initHls() {
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      return;
    }

    const Hls = (await import("hls.js")).default;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        hls.currentLevel = hls.levels.length - 1;
      });
    }
  }

  initHls();

  return () => {
    if (hls) hls.destroy();
  };
}, [recenzie.src]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);


  const toggleVideo = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
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

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);

    if (duration === 0 && videoRef.current.duration > 0) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const progressPercent =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onClick={toggleVideo}
      className={`${styles.cardVideo} ${isVisible ? styles.show : ""}`}
    >
      {isLoading && (
        <div className={styles.videoLoader}>
          <div className={styles.spinner}></div>
        </div>
      )}

      <div
        className={`${styles.videoOverlay} ${
          isPlaying ? styles.videoPlaying : ""
        }`}
      >
        <p className={styles.numeRecenzie}>{recenzie.nume}</p>

        <div className={styles.proiecteRecenzie}>
          {recenzie.proiecte?.map((rec, index) => (
            <div key={index} className={styles.itemProiecteRecenzie}>
              <div className={styles.dot}></div>
              <p>{rec}</p>
            </div>
          ))}
        </div>
      </div>

      <video
        ref={videoRef}
        playsInline
        poster={recenzie.poster}
        preload="metadata"
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onLoadStart={() => setIsLoading(true)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onPlaying={() => setIsLoading(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      {/* Controls */}
      <div
        className={styles.progresContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.playScreen} onClick={toggleVideo}>
          {isPlaying ? (
            <Pause size={24} fill="white" stroke="none" />
          ) : (
            <Play size={24} fill="white" stroke="none" />
          )}
        </div>

        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className={styles.progressBarInput}
          style={{
            backgroundSize: `${progressPercent}% 100%`,
          }}
        />

        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted((prev) => !prev);
          }}
          className={styles.buttonSound}
        >
          {isMuted ? <VolumeOff size={24} /> : <Volume2 size={24} />}
        </div>
      </div>
    </div>
  );
}