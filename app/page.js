"use client";

import Image from "next/image";
import { useState } from "react";

const capsuleItems = ["ABOUT ME", "HOBBIES", "FAVORITES"];

function GridOverlay() {
  return <div className="gridOverlay" aria-hidden="true" />;
}

function IntroScreen({ onStart }) {
  return (
    <main className="screen introScreen">
      <GridOverlay />

      <div className="designContainer introLayout">
        <h1>WON JIYEON</h1>

        <div className="profileCopy">
          <p>Based in Seoul, KR</p>
          <p>
            Hongik University
            <br />
            Visual Communication Design
          </p>
          <p>
            [ Contact ]
            <br />
            <br />
            +82 10-3160-8240
            <br />
            jiyeon.direct@gmail.com
          </p>
        </div>

        <button className="startButton" type="button" onClick={onStart}>
          <span>Click to Start!</span>
          <Image
            className="cursorImage"
            src="/figma-assets/desktop6-cursor.png"
            alt=""
            width={94}
            height={94}
            priority
          />
        </button>
      </div>
    </main>
  );
}

function MenuScreen() {
  return (
    <main className="screen menuScreen">
      <GridOverlay />
      <div className="cornerBlocks cornerBlocksLeft" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="cornerBlocks cornerBlocksRight" aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="designContainer menuLayout">
        <section className="capsuleMenu" aria-label="프로필 메뉴">
          {capsuleItems.map((item) => (
            <button className="capsuleItem" type="button" key={item}>
              <Image
                src="/figma-assets/desktop7-4.png"
                alt=""
                width={314}
                height={314}
                unoptimized
              />
              <span>[ {item} ]</span>
            </button>
          ))}
        </section>

        <p className="menuGuide">캡슐을 눌러서 더 많은 정보를 확인해보세요!</p>
      </div>
    </main>
  );
}

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? (
    <MenuScreen />
  ) : (
    <IntroScreen onStart={() => setHasStarted(true)} />
  );
}
