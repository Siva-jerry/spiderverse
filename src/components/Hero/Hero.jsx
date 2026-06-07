import "./Hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import spiderman from "../../assets/images/spiderman.png";
import skyline from "../../assets/images/nyc-skyline.png";

function Hero() {
  const [showVideo,setShowVideo] =
useState(false);
  return (
    <section id="home" className="hero">

      <div className="red-glow"></div>
      <div className="blue-glow"></div>

      <div className="particles"></div>

      <img
        src={skyline}
        alt="New York"
        className="skyline"
      />

      <div className="hero-content">

        <h1 className="hero-title">
          SPIDERVERSE
        </h1>

        <h2 className="hero-subtitle">
          YOUR FRIENDLY
          <br />
          NEIGHBORHOOD
          <br />
          SPIDER-MAN
        </h2>

        <p className="hero-description">
          Explore the life, powers, allies,
          villains and legacy of Marvel's
          greatest hero.
        </p>

  <div className="hero-buttons">

  <button
    className="hero-btn"
    onClick={() => {
      document
        .getElementById("origin")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }}
  >
    ENTER THE SPIDER-VERSE
  </button>

  <button
    className="play-btn"
    onClick={() => setShowVideo(true)}
  >
    ▶ Watch Trailer
  </button>

</div>
<VideoModal
show={showVideo}
setShow={setShowVideo}
/>

      </div>

      <img
        src={spiderman}
        alt="Spider-Man"
        className="hero-spiderman"
      />

    </section>
  );
}

export default Hero;