import "./Suits.css";
import { useState } from "react";

import classic from "../../assets/images/classic-suit.png";
import symbiote from "../../assets/images/symbiote-suit.png";
import ironSpider from "../../assets/images/iron-spider.png";
import advanced from "../../assets/images/advanced-suit.webp";
import integrated from "../../assets/images/integrated-suit.png";
import miles from "../../assets/images/miles-suit.png";
import suit2099 from "../../assets/images/spiderman2099-suit.webp";
import scarlet from "../../assets/images/scarlet-suit.webp";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

function Suits() {

const suits = [

{
name:"Classic Suit",
image:classic,
description:"The iconic red and blue suit that began Spider-Man's legendary journey.",
color:"#E62429"
},

{
name:"Symbiote Suit",
image:symbiote,
description:"An alien symbiote enhanced Peter's abilities but came with dangerous consequences.",
color:"#000000"
},

{
name:"Iron Spider",
image:ironSpider,
description:"Designed by Tony Stark with advanced armor and mechanical spider legs.",
color:"#FFD700"
},

{
name:"Advanced Suit",
image:advanced,
description:"A modernized suit featuring advanced technology and enhanced mobility.",
color:"#00BFFF"
},

{
name:"Integrated Suit",
image:integrated,
description:"Combines Stark technology with mystical enhancements from Doctor Strange.",
color:"#8A2BE2"
},

{
name:"Miles Morales Suit",
image:miles,
description:"A black and red suit representing the unique style of Miles Morales.",
color:"#FF1744"
},

{
name:"Spider-Man 2099",
image:suit2099,
description:"Miguel O'Hara's futuristic suit from the year 2099.",
color:"#00FFFF"
},

{
name:"Scarlet Spider",
image:scarlet,
description:"Ben Reilly's iconic Scarlet Spider suit with a sleeveless hoodie.",
color:"#FF4444"
}

];

const [activeSuit,setActiveSuit] = useState(suits[0]);

return (

<section
id="suits"
className="suits"
><div className="suits-red-glow"></div>
<div className="suits-blue-glow"></div><img src={web1} className="web web1" alt="" />
<img src={web2} className="web web2" alt="" />
<img src={web3} className="web web3" alt="" />
<img src={web4} className="web web4" alt="" /><div className="suits-header"><h2>SPIDER-MAN SUITS</h2><p>
Every Suit Tells A Different Story
</p></div><div className="suit-showcase"><div className="suit-image"><div
className="suit-glow"
style={{
background:activeSuit.color
}}
></div><img
src={activeSuit.image}
alt=""
/>

</div><div className="suit-content"><h3>
{activeSuit.name}
</h3><p>
{activeSuit.description}
</p></div></div><div className="suit-thumbnails">{suits.map((suit,index)=>(

<div
key={index}
className={`thumb ${
activeSuit.name === suit.name
? "active"
: ""
}`}onClick={() => setActiveSuit(suit)}
>
«»

<img
src={suit.image}
alt=""
/>

<span>
{suit.name}
</span></div>))}

</div></section>);

}

export default Suits;