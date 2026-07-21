"use client";

import Image from "next/image";
import { useRef } from "react";

const capsuleItems = ["ABOUT ME", "HOBBIES", "FAVORITES"];
const detailItems = ["HOMETOWN", "BIRTHDAY", "MBTI", "TOOLS"];
const hobbyItems = ["GAME", "COLLECTING CAPS", "NAPS"];
const favoriteItems = ["RILAKKUMA", "DONUT", "COFFEE"];
const detailContent = {
  HOMETOWN: {
    headline: "Daegu, Korea",
    body: [
      "안녕하세요 대프리카 사람입니다.",
      "한 여름에 최고 기온이 40도를 찍는 대구에서",
      "태어난 사람이 바로 저랍니다..",
      "그래도 대구 막창은 맛있어요",
    ],
  },
  BIRTHDAY: {
    headline: "2005. 04. 17",
    body: [
      "저는 2005년생으로 올해 22살 입니다!",
      "특이점은 재수를 했기 때문에",
      "학번은 25학번이에요.",
    ],
  },
  MBTI: {
    headline: "ISTP",
    body: [
      "저는 ISTP 인데요.",
      "마미손 노래 때문인지 ISTP가",
      "개이기적인 MBTI라는 낭설이 퍼져있지만",
      "사실 무근입니다...^^",
    ],
  },
  TOOLS: {
    list: ["Figma", "Photoshop", "Illustrator", "InDesign", "Lightroom", "After Effects"],
    body: ["배워야 되는 툴을 끝도 없이 늘어나고 제 머리는 그걸 거부해서 걱정입니다.."],
  },
};
const hobbyContent = {
  GAME: {
    image: "/figma-assets/hobby-game.png",
    body: ["저는 PC게임을 좋아해요.", "요즘 빠진건 배틀그라운드인데요.", "저랑 배그 하실 분?"],
  },
  "COLLECTING CAPS": {
    image: "/figma-assets/hobby-caps.png",
    body: [
      "모자 수집하는게 취미입니다.",
      "집에 모자가 몇 개 있냐는 질문을 종종 듣곤 하는데요.",
      "한 12개 정도 되는 것 같네요.",
      "사도사도 부족해요...",
    ],
  },
  NAPS: {
    image: "/figma-assets/hobby-naps.png",
    body: ["낮잠자기!", "개강을 하면 누리기 힘든 취미이기 때문에...", "방학인 지금 많이 누리려고 합니다."],
  },
};
const favoriteContent = {
  RILAKKUMA: {
    image: "/figma-assets/favorite-rilakkuma.png",
    body: ["리락쿠마가 좋아요...", "근데 매번 리락쿠마 좋아하는게", "저랑 안어울린다는 말을 들어서 슬퍼요"],
  },
  DONUT: {
    image: "/figma-assets/favorite-donut.png",
    body: ["크리스피 크림 도넛 좋아하시는 분?", "왠지 저랑 잘 맞으실 듯 하네요"],
  },
  COFFEE: {
    image: "/figma-assets/favorite-coffee.png",
    body: ["저는 커피를 하루에 한 잔은 무조건 마시는 사람입니다.", "특이한 점은 겨울에도 아이스아메리카노만 마신다는 점.."],
  },
};

