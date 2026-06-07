import "./Powers.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import wallSpider from "../../assets/images/wall-spider.png";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

gsap.registerPlugin(ScrollTrigger);

function Powers() {
  useEffect(() => {

  gsap.from(
    ".power-card",
    {
      opacity:0,
      y:50,

      duration:1,

      stagger:0.15,

      scrollTrigger:{
        trigger:".powers-grid",
        start:"top 80%"
      }
    }
  );
}, []);

  return (

    <section
      id="powers"
      className="powers"
    >


      <img src={web1} className="web web1" alt="" />
<img src={web2} className="web web2" alt="" />
<img src={web3} className="web web3" alt="" />
<img src={web4} className="web web4" alt="" />
     

      <div className="powers-red-glow"></div>
      <div className="powers-blue-glow"></div>

      <h2 className="powers-title">
        THE AMAZING POWERS
      </h2>

      <p className="powers-subtitle">
        Abilities gained after the spider bite
      </p>

      <div className="powers-grid">

        <div className="power-card">
          <h3>
  ⚡ Spider Sense
</h3>

<div className="sense-pulse"></div>
          <p>
           A precognitive danger reflex that buzzes at the base of his skull, alerting him to immediate threats and incoming attacks split-seconds before they happen.
          </p>
        </div>

        <div className="power-card">
          <h3>💪 Super Strength</h3>
          <p>
            His mutated muscle density allows him to lift up to 10 tons, meaning he can easily catch falling cars, shatter steel, and overpower massive villains.
          </p>
        </div>

        <div className="power-card">
          <h3>🧗 Wall Crawling</h3>
          <p>
           He can consciously control the electrostatic force between his body and any surface, allowing him to cling to walls and skyscrapers completely hands-free.
          </p>
        </div>

        <div className="power-card">
          <h3>🎯 Reflexes</h3>
          <p>
            Operating roughly forty times faster than a normal human, his near-instantaneous reaction time lets him effortlessly dodge close-range gunfire and incoming projectiles.
          </p>
        </div>

        <div className="power-card">
          <h3>🏃 Agility</h3>
          <p>
            Possessing superhuman flexibility and perfect equilibrium, he can leap incredible distances and twist his body into impossible shapes while swinging through the city.
          </p>
        </div>

        <div className="power-card">
          <h3>🌐 Web Shooting</h3>
          <p>
            Using his own brilliant chemistry, Peter invented wrist-mounted mechanical devices that fire a high-tensile, rapid-hardening fluid to swing from buildings and web up criminals.
          </p>
        </div>

      </div>

      <img
        src={wallSpider}
        alt=""
        className="wall-spider"
      />

    </section>

  );

}

export default Powers;