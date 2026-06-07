import "./Origin.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import peterParker from "../../assets/images/peter-parker.webp";
import spiderBite from "../../assets/images/spider-bite.png";
import uncleBen from "../../assets/images/uncle-ben.png";
import responsibility from "../../assets/images/responsibility.png";

import hangingSpider from "../../assets/images/spider-hanging.png";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

gsap.registerPlugin(ScrollTrigger);

function Origin() {

const typeWriter = (id) => {

  const element =
  document.getElementById(id);

  if (!element) return;

  if (element.dataset.started) return;

  element.dataset.started = "true";

  const text =
  element.getAttribute("data-text");

  let i = 0;

  const timer = setInterval(() => {

    element.textContent =
    text.substring(0, i + 1);

    i++;

    if (i >= text.length) {

      clearInterval(timer);

    }

  }, 15);

};

useEffect(() => {

  gsap.fromTo(
    ".story-section",
    {
      opacity: 0,
      y: 80
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.3
    }
  );

  ScrollTrigger.create({
    trigger: "#peter-text",
    start: "top 80%",
    once: true,
    onEnter: () => typeWriter("peter-text")
  });

  ScrollTrigger.create({
    trigger: "#spiderbite-text",
    start: "top 80%",
    once: true,
    onEnter: () => typeWriter("spiderbite-text")
  });

  ScrollTrigger.create({
    trigger: "#uncleben-text",
    start: "top 80%",
    once: true,
    onEnter: () => typeWriter("uncleben-text")
  });

}, []);

return (
<section id="origin" className="origin">

  <div className="origin-red-glow"></div>
  <div className="origin-blue-glow"></div>

  <img src={web1} className="web web1" alt="" />
  <img src={web2} className="web web2" alt="" />
  <img src={web3} className="web web3" alt="" />
  <img src={web4} className="web web4" alt="" />

  <img
    src={hangingSpider}
    alt=""
    className="hanging-spider"
  />

  <div className="origin-header">

    <h2 className="origin-title">
      THE ORIGIN
    </h2>

    <p className="origin-subtitle typing">
      Every hero has a beginning...
    </p>

  </div>

  {/* Peter Parker */}

  <div className="story-section">

    <div className="story-image">
      <img src={peterParker} alt="" />
    </div>

    <div className="story-text">
      <h3>PETER PARKER</h3>

      <p
  id="peter-text"
  data-text="Peter Parker was the quintessential invisible teenager of Midtown High, a brilliant but painfully introverted orphan who kept his head down and his camera close. While his classmates focused on popularity, sports, and social status, Peter poured his energy into advanced chemistry and physics, finding solace in the predictable logic of science. He was a kid who carried the quiet weight of being an outsider, constantly overlooked and frequently bullied, yet sustained by a deeply gentle heart and the unassuming warmth of the small Queens home he shared with his aunt and uncle."
>
</p>
    </div>

  </div>

  {/* Spider Bite */}

  <div className="story-section reverse">

    <div className="story-text">
      <h3>THE SPIDER BITE</h3>

      <p
  id="spiderbite-text"
  data-text="Everything changed during a routine school field trip to a Columbia University science exhibit, where a stray, genetically altered arachnid descended unnoticed on a silken thread. As Peter adjusted his camera lens, the tiny creature landed on the back of his hand and sank its fangs into his skin, leaving a sharp, burning sting before flickering away to die. The bite injected a complex, mutagenic venom into his bloodstream, triggering a feverish, agonizing physical transformation overnight that rewrote his DNA—granting him the proportional speed, strength, and wall-crawling agility of a spider, along with a precognitive 'spider-sense' that would forever shatter his ordinary life."
>
</p>
    </div>

    <div className="story-image">
      <img src={spiderBite} alt="" />
    </div>

  </div>

  {/* Uncle Ben */}

  <div className="story-section">

    <div className="story-image">
      <img src={uncleBen} alt="" />
    </div>

    <div className="story-text">
      <h3>UNCLE BEN</h3>

      <p
  id="uncleben-text"
  data-text="Ben Parker was the moral anchor of Peter’s world, a hardworking, fiercely loyal man whose quiet wisdom provided the blueprint for the man Peter was meant to become. When Peter began acting out, intoxicated by his secret new powers and a sudden desire for fame, Uncle Ben sat him down to deliver a gentle but firm warning: 'With great power comes great responsibility.' It was a lesson Peter ignored until it was devastatingly too late; when Ben was senselessly murdered in the street by a thief Peter had arrogantly refused to stop earlier that night, his death became the defining tragedy of Peter's life, transforming a grieving nephew into a dedicated hero who would spend the rest of his days trying to live up to his uncle's final words."
>
</p>
    </div>

  </div>

  <div className="quote-section">

    <img
      src={responsibility}
      alt=""
      className="quote-image"
    />

    <h2>
      WITH GREAT POWER
      <br />
      COMES GREAT RESPONSIBILITY
    </h2>

  </div>

</section>

);
}

export default Origin;