function IntroSection({ onStart }) {
  return (
    <section className="screen introScreen" aria-label="소개">
      <div className="designContainer introLayout">
        <h1>WON JIYEON</h1>

        <div className="profileCopy">
          <div className="profileBio">
            <p>Based in Seoul, KR</p>
            <p>
              Hongik University
              <br />
              Visual Communication Design
            </p>
          </div>
          <div className="profileContact">
            <p>[ Contact ]</p>
            <p>+82 10-3160-8240</p>
            <p>jiyeon.direct@gmail.com</p>
          </div>
        </div>

        <Image
          className="introCharacter"
          src="/figma-assets/desktop6-character.png"
          alt="민트색 픽셀 캐릭터"
          width={264}
          height={264}
          unoptimized
          priority
        />

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

function MenuSection({ sectionRef, onAbout, onHobbies, onFavorites }) {
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
              onClick={
                item === "ABOUT ME"
                  ? onAbout
                  : item === "HOBBIES"
                    ? onHobbies
                    : onFavorites
              }
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

function FavoritesSection({ sectionRef, onBack, onDetail }) {
  return (
    <section ref={sectionRef} className="screen favoritesScreen" aria-label="Favorites 상세">
      <div className="aboutCanvas">
        <div className="aboutMainRow">
          <button className="aboutBackButton" type="button" onClick={onBack} aria-label="프로필 메뉴로 돌아가기">
            <Image src="/figma-assets/desktop8-back.svg" alt="" width={94} height={74} />
          </button>

          <div className="aboutCapsule">
            <Image src="/figma-assets/desktop8-4.png" alt="" width={314} height={314} unoptimized />
            <h2>[ FAVORITES ]</h2>
          </div>
        </div>

        <div className="aboutFooter">
          <nav className="favoriteNav" aria-label="Favorites 정보">
            {favoriteItems.map((item, index) => (
              <button
                className="blinkWord"
                style={{ "--blink-delay": `${index * 0.28}s` }}
                type="button"
                key={item}
                onClick={() => onDetail(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <p>하단의 단어를 클릭하여 더 저세한 정보를 확인해보세요!</p>
        </div>
      </div>
    </section>
  );
}

function HobbiesSection({ sectionRef, onBack, onDetail }) {
  return (
    <section ref={sectionRef} className="screen hobbiesScreen" aria-label="Hobbies 상세">
      <div className="aboutCanvas">
        <div className="aboutMainRow">
          <button className="aboutBackButton" type="button" onClick={onBack} aria-label="프로필 메뉴로 돌아가기">
            <Image src="/figma-assets/desktop8-back.svg" alt="" width={94} height={74} />
          </button>

          <div className="aboutCapsule">
            <Image src="/figma-assets/desktop8-4.png" alt="" width={314} height={314} unoptimized />
            <h2>[ HOBBIES ]</h2>
          </div>
        </div>

        <div className="aboutFooter hobbiesFooter">
          <nav className="hobbyNav" aria-label="Hobbies 정보">
            {hobbyItems.map((item, index) => (
              <button
                className="blinkWord"
                style={{ "--blink-delay": `${index * 0.28}s` }}
                type="button"
                key={item}
                onClick={() => onDetail(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <p>하단의 단어를 클릭하여 더 저세한 정보를 확인해보세요!</p>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ sectionRef, onBack, onDetail }) {
  return (
    <section ref={sectionRef} className="screen aboutScreen" aria-label="About Me 상세">
      <div className="aboutCanvas">
        <div className="aboutMainRow">
          <button className="aboutBackButton" type="button" onClick={onBack} aria-label="프로필 메뉴로 돌아가기">
            <Image src="/figma-assets/desktop8-back.svg" alt="" width={94} height={74} />
          </button>

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
        </div>

        <div className="aboutFooter">
          <nav className="detailNav" aria-label="About Me 정보">
            {detailItems.map((item, index) => (
              <button
                className="blinkWord"
                style={{ "--blink-delay": `${index * 0.28}s` }}
                type="button"
                key={item}
                onClick={() => onDetail(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <p>하단의 단어를 클릭하여 더 저세한 정보를 확인해보세요!</p>
        </div>
      </div>
    </section>
  );
}

function DetailSection({ sectionRef, type, onClose, onNavigate }) {
  const content = detailContent[type];

  return (
    <section ref={sectionRef} className="screen detailScreen" aria-label={`${type} 상세`}>
      <div className="detailCanvas">
        <article className={`infoPanel infoPanel${type}`}>
          <header className="infoPanelHeader">
            <h2>{type}</h2>
            <button type="button" onClick={onClose} aria-label={`${type} 닫기`}>X</button>
          </header>

          {content.headline && <p className="infoHeadline">{content.headline}</p>}
          {content.list && (
            <div className="toolList">
              {content.list.map((tool) => <p key={tool}>{tool}</p>)}
            </div>
          )}
          <div className="infoBody">
            {content.body.map((line) => <p key={line}>{line}</p>)}
          </div>
        </article>

        <nav className="detailScreenNav" aria-label="About Me 상세 메뉴">
          {detailItems.map((item) => (
            <button type="button" key={item} onClick={() => onNavigate(item)}>{item}</button>
          ))}
        </nav>
        <div className="detailScreenLine" aria-hidden="true" />
      </div>
    </section>
  );
}

function HobbyDetailSection({ sectionRef, type, onClose, onNavigate }) {
  const content = hobbyContent[type];
  const className = type.replaceAll(" ", "");

  return (
    <section ref={sectionRef} className="screen detailScreen" aria-label={`${type} 상세`}>
      <div className="detailCanvas">
        <article className={`infoPanel hobbyPanel hobbyPanel${className}`}>
          <header className="infoPanelHeader">
            <h2>{type}</h2>
            <button type="button" onClick={onClose} aria-label={`${type} 닫기`}>X</button>
          </header>
          <Image
            className="hobbyDetailImage"
            src={content.image}
            alt=""
            width={320}
            height={320}
            unoptimized
          />
          <div className="infoBody hobbyInfoBody">
            {content.body.map((line) => <p key={line}>{line}</p>)}
          </div>
        </article>

        <nav className="hobbyDetailNav" aria-label="Hobbies 상세 메뉴">
          {hobbyItems.map((item) => (
            <button type="button" key={item} onClick={() => onNavigate(item)}>{item}</button>
          ))}
        </nav>
        <div className="hobbyDetailLine" aria-hidden="true" />
      </div>
    </section>
  );
}

function FavoriteDetailSection({ sectionRef, type, onClose, onNavigate }) {
  const content = favoriteContent[type];

  return (
    <section ref={sectionRef} className="screen detailScreen" aria-label={`${type} 상세`}>
      <div className="detailCanvas">
        <article className={`infoPanel favoritePanel favoritePanel${type}`}>
          <header className="infoPanelHeader">
            <h2>{type}</h2>
            <button type="button" onClick={onClose} aria-label={`${type} 닫기`}>X</button>
          </header>
          <Image className="favoriteDetailImage" src={content.image} alt="" width={285} height={285} unoptimized />
          <div className="infoBody favoriteInfoBody">
            {content.body.map((line) => <p key={line}>{line}</p>)}
          </div>
        </article>

        <nav className="favoriteDetailNav" aria-label="Favorites 상세 메뉴">
          {favoriteItems.map((item) => (
            <button type="button" key={item} onClick={() => onNavigate(item)}>{item}</button>
          ))}
        </nav>
        <div className="favoriteDetailLine" aria-hidden="true" />
      </div>
    </section>
  );
}

export default function Home() {
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const hometownRef = useRef(null);
  const birthdayRef = useRef(null);
  const mbtiRef = useRef(null);
  const toolsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const gameRef = useRef(null);
  const capsRef = useRef(null);
  const napsRef = useRef(null);
  const favoritesRef = useRef(null);
  const rilakkumaRef = useRef(null);
  const donutRef = useRef(null);
  const coffeeRef = useRef(null);

  const detailRefs = {
    HOMETOWN: hometownRef,
    BIRTHDAY: birthdayRef,
    MBTI: mbtiRef,
    TOOLS: toolsRef,
  };
  const hobbyRefs = {
    GAME: gameRef,
    "COLLECTING CAPS": capsRef,
    NAPS: napsRef,
  };
  const favoriteRefs = {
    RILAKKUMA: rilakkumaRef,
    DONUT: donutRef,
    COFFEE: coffeeRef,
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jumpTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <main className="pageFlow">
      <IntroSection onStart={() => scrollTo(menuRef)} />
      <MenuSection
        sectionRef={menuRef}
        onAbout={() => scrollTo(aboutRef)}
        onHobbies={() => jumpTo(hobbiesRef)}
        onFavorites={() => jumpTo(favoritesRef)}
      />
      <AboutSection
        sectionRef={aboutRef}
        onBack={() => scrollTo(menuRef)}
        onDetail={(type) => jumpTo(detailRefs[type])}
      />
      {detailItems.map((type) => (
        <DetailSection
          key={type}
          sectionRef={detailRefs[type]}
          type={type}
          onClose={() => jumpTo(aboutRef)}
          onNavigate={(nextType) => jumpTo(detailRefs[nextType])}
        />
      ))}
      <HobbiesSection
        sectionRef={hobbiesRef}
        onBack={() => jumpTo(menuRef)}
        onDetail={(type) => jumpTo(hobbyRefs[type])}
      />
      {hobbyItems.map((type) => (
        <HobbyDetailSection
          key={type}
          sectionRef={hobbyRefs[type]}
          type={type}
          onClose={() => jumpTo(hobbiesRef)}
          onNavigate={(nextType) => jumpTo(hobbyRefs[nextType])}
        />
      ))}
      <FavoritesSection
        sectionRef={favoritesRef}
        onBack={() => jumpTo(menuRef)}
        onDetail={(type) => jumpTo(favoriteRefs[type])}
      />
      {favoriteItems.map((type) => (
        <FavoriteDetailSection
          key={type}
          sectionRef={favoriteRefs[type]}
          type={type}
          onClose={() => jumpTo(favoritesRef)}
          onNavigate={(nextType) => jumpTo(favoriteRefs[nextType])}
        />
      ))}
    </main>
  );
}
