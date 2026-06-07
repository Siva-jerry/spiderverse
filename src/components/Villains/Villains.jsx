import "./Villains.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import venom from "../../assets/images/venom.png";
import goblin from "../../assets/images/green-goblin.png";
import docock from "../../assets/images/doctor-octopus.png";
import electro from "../../assets/images/electro.png";
import sandman from "../../assets/images/sandman.png";
import mysterio from "../../assets/images/mysterio.png";

import lizard from "../../assets/images/lizard.png";
import rhino from "../../assets/images/rhino.png";
import vulture from "../../assets/images/vulture.png";
import scorpion from "../../assets/images/scorpion.png";
import kraven from "../../assets/images/kraven.webp";

import battleSpider from "../../assets/images/battle-spiderman.png";
import battleSpiderLeft from "../../assets/images/battle-spiderman-left.png";
import battleSpiderRight from "../../assets/images/battle-spiderman-right.png";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

function Villains() {
   useEffect(() => {

  gsap.utils.toArray(".villain-section")
  .forEach((section) => {

    gsap.fromTo(
      section,
      {
        opacity:0,
        y:80
      },
      {
        opacity:1,
        y:0,
        duration:1,

        scrollTrigger:{
          trigger:section,
          start:"top 75%",

          onEnter:() => {

            const paragraph =
              section.querySelector(
                ".villain-description"
              );

            if(paragraph){

              typeWriter(paragraph);

            }

          }

        }

      }
    );

  });

}, []);

const typeWriter = (element) => {

  if(element.dataset.done === "true") return;

  element.dataset.done = "true";

  const text = element.dataset.text;

  element.innerHTML = "";

  let i = 0;

  const timer = setInterval(() => {

    element.innerHTML += text.charAt(i);

    i++;

    if(i >= text.length){
      clearInterval(timer);
    }

  }, 18);

};

return (

<section
  id="villains"
  className="villains"
>

  <div className="villains-red-glow"></div>
  <div className="villains-blue-glow"></div>

  <img src={web1} className="web web1" alt="" />
  <img src={web2} className="web web2" alt="" />
  <img src={web3} className="web web3" alt="" />
  <img src={web4} className="web web4" alt="" />

  <img
    src={battleSpider}
    alt=""
    className="battle-spiderman"
  />
  <img
  src={battleSpiderLeft}
  alt=""
  className="battle-spiderman-left"
/>
  <img
  src={battleSpiderRight}
  alt=""
  className="battle-spiderman-right"
/>

  <div className="villains-header">

    <h2>THE VILLAINS</h2>

    <p>
      Every hero needs an enemy.
    </p>

  </div>

  {/* GREEN GOBLIN */}

  <div className="villain-section">

    <div className="villain-image">
      <img src={goblin} alt="" />
    </div>

    <div className="villain-content">

      <h3>GREEN GOBLIN</h3>

      <p
className="villain-description"
data-text="
Peters ultimate tormentor, a corrupt billionaire driven insane by a strength-enhancing serum. Flying on a high-tech glider and armed with pumpkin bombs, he targets Peters personal life and famously caused the tragic death of Gwen Stacy."
>
</p>

    </div>

  </div>

  {/* DOC OCK */}**

  <div className="villain-section reverse">

    <div className="villain-image">
      <img src={docock} alt="" />
    </div>

    <div className="villain-content">

      <h3>DOCTOR OCTOPUS</h3>

      <p
className="villain-description"
data-text="
A brilliant atomic physicist permanently fused to four highly powerful& telepathically controlled mechanical steel tentacles. As a dark reflection of Peters scientific genius, he is a master strategist who frequently organizes the Sinister Six alliance."
>
</p>

    </div>

  </div>

  {/* VENOM */}

  <div className="villain-section">

    <div className="villain-image">
      <img src={venom} alt="" />
    </div>

    <div className="villain-content">

      <h3>VENOM</h3>

      <p
className="villain-description"
data-text="
A monstrous anti-hero created when an alien living costume, rejected by Peter, bonded with a disgraced journalist who deeply hates Parker. He possesses all of Spider-Mans powers, can completely bypass his Spider-Sense, and uses brutal, lethal force."
>
</p>

    </div>

  </div>

  {/* ELECTRO */}

  <div className="villain-section reverse">

    <div className="villain-image">
      <img src={electro} alt="" />
    </div>

    <div className="villain-content">

      <h3>ELECTRO</h3>

     <p
className="villain-description"
data-text="
A disgruntled electrical line worker who gained the ability to generate, control, and transform his body into pure electricity after a freak lightning accident. He can short out city power grids, fire devastating lightning bolts, and travel through electrical lines."
>
</p>

    </div>

  </div>

  {/* SANDMAN */}

  <div className="villain-section">

    <div className="villain-image">
      <img src={sandman} alt="" />
    </div>

    <div className="villain-content">

      <h3>SANDMAN</h3>

      <p
className="villain-description"
data-text="
A petty thief caught in an atomic test site explosion that fused his molecular structure with sand. He can consciously alter his density, instantly transforming his fists into heavy concrete-like hammers, growing to giant proportions, or dispersing into a blinding sandstorm."
>
</p>

    </div>

  </div>

  {/* MYSTERIO */}

  <div className="villain-section reverse">

    <div className="villain-image">
      <img src={mysterio} alt="" />
    </div>

    <div className="villain-content">

      <h3>MYSTERIO</h3>

      <p
className="villain-description"
data-text="
A brilliant Hollywood special effects artist and stuntman who turned to crime using illusions, drones, holograms, and hallucinogenic gases. He thrives on psychological warfare, making Spider-Man question reality and framing him for crimes he didn't commit."
>
</p>

    </div>

  </div>

  {/* LIZARD */}

  <div className="villain-section">

    <div className="villain-image">
      <img src={lizard} alt="" />
    </div>

    <div className="villain-content">

      <h3>THE LIZARD</h3>

     <p
className="villain-description"
data-text="
A tragic mentor to Peter who tried to regrow his missing right arm using reptilian DNA. The experimental serum successfully regenerated his limb but mutated him into a savage, mindless reptile, forcing Spider-Man to find a cure without hurting his teacher."
>
</p>

    </div>

  </div>

  {/* RHINO */}

  <div className="villain-section reverse">

    <div className="villain-image">
      <img src={rhino} alt="" />
    </div>

    <div className="villain-content">

      <h3>RHINO</h3>

      <p
className="villain-description"
data-text="
A slow-witted Russian mob muscle who volunteered for a dangerous experiment that permanently bonded an indestructible, horned combat hide to his skin. He relies on pure, unstoppable momentum, charging through solid brick walls and vehicles like a human freight train."
>
</p>

    </div>

  </div>

  {/* VULTURE */}

  <div className="villain-section">

    <div className="villain-image">
      <img src={vulture} alt="" />
    </div>

    <div className="villain-content">

      <h3>VULTURE</h3>

     <p
className="villain-description"
data-text="
An aging electronics engineer who turned to high-tech thievery after being swindled out of his life's work. Using a custom electromagnetic flight harness of his own design, he flies silently at high speeds and uses razor-sharp steel wings as deadly weapons."
>
</p>

    </div>

  </div>
  {/* SCORPION */}

<div className="villain-section reverse">

  <div className="villain-image">
    <img src={scorpion} alt="" />
  </div>

  <div className="villain-content">

    <h3>SCORPION</h3>

    <p
className="villain-description"
data-text="
A private investigator hired to uncover Spider-Man's identity who was subjected to a mutation experiment to become the hero's perfect counter. Equipped with an armored green battlesuit and a cybernetic, poison-tipped whipping tail, he is driven entirely by a mad hatred for Spider-Man."
>
</p>

  </div>

</div>
{/* KRAVEN */}

<div className="villain-section reverse">

  <div className="villain-image">
    <img src={kraven} alt="" />
  </div>

  <div className="villain-content">

    <h3>KRAVEN THE HUNTER</h3>

    <p
      className="villain-description"
      data-text="A world-famous Russian aristocrat and tracker who views Spider-Man as the ultimate big-game prey to prove he is the world's greatest hunter. Using mystical jungle serums that grant him superhuman senses and strength, he relies on primitive traps, spears, and hand-to-hand combat."
    >
    </p>

  </div>

</div>

</section>

);

}

export default Villains;