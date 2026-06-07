import "./Navbar.css";
import { useRef, useState } from "react";

import music from "../../assets/audio/theme.mp3";

function Navbar() {

  const scrollToSection = (id) => {

  const section =
  document.getElementById(id);

  if(section){

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

};
const audioRef = useRef();

const [playing, setPlaying] = useState(false);

const toggleMusic = () => {

  if (playing) {

    audioRef.current.pause();

  } else {

    audioRef.current.play();

  }

  setPlaying(!playing);

};
  return (
    <nav className="navbar">
      <div className="logo">
        SPIDERVERSE
      </div>

      <ul className="nav-links">
 <li onClick={() => scrollToSection("home")}>
  Home
</li>

<li onClick={() => scrollToSection("origin")}>
  Origin
</li>

<li onClick={() => scrollToSection("powers")}>
  Powers
</li>

<li onClick={() => scrollToSection("allies")}>
  Allies
</li>

<li onClick={() => scrollToSection("villains")}>
  Villains
</li>

<li onClick={() => scrollToSection("spiderverse")}>
  Spider-Verse
</li>

<li onClick={() => scrollToSection("suits")}>
  Suits
</li>
<li>

  <button
    className="music-toggle"
    onClick={toggleMusic}
  >

    {playing ? "🔊" : "🎵"}

  </button>

</li>
</ul>
<audio
  ref={audioRef}
  loop
>

  <source
    src={music}
    type="audio/mp4"
  />

</audio>
    </nav>
    
    
  );
}

export default Navbar;