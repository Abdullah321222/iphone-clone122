import React,{useState,useEffect} from 'react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.to('#hero-text', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -20, delay: 2 });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p id="hero-text" className="hero-title">iPhone 15 Pro</p>
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div id="cta" className="cta">
          <a href="#features" className="btn">Buy Now</a>
          <p>From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
