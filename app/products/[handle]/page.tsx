"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import {
  CurtainImage,
  Footer,
  Header,
  RED,
  Reveal,
  u,
} from "../../components/chrome";

/*
 * Product detail page — layout study.
 * Photography: Unsplash. Copy is original placeholder text.
 */

type Product = {
  name: string;
  price: string;
  soldOut: boolean;
  images: string[];
  description: string[];
  specs: { label: string; value: string }[];
  care: string;
};

const products: Record<string, Product> = {
  "dsse2056h-si": {
    name: "Zodiac イヤーカフリング おひつじ座",
    price: "¥26,400",
    soldOut: true,
    images: [
      u("photo-1706196612848-0cd22cb6231e", 1400),
      u("photo-1705854937134-dd130d90df5d", 1400),
      u("photo-1706196739260-1568b1cf4acd", 1400),
      u("premium_photo-1723867363855-04008238fcab", 1400),
      u("photo-1616121341778-0dd435d03d23", 1400),
    ],
    description: [
      "十二星座のはじまりを司る、おひつじ座をモチーフにしたイヤーカフリング。",
      "渦を巻く角のフォルムから着想を得た螺旋のシルエットが、耳もとと指先のどちらに添えても彫刻のような存在感を放ちます。イヤーカフとしても、リングとしても楽しめる2way仕様です。",
      "「わたしは在る」——みずからの存在を高らかに宣言するおひつじ座の物語を、日々の装いのお守りとして。",
    ],
    specs: [
      { label: "サイズ", value: "11.0mm × 18.0mm × 20.0mm" },
      { label: "素材", value: "Silver 925" },
      { label: "品番", value: "DSSE2056H SI" },
    ],
    care:
      "素材本来の経年変化をお楽しみいただくため、表面のコーティングは施していません。ご使用後は柔らかい布で軽く拭き、空気に触れない状態で保管してください。黒ずみが気になる場合はシルバー用クロスで磨いてください。",
  },
};

const wrappings = [
  { name: "通常ラッピング", price: "無料" },
  { name: "ギフトボックス", price: "¥550" },
  { name: "ショッピングバッグ", price: "¥220" },
];

