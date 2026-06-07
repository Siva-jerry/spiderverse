import "./SpiderVerse.css";

import miles from "../../assets/images/miles.png";
import gwen from "../../assets/images/gwen.png";
import sp2099 from "../../assets/images/spiderman2099.png";
import noir from "../../assets/images/spider-noir.png";
import peni from "../../assets/images/peni-parker.png";
import ham from "../../assets/images/spider-ham.png";
import pavitr from "../../assets/images/pavitr.png";
import peterb from "../../assets/images/peter-b.png";
import punk from "../../assets/images/spider-punk.webp";
import superior from "../../assets/images/superior-spiderman.webp";
import scarlet from "../../assets/images/scarlet-spider.png";

import web1 from "../../assets/images/web1.png";
import web2 from "../../assets/images/web2.png";
import web3 from "../../assets/images/web3.png";
import web4 from "../../assets/images/web4.png";

function SpiderVerse() {

const spiders = [

{
name:"Miles Morales",
earth:"Earth-1610",
image:miles,
className:"miles"
},

{
name:"Spider-Gwen",
earth:"Earth-65",
image:gwen,
className:"gwen"
},

{
name:"Spider-Man 2099",
earth:"Earth-928",
image:sp2099,
className:"sp2099"
},

{
name:"Spider Noir",
earth:"Earth-90214",
image:noir,
className:"noir"
},

{
name:"Peni Parker",
earth:"Earth-14512",
image:peni,
className:"peni"
},

{
name:"Spider-Ham",
earth:"Earth-8311",
image:ham,
className:"ham"
},

{
name:"Pavitr Prabhakar",
earth:"Earth-50101",
image:pavitr,
className:"pavitr"
},

{
name:"Peter B. Parker",
earth:"Earth-616B",
image:peterb,
className:"peterb"
},

{
name:"Spider-Punk",
earth:"Earth-138",
image:punk,
className:"punk"
},

{
name:"Superior Spider-Man",
earth:"Earth-616",
image:superior,
className:"superior"
},

{
name:"Scarlet Spider",
earth:"Earth-616",
image:scarlet,
className:"scarlet"
}

];

return (

<section
id="spiderverse"
className="spiderverse"
>

<div className="spiderverse-red-glow"></div>
<div className="spiderverse-blue-glow"></div>

<img src={web1} className="web web1" alt="" />
<img src={web2} className="web web2" alt="" />
<img src={web3} className="web web3" alt="" />
<img src={web4} className="web web4" alt="" />

<div className="spiderverse-header">

<h2>SPIDER-VERSE</h2>

<p>
Across Infinite Dimensions
</p>

</div>

<div className="spider-grid">

{spiders.map((spider,index)=>(

<div
key={index}
className={`spider-card ${spider.className}`}
>

<div className="portal"></div>

<img
src={spider.image}
alt=""
/>

<h3>
{spider.name}
</h3>

<p>
{spider.earth}
</p>

</div>

))}

</div>

</section>

);

}

export default SpiderVerse;