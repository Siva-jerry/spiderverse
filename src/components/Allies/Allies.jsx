import "./Allies.css";

import mj from "../../assets/images/mj.webp";
import ned from "../../assets/images/ned.png";
import auntMay from "../../assets/images/aunt-may.webp";
import allySpider from "../../assets/images/spiderman-upside-down.png";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

function Allies() {

  const allies = [

    {
      image:mj,
      name:"Mary Jane Watson",
      desc:"Peter's closest friend and strongest emotional support."
    },

    {
      image:ned,
      name:"NED LEEDS",
      desc:"The guy in the chair who helps Spider-Man behind the scenes."
    },

    {
      image:auntMay,
      name:"AUNT MAY",
      desc:"The heart of Peter Parker's life and source of inspiration."
    }

  ];

  return (

    <section
      id="allies"
      className="allies"
    >
        <img
  src={allySpider}
  alt=""
  className="ally-spiderman"
/>

      <div className="allies-red-glow"></div>
      <div className="allies-blue-glow"></div>

      <img src={web1} className="web web1" alt="" />
      <img src={web2} className="web web2" alt="" />
      <img src={web3} className="web web3" alt="" />
      <img src={web4} className="web web4" alt="" />

      <div className="allies-header">

        <h2>
          THE ALLIES
        </h2>

        <p>
          The people behind the hero
        </p>

      </div>

      <div className="allies-grid">

        {allies.map((ally,index)=>(

          <div
            key={index}
            className="allies-card"
          >

            <img
              src={ally.image}
              alt=""
            />

            <h3>
              {ally.name}
            </h3>

            <p>
              {ally.desc}
            </p>

          </div>

        ))}
    

      </div>
      <div className="allies-quote">

  <div className="quote-line"></div>

  <p>

    Behind every hero,
    there are people who
    make him stronger.

  </p>

  <div className="quote-line"></div>

</div>
      

    </section>

  );

}

export default Allies;