const related = [
  { name: "Zodiac イヤーカフリング てんびん座", price: "¥26,400", img: u("photo-1709150485687-b5ed84fd776c", 900) },
  { name: "Zodiac イヤーカフリング さそり座", price: "¥26,400", img: u("photo-1719924998065-0c60e329ef58", 900) },
  { name: "Zodiac イヤーカフリング しし座", price: "¥24,200", img: u("photo-1726507367666-08c5f025bdf6", 900) },
  { name: "リング", price: "¥26,400", img: u("photo-1620890743071-0b7fc04b4c32", 900) },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-300">
      <button
        className="flex w-full items-center justify-between py-5 text-left text-[15px] tracking-wider"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <span
          className="text-xl transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-[13px] leading-7 text-neutral-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params);
  const product = products[handle] ?? products["dsse2056h-si"];

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [wrap, setWrap] = useState(0);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="px-6 pt-28 md:px-16 lg:px-24">
        {/* breadcrumb */}
        <Reveal from="translateY(16px)">
          <nav className="mb-10 text-[12px] tracking-wider text-neutral-500">
            <Link href="/" className="hover:opacity-60">Top</Link>
            <span className="mx-2">/</span>
            <Link href="/collections/all" className="hover:opacity-60">Zodiac</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">{product.name}</span>
          </nav>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
          {/* ---------- gallery ---------- */}
          <div className="relative">
            <span
              className="pointer-events-none absolute -left-4 top-0 hidden select-none xl:block"
              style={{
                color: RED,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "clamp(40px,4vw,64px)",
                letterSpacing: "0.1em",
              }}
              aria-hidden
            >
              ZODIAC
            </span>

            <div className="xl:pl-20">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {product.images.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ))}
                {product.soldOut && (
                  <span className="absolute left-4 top-4 bg-neutral-900/85 px-4 py-2 text-[11px] tracking-[0.25em] text-white">
                    SOLD OUT
                  </span>
                )}
              </div>

              {/* thumbnails */}
              <div className="mt-4 grid grid-cols-5 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActive(i)}
                    className="relative overflow-hidden transition-opacity"
                    style={{
                      aspectRatio: "1/1",
                      opacity: i === active ? 1 : 0.45,
                      outline: i === active ? `1px solid ${RED}` : "none",
                      outlineOffset: 2,
                    }}
                    aria-label={`image ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="80px"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- info ---------- */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={150}>
              <p className="text-[12px] tracking-[0.3em]" style={{ color: RED }}>
                ZODIAC
              </p>
              <h1 className="mt-3 text-2xl leading-relaxed md:text-[28px]">{product.name}</h1>
              <p className="mt-4 text-xl font-semibold">
                {product.price}
                <span className="ml-2 text-[12px] font-normal text-neutral-500">(税込)</span>
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 space-y-4 text-[14px] leading-8 text-neutral-700">
                {product.description.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              {/* quantity */}
              <div className="mt-10 flex items-center gap-6">
                <p className="text-[13px] tracking-wider text-neutral-500">数量</p>
                <div className="flex items-center border border-neutral-300">
                  <button
                    className="px-4 py-2 text-lg hover:opacity-50 disabled:opacity-30"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    disabled={product.soldOut}
                    aria-label="decrease"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-[15px]">{qty}</span>
                  <button
                    className="px-4 py-2 text-lg hover:opacity-50 disabled:opacity-30"
                    onClick={() => setQty((q) => q + 1)}
                    disabled={product.soldOut}
                    aria-label="increase"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* wrapping */}
              <div className="mt-8">
                <p className="mb-3 text-[13px] tracking-wider text-neutral-500">ラッピング</p>
                <div className="space-y-2">
                  {wrappings.map((w, i) => (
                    <label
                      key={w.name}
                      className="flex cursor-pointer items-center justify-between border px-4 py-3 text-[13px] transition-colors"
                      style={{
                        borderColor: wrap === i ? RED : "#d4d0c9",
                        color: wrap === i ? RED : undefined,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="wrapping"
                          checked={wrap === i}
                          onChange={() => setWrap(i)}
                          className="accent-[#b0301c]"
                        />
                        {w.name}
                      </span>
                      <span>{w.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* buttons */}
              <div className="mt-10 space-y-3">
                <button
                  disabled={product.soldOut}
                  className="w-full py-4 text-[13px] tracking-[0.3em] text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ background: RED }}
                >
                  {product.soldOut ? "SOLD OUT" : "カートに入れる"}
                </button>
                <button className="w-full border py-4 text-[13px] tracking-[0.3em] transition-colors hover:bg-neutral-900 hover:text-white" style={{ borderColor: "#1a1a1a" }}>
                  再入荷通知を受け取る
                </button>
                <button className="w-full py-3 text-[12px] tracking-[0.2em] text-neutral-500 hover:opacity-60">
                  ♡ Wishlist に追加
                </button>
              </div>
            </Reveal>

            <Reveal delay={500}>
              {/* accordions */}
              <div className="mt-12 border-t border-neutral-300">
                <Accordion title="サイズ・素材">
                  <dl className="space-y-2">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex gap-6">
                        <dt className="w-16 shrink-0 text-neutral-400">{s.label}</dt>
                        <dd>{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </Accordion>
                <Accordion title="お手入れについて">{product.care}</Accordion>
                <Accordion title="配送について">
                  ご注文から3営業日以内に発送いたします。¥11,000以上のご注文で送料無料。ギフト包装をご希望の場合は上記オプションをお選びください。
                </Accordion>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- story band ---------- */}
        <StoryBand />

        {/* ---------- related ---------- */}
        <section className="mx-auto max-w-6xl py-24 md:py-32">
          <Reveal>
            <h2 className="mb-14 text-xl tracking-[0.25em] md:text-2xl">RELATED ITEMS</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
            {related.map((r, i) => (
              <Link key={r.name} href="/products/dsse2056h-si" className="block">
                <CurtainImage src={r.img} alt={r.name} ratio="4/5" delay={i * 120} />
                <Reveal delay={i * 120 + 200}>
                  <p className="mt-4 text-[13px] leading-6">{r.name}</p>
                  <p className="mt-1 text-[13px] font-semibold">{r.price}</p>
                </Reveal>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* red editorial band about the sign */
function StoryBand() {
  return (
    <section className="relative -mx-6 mt-24 overflow-hidden md:-mx-16 lg:-mx-24">
      <RedWipe />
      <div className="relative grid items-center gap-10 px-6 py-20 text-white md:grid-cols-[1fr_1.2fr] md:px-24 md:py-28">
        <Reveal delay={300}>
          <CurtainImage
            src={u("photo-1557053910-d9eadeed1c58", 1200)}
            alt="Aries story"
            ratio="4/5"
            curtain={RED}
            delay={400}
          />
        </Reveal>
        <Reveal delay={500}>
          <p className="text-[12px] tracking-[0.4em] opacity-80">ARIES</p>
          <h3 className="mt-4 text-2xl leading-relaxed md:text-3xl">
            「わたしは在る」<br />
            はじまりの星座、おひつじ座
          </h3>
          <p className="mt-6 max-w-md text-[14px] leading-8 opacity-90">
            春分とともに巡りはじめる黄道十二宮の最初のサイン。ためらいなく一歩を踏み出す力を、身につける人へ。
          </p>
          <Link
            href="/"
            className="mt-8 inline-block border border-white/70 px-8 py-3 text-[12px] tracking-[0.3em] transition-colors hover:bg-white"
            style={{ ["--tw-hover-color" as string]: RED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = RED)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            VIEW COLLECTION
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function RedWipe() {
  return (
    <Reveal from="translateX(-100%)" className="absolute inset-0" delay={0}>
      <div className="h-full w-full" style={{ background: RED }} />
    </Reveal>
  );
}
