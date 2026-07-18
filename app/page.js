"use client";

import { useState } from "react";

const profile = {
  location: ["Based in Seoul, KR", "Hongik University", "Visual Communication Design"],
  contact: ["Contact", "+82 10-3160-8240", "jiyeon.direct@gmail.com"],
};

function TextGroup({ children }) {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <button
      type="button"
      className={`textGroup${isLarge ? " isLarge" : ""}`}
      onClick={() => setIsLarge((current) => !current)}
      onMouseLeave={() => setIsLarge(false)}
      aria-pressed={isLarge}
    >
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <main className="portfolio">
      <header className="intro grid">
        <h1><TextGroup>WON JIYEON</TextGroup></h1>

        <div className="infoBlock">
          {profile.location.map((line) => (
            <p key={line}><TextGroup>{line}</TextGroup></p>
          ))}
        </div>

        <address className="infoBlock">
          <p><TextGroup>{profile.contact[0]}</TextGroup></p>
          <p><TextGroup>{profile.contact[1]}</TextGroup></p>
          <p><TextGroup>{profile.contact[2]}</TextGroup></p>
        </address>
      </header>

      <section className="services grid" aria-label="Services">
        <p><TextGroup>Graphic Design</TextGroup></p>
        <p><TextGroup>Brand Identity Design</TextGroup></p>
        <p><TextGroup>UX/UI Design</TextGroup></p>
      </section>

      <section className="about grid" aria-labelledby="about-title">
        <h2 id="about-title"><TextGroup>[ ABOUT ]</TextGroup></h2>

        <dl>
          <div>
            <dt><TextGroup>BORN</TextGroup></dt>
            <dd><TextGroup>2005.04.17</TextGroup></dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt><TextGroup>HOMETOWN</TextGroup></dt>
            <dd><TextGroup>Daegu, South Korea</TextGroup></dd>
          </div>
        </dl>
      </section>

      <section className="likes grid" aria-labelledby="likes-title">
        <h2 id="likes-title"><TextGroup>[ Things I Like ]</TextGroup></h2>
        <p><TextGroup>COFFEE</TextGroup></p>
        <p><TextGroup>RILAKKUMA</TextGroup></p>
      </section>

    </main>
  );
}
