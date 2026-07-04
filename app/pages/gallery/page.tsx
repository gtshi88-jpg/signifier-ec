"use client";

import Link from "next/link";
import { useState } from "react";
import { CurtainImage, Footer, Header, RED, Reveal, u } from "../../components/chrome";

/*
 * Gallery page (/pages/gallery) — layout study.
 * Photography: Unsplash. Copy is original placeholder text.
 */

type Shot = {
  img: string;
  ratio: string;
  category: string;
  product: string;
};

const PRODUCT_URL = "/products/dsse2056h-si";

const seasons: Record<string, Shot[]> = {
  "2026 SS": [
    { img: u("photo-1544053287-37b042a45a17", 1200), ratio: "2/3", category: "Ring", product: "Cosmic Gem リング" },
    { img: u("premium_photo-1706382233385-1e524fb43eef", 1200), ratio: "2/3", category: "Ear Cuff", product: "Zodiac イヤーカフリング" },
    { img: u("photo-1616121341778-0dd435d03d23", 1400), ratio: "3/2", category: "Pierce", product: "Crescent ピアス" },
    { img: u("premium_photo-1723867363855-04008238fcab", 1200), ratio: "4/5", category: "Ear Cuff", product: "Astronomy イヤーカフ" },
    { img: u("photo-1557053910-d9eadeed1c58", 1200), ratio: "2/3", category: "Necklace", product: "Planet ネックレス" },
    { img: u("premium_photo-1693221161799-ade46b49a7ac", 1400), ratio: "3/2", category: "Ring", product: "Customize リング" },
  ],
  "2025 FW": [
    { img: u("photo-1635760057387-36eedcc8123f", 1200), ratio: "2/3", category: "Necklace", product: "Royal Star ネックレス" },
    { img: u("photo-1528120369764-0423708119ae", 1400), ratio: "3/2", category: "Ring", product: "Stone リング" },
    { img: u("photo-1600554056163-b64ccf4df7b6", 1200), ratio: "2/3", category: "Ear Cuff", product: "Sign イヤーカフ" },
    { img: u("photo-1601821765780-754fa98637c1", 1200), ratio: "4/5", category: "Necklace", product: "Kalendae ネックレス" },
    { img: u("photo-1620890743071-0b7fc04b4c32", 1400), ratio: "3/2", category: "Ring", product: "Cosmic Gem リング" },
    { img: u("photo-1596111525575-d620e3c23125", 1200), ratio: "2/3", category: "Charm", product: "Sign チャーム" },
  ],
  "2025 SS": [
    { img: u("photo-1518075927137-c76d63928cb8", 1200), ratio: "2/3", category: "Ring", product: "Customize リング" },
    { img: u("photo-1560577938-a5ed9b19fe12", 1400), ratio: "3/2", category: "Pierce", product: "Crescent ピアス" },
    { img: u("photo-1601121141461-9d6647bca1ed", 1200), ratio: "4/5", category: "Necklace", product: "Stone ネックレス" },
    { img: u("premium_photo-1681276170092-446cd1b5b32d", 1200), ratio: "2/3", category: "Necklace", product: "Royal Star ネックレス" },
    { img: u("photo-1590703160416-5b17d229e381", 1400), ratio: "3/2", category: "Ring", product: "Zodiac リング" },
    { img: u("photo-1569397288884-4d43d6738fbd", 1200), ratio: "2/3", category: "Charm", product: "Sign チャーム" },
  ],
  "2024 FW": [
    { img: u("photo-1722410180687-b05b50922362", 1200), ratio: "2/3", category: "Necklace", product: "Kalendae ネックレス" },
    { img: u("photo-1706196612848-0cd22cb6231e", 1400), ratio: "3/2", category: "Ring", product: "Zodiac リング" },
    { img: u("photo-1709150485687-b5ed84fd776c", 1200), ratio: "4/5", category: "Ring", product: "Stone リング" },
    { img: u("photo-1705854937134-dd130d90df5d", 1200), ratio: "2/3", category: "Ring", product: "Cosmic Gem リング" },
    { img: u("photo-1719924998065-0c60e329ef58", 1400), ratio: "3/2", category: "Ring", product: "Customize リング" },
    { img: u("photo-1726507367666-08c5f025bdf6", 1200), ratio: "2/3", category: "Ring", product: "Sign リング" },
  ],
};

const seasonNames = Object.keys(seasons);

export default function Gallery() {
  const [season, setSeason] = useState(seasonNames[0]);
  const shots = seasons[season];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="px-6 pt-32 md:px-16 lg:px-24">
        {/* heading */}
        <div className="relative">
          <span
            className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block"
            style={{
              color: RED,
              writingMode: "vertical-rl",
              fontSize: "clamp(48px,6vw,96px)",
              letterSpacing: "0.12em",
            }}
            aria-hidden
          >
            GALLERY
          </span>

          <Reveal from="translateY(16px)">
            <nav className="text-[12px] tracking-wider text-neutral-500">
              <Link href="/" className="hover:opacity-60">Top</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-800">Gallery</span>
            </nav>
            <h1 className="mt-6 text-3xl tracking-[0.35em] md:text-4xl">GALLERY</h1>
            <p className="mt-5 max-w-md text-[13px] leading-7 text-neutral-600">
              星々と護符のモチーフに導かれた、シーズンごとのコレクションアーカイブ。
            </p>
          </Reveal>

          {/* season tabs */}
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.2em]">
              {seasonNames.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeason(s)}
                  className="pb-1 transition-opacity hover:opacity-60"
                  style={
                    s === season
                      ? { color: RED, borderBottom: `1px solid ${RED}` }
                      : { color: "#8a8378" }
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* masonry grid — key remount replays curtain reveals per season */}
        <div key={season} className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-12">
          {shots.map((shot, i) => (
            <figure key={shot.img} className="break-inside-avoid">
              <Link href={PRODUCT_URL} className="group block">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-[1.04]">
                    <CurtainImage src={shot.img} alt={shot.product} ratio={shot.ratio} delay={(i % 3) * 150} />
                  </div>
                </div>
                <figcaption className="mt-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">{shot.category}</p>
                  <p className="mt-1 text-[13px] tracking-wider group-hover:opacity-60">
                    {shot.product} <span style={{ color: RED }}>→</span>
                  </p>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
