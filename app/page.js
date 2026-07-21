"use client";

import Image from "next/image";
import { useRef } from "react";

const capsuleItems = ["ABOUT ME", "HOBBIES", "FAVORITES"];
const detailItems = ["HOMETOWN", "BIRTHDAY", "MBTI", "TOOLS"];

function IntroSection({ onStart }) {
  return (
    <section className="screen introScreen" aria-label="소개">
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
    </section>
  );
}

function MenuSection({ sectionRef, onAbout }) {
  return (
    <section ref={sectionRef} className="screen menuScreen" aria-label="프로필 메뉴">
      <div className="cornerBlocks cornerBlocksLeft" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="cornerBlocks cornerBlocksRight" aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="designContainer menuLayout">
        <div className="capsuleMenu">
          {capsuleItems.map((item) => (
            <button
              className="capsuleItem"
              type="button"
              key={item}
              onClick={item === "ABOUT ME" ? onAbout : undefined}
            >
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
        </div>

        <p className="menuGuide">캡슐을 눌러서 더 많은 정보를 확인해보세요!</p>
      </div>
    </section>
  );
}

function AboutSection({ sectionRef, onBack }) {
  return (
    <section ref={sectionRef} className="screen aboutScreen" aria-label="About Me 상세">
      <button className="backButton" type="button" onClick={onBack} aria-label="프로필 메뉴로 돌아가기">
        <Image src="/figma-assets/desktop8-back.svg" alt="" width={109} height={99} />
      </button>

      <div className="designContainer aboutLayout">
        <div className="aboutCapsule">
          <Image
            src="/figma-assets/desktop8-4.png"
            alt=""
            width={314}
            height={314}
            unoptimized
          />
          <h2>[ ABOUT ME ]</h2>
        </div>

        <nav className="detailNav" aria-label="About Me 정보">
          {detailItems.map((item, index) => (
            <button
              className="blinkWord"
              style={{ "--blink-delay": `${index * 0.28}s` }}
              type="button"
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>

        <p className="aboutGuide">하단의 단어를 클릭하여 더 자세한 정보를 확인해보세요!</p>
      </div>
    </section>
  );
}

export default function Home() {
  const menuRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pageFlow">
      <IntroSection onStart={() => scrollTo(menuRef)} />
      <MenuSection sectionRef={menuRef} onAbout={() => scrollTo(aboutRef)} />
      <AboutSection sectionRef={aboutRef} onBack={() => scrollTo(menuRef)} />
    </main>
  );
}
