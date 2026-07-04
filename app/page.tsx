"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BG,
  CurtainImage,
  Footer,
  Header,
  Logo,
  RED,
  Reveal,
  useReveal,
  Wordmark,
} from "./components/chrome";

/*
 * VERMILLION top page — LP layout study.
 * Full-screen sections stack with a sticky "curtain" effect:
 * each panel pins to the viewport and the next one slides over it.
 * Photography: generated apparel visuals + Unsplash placeholders.
 * Copy is original placeholder text.
 */

const DARK = "#191715";
const PRODUCT_URL = "/products/dsse2056h-si";
const SLIDE_MS = 4800;

const heroSlides = [
  { left: "/images/fashion/hero-left.png", right: "/images/fashion/hero-right.png" },
  { left: "/images/fashion/detail-tops-bust.png", right: "/images/fashion/men-layered-top.png" },
  { left: "/images/fashion/detail-ring-fingertips.png", right: "/images/fashion/detail-cuff-fingers.png" },
  { left: "/images/fashion/detail-face-close.png", right: "/images/fashion/women-key.png" },
  { left: "/images/fashion/pickup-outerwear.png", right: "/images/fashion/men-outerwear.png" },
  { left: "/images/fashion/pickup-wide-trousers.png", right: "/images/fashion/pickup-tailored-jacket.png" },
];

const pickUp = [
  { name: "Structured Wool Coat", price: "¥132,000", img: "/images/fashion/pickup-outerwear.png" },
  { name: "High-Neck Tailored Top", price: "¥36,300", img: "/images/fashion/detail-tops-bust.png" },
  { name: "Wide Pleated Trousers", price: "¥52,800", img: "/images/fashion/pickup-wide-trousers.png" },
];

const journalPosts = [
  {
    date: "2026.06.21",
    title: "アトリエ便り: 黒を仕立てる手",
    img: "/images/fashion/pickup-tailored-jacket.png",
  },
  {
    date: "2026.05.30",
    title: "素材考 — ウールギャバジンの落ち感について",
    img: "/images/fashion/pickup-wide-trousers.png",
  },
  {
    date: "2026.04.12",
    title: "しるしを纏う、7つの習慣",
    img: "/images/fashion/detail-ring-fingertips.png",
  },
];

const newsEntries = [
  { date: "2026.06.28", tag: "SHOP", text: "阪急うめだ本店 POP UP STORE 開催のお知らせ(7/9–7/22)" },
  { date: "2026.06.15", tag: "ITEM", text: "Zodiac コレクションに かに座の新作が加わりました" },
  { date: "2026.05.20", tag: "INFO", text: "夏季休業期間中の配送スケジュールについて" },
  { date: "2026.04.28", tag: "ITEM", text: "Customize リングのオーダー受付を再開しました" },
];

const pressEntries = [
  { media: "MUSE MAGAZINE", issue: "2026年7月号", text: "特集「星を纏う」にて Zodiac イヤーカフが紹介されました" },
  { media: "LUNE", issue: "vol.48", text: "連載コラム内で Cosmic Gem リングが掲載されました" },
  { media: "ORBIT WEB", issue: "2026.05", text: "デザイナーインタビューが公開されました" },
];

/* ---------- opening / scroll texture ---------- */

/* one-time site intro: logo on a plain curtain that lifts to reveal the hero */
function Intro() {
  const [lift, setLift] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setLift(true), 1500);
    const t2 = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: BG,
        transform: lift ? "translateY(-100%)" : "none",
        transition: "transform 1.15s cubic-bezier(.76,0,.24,1)",
      }}
      aria-hidden
    >
      <div className="intro-in flex flex-col items-center" style={{ color: RED }}>
        <Logo className="h-16 w-14" />
        <Wordmark className="mt-3 text-3xl tracking-[0.12em]" />
      </div>
    </div>
  );
}

/* wheel-driven inertia scroll (fine pointers only) — keeps native scrolling
   so position:sticky stacking still works */
function useLuxScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    let active = false;
    const max = () => document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      current += (target - current) * 0.105;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        active = false;
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || document.body.style.overflow === "hidden") return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      target = Math.max(0, Math.min(max(), target + delta));
      if (!active) {
        active = true;
        raf = requestAnimationFrame(tick);
      }
    };

    /* keep in sync with native jumps (anchors, keyboard, drag) */
    const onNative = () => {
      if (!active) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onNative, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onNative);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* text that rises line-by-line out of a mask */
function MaskReveal({
  lines,
  delay = 0,
  className = "",
}: {
  lines: string[];
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            className="block"
            style={{
              transform: shown ? "none" : "translateY(112%)",
              transition: `transform 1.1s cubic-bezier(.22,1,.36,1) ${delay + i * 130}ms`,
            }}
          >
            {l}
          </span>
        </span>
      ))}
    </div>
  );
}

/* fixed editorial index: current panel number / total */
function PageIndex() {
  const [state, setState] = useState({ i: 0, total: 0, label: "" });

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-panel]"));
    if (!panels.length) return;
    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.5;
      let i = 0;
      panels.forEach((p, idx) => {
        if (p.offsetTop <= y) i = idx;
      });
      setState({ i, total: panels.length, label: panels[i].dataset.panel || "" });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!state.total) return null;
  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden items-baseline gap-3 text-white mix-blend-difference md:flex"
      aria-hidden
    >
      <span className="text-[13px] tracking-[0.25em]">
        {String(state.i + 1).padStart(2, "0")}
      </span>
      <span className="h-px w-10 self-center bg-white/60" />
      <span className="text-[11px] tracking-[0.25em] opacity-70">
        {String(state.total).padStart(2, "0")}
      </span>
      <span className="ml-3 text-[10px] tracking-[0.35em] opacity-70">{state.label}</span>
    </div>
  );
}

/* ---------- stacking panel ---------- */

/*
 * Sticky stacking panel. Panels taller than the viewport (mobile) get a
 * negative `top` so they scroll fully into view, pin at their bottom edge,
 * then let the next panel slide over them — same curtain effect as desktop.
 */
function Panel({
  id,
  bg,
  label,
  children,
  className = "",
}: {
  id?: string;
  bg: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      data-panel={label ?? id?.toUpperCase() ?? ""}
      className={`sticky min-h-[100svh] md:h-[100svh] md:overflow-hidden ${className}`}
      style={{ top, background: bg, boxShadow: "0 -30px 60px rgba(0,0,0,.18)" }}
    >
      {children}
    </section>
  );
}

/* big vertical english label shared by sections */
function SideLabel({ text, color = "#1a1a1a", side = "right" }: { text: string; color?: string; side?: "left" | "right" }) {
  return (
    <span
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none xl:block ${
        side === "right" ? "right-4" : "left-4"
      }`}
      style={{
        color,
        writingMode: "vertical-rl",
        transform: side === "left" ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)",
        fontSize: "clamp(44px,5.5vw,88px)",
        letterSpacing: "0.14em",
        opacity: 0.9,
      }}
      aria-hidden
    >
      {text}
    </span>
  );
}

function SectionHead({ no, title, light = false }: { no: string; title: string; light?: boolean }) {
  return (
    <Reveal>
      <p className={`text-[13px] tracking-[0.3em] ${light ? "text-white/70" : "text-neutral-400"}`}>{no}</p>
      <h2 className="mt-2 text-2xl tracking-[0.25em] md:text-3xl">{title}</h2>
    </Reveal>
  );
}

/*
 * Full-bleed editorial panel: edge-to-edge imagery with a single
 * caption line and an underlined link — no headings, no product cards.
 */
function VisualPanel({
  id,
  bg,
  title,
  images,
  caption,
  linkLabel,
  href,
}: {
  id: string;
  bg: string;
  title: string;
  images: string[];
  caption: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <Panel id={id} bg={bg} label={title} className="h-[100svh] overflow-hidden">
      <div className={`grid h-full ${images.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {images.map((src, i) => (
          <CurtainImage
            key={src}
            src={src}
            alt=""
            className={`h-full ${i > 0 ? "hidden md:block" : ""}`}
            curtain={bg}
            delay={i * 220}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-[12%] z-10 flex flex-col items-center gap-5 px-6 text-center text-white"
        style={{ textShadow: "0 1px 16px rgba(0,0,0,.45)" }}
      >
        {/* oversized Latin display over a small JP caption */}
        <MaskReveal
          lines={[title]}
          delay={350}
          className="text-4xl tracking-[0.14em] md:text-6xl lg:text-7xl"
        />
        <Reveal delay={600} from="translateY(16px)">
          <p className="text-[12px] leading-relaxed tracking-[0.3em] md:text-[13px]">{caption}</p>
        </Reveal>
        <Reveal delay={750} from="translateY(12px)">
          <Link
            href={href}
            data-cursor="VIEW"
            className="border-b border-white pb-1 text-[13px] tracking-[0.25em] transition-opacity hover:opacity-60"
          >
            {linkLabel}
          </Link>
        </Reveal>
      </div>
    </Panel>
  );
}

/* ------------------------------- page ------------------------------- */

export default function Home() {
  useLuxScroll();

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Intro />
      <Header />
      <PageIndex />

      {/* vertical brand text along left edge */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden items-center mix-blend-multiply lg:flex" aria-hidden>
        <span
          className="block select-none leading-none"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            transform: `rotate(180deg) translateY(${scrollY * 0.06}px)`,
            fontSize: "clamp(80px,10vw,150px)",
            letterSpacing: "0.04em",
            marginLeft: "-0.14em",
          }}
        >
          signifier
        </span>
      </div>

      {/* ================= stacked panels ================= */}
      <div className="relative">
        {/* ---------- hero ---------- */}
        <Panel bg={DARK} label="INTRO" className="h-[100svh] overflow-hidden">
          <HeroCarousel />
        </Panel>

        {/* ---------- 01 PICK UP ---------- */}
        <Panel id="pickup" bg={BG} label="PICK UP">
          <SideLabel text="PICK UP" />
          <div className="flex min-h-[100svh] flex-col justify-center px-6 py-24 md:min-h-0 md:h-full md:py-0 md:px-36">
            <SectionHead no="01." title="PICK UP" />
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-[13px] leading-7 text-neutral-600">
                アウター、トップス、ボトムスを軸に、黒の緊張感を日常へ落とし込むエディット。
                身体の輪郭を研ぎ澄ます、今季のキーシルエットを選びました。
              </p>
            </Reveal>
            <div className="mt-7 grid max-w-5xl grid-cols-2 gap-4 md:mt-12 md:grid-cols-[1fr_1fr_1.6fr] md:gap-8">
              {pickUp.map((p, i) => (
                <Link
                  key={p.name}
                  href={PRODUCT_URL}
                  data-cursor="VIEW"
                  className={`block ${i === 1 ? "md:translate-y-12" : ""} ${i === 2 ? "col-span-2 md:col-span-1 md:-translate-y-4" : ""}`}
                >
                  <CurtainImage src={p.img} alt={p.name} ratio={i === 2 ? "4/5" : "3/4"} delay={i * 150} />
                  <Reveal delay={i * 150 + 250}>
                    <p className="mt-3 text-[13px]">{p.name}</p>
                    <p className="mt-1 text-[13px] font-semibold">{p.price}</p>
                  </Reveal>
                </Link>
              ))}
            </div>
          </div>
        </Panel>

        {/* ---------- 02 ACCESSORY — full-bleed visual ---------- */}
        <VisualPanel
          id="accessory"
          bg="#e7e2da"
          title="ACCESSORY"
          images={[
            "/images/fashion/detail-ring-fingertips.png",
            "/images/fashion/detail-cuff-fingers.png",
            "/images/fashion/detail-face-close.png",
          ]}
          caption="アクセサリー コレクション"
          linkLabel="アクセサリー"
          href="/collections/all"
        />

        {/* ---------- 03 WOMEN — full-bleed visual ---------- */}
        <VisualPanel
          id="women"
          bg={RED}
          title="WOMEN"
          images={["/images/fashion/women-key.png", "/images/fashion/pickup-tailored-jacket.png"]}
          caption="2026年秋冬 ウィメンズ コレクション"
          linkLabel="ウィメンズ"
          href="/collections/all"
        />

        {/* ---------- 04 MEN — full-bleed visual ---------- */}
        <VisualPanel
          id="men"
          bg={DARK}
          title="MEN"
          images={["/images/fashion/men-outerwear.png", "/images/fashion/men-layered-top.png"]}
          caption="2026年秋冬 メンズ コレクション"
          linkLabel="メンズ"
          href="/collections/all"
        />

        {/* ---------- 05 JOURNAL ---------- */}
        <Panel id="journal" bg="#e7e2da">
          <SideLabel text="JOURNAL" />
          <div className="flex min-h-[100svh] flex-col justify-center px-6 py-24 md:min-h-0 md:h-full md:py-0 md:px-36">
            <SectionHead no="05." title="JOURNAL" />
            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3">
              {journalPosts.map((p, i) => (
                <a key={p.title} href="#" data-cursor="READ" className="group block">
                  <CurtainImage src={p.img} alt={p.title} ratio="4/3" delay={i * 150} curtain="#e7e2da" />
                  <Reveal delay={i * 150 + 200}>
                    <p className="mt-4 text-[11px] tracking-[0.25em] text-neutral-400">{p.date}</p>
                    <p className="mt-2 text-[14px] leading-7 group-hover:opacity-60">{p.title}</p>
                  </Reveal>
                </a>
              ))}
            </div>
            <Reveal delay={600}>
              <a href="#" className="mt-12 inline-block text-[13px] tracking-[0.3em]" style={{ color: RED }}>
                READ MORE →
              </a>
            </Reveal>
          </div>
        </Panel>

        {/* ---------- 06 NEWS ---------- */}
        <Panel id="news" bg={BG}>
          <SideLabel text="NEWS" side="left" />
          <div className="mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-6 py-24 md:min-h-0 md:h-full md:py-0">
            <SectionHead no="06." title="NEWS" />
            <ul className="mt-10 md:mt-14">
              {newsEntries.map((n, i) => (
                <li key={n.text} className="border-t border-neutral-300 last:border-b">
                  <Reveal delay={i * 120}>
                    <a href="#" className="group flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-10">
                      <span className="text-[12px] tracking-[0.2em] text-neutral-400">{n.date}</span>
                      <span className="w-14 text-[10px] tracking-[0.25em]" style={{ color: RED }}>{n.tag}</span>
                      <span className="text-[14px] leading-7 group-hover:opacity-60">{n.text}</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={600}>
              <a href="#" className="mt-10 inline-block text-[13px] tracking-[0.3em]" style={{ color: RED }}>
                VIEW ALL →
              </a>
            </Reveal>
          </div>
        </Panel>

        {/* ---------- 07 PRESS ---------- */}
        <Panel id="press" bg={DARK} className="text-white">
          <SideLabel text="PRESS" color="rgba(255,255,255,.85)" />
          <div className="mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-6 py-24 md:min-h-0 md:h-full md:py-0">
            <SectionHead no="07." title="PRESS" light />
            <div className="mt-10 md:mt-14">
              {pressEntries.map((p, i) => (
                <Reveal key={p.media} delay={i * 150}>
                  <a href="#" className="group block border-t border-white/20 py-8 last:border-b">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                      <span className="text-lg tracking-[0.15em] md:w-56">{p.media}</span>
                      <span className="text-[12px] tracking-[0.2em] text-white/50">{p.issue}</span>
                      <span className="text-[14px] leading-7 text-white/85 group-hover:opacity-60">{p.text}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={550}>
              <div className="mt-16 flex flex-col items-center text-white/90">
                <Logo className="h-12 w-10" />
                <Wordmark className="mt-2 text-2xl" />
              </div>
            </Reveal>
          </div>
        </Panel>
      </div>

      {/* footer slides over the last panel */}
      <div className="relative z-10" style={{ background: BG }}>
        <Footer />
      </div>
    </div>
  );
}

/* ---------- hero carousel (fills its panel) ---------- */

function HeroCarousel() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (heroSlides.length < 2) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-full">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 grid grid-cols-1 transition-opacity duration-[1500ms] ease-in-out md:grid-cols-2"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          {[s.left, s.right].map((src, j) => (
            <div key={j} className={`relative overflow-hidden ${j === 1 ? "hidden md:block" : ""}`}>
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="img-tone object-cover"
                style={{
                  transform: i === slide ? "scale(1.07)" : "scale(1)",
                  transition: `transform ${SLIDE_MS + 1500}ms ease-out`,
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="pointer-events-none absolute bottom-[18%] right-6 z-10 flex flex-col items-center text-white md:bottom-[22%] md:right-[7%]">
        <Logo className="h-11 w-9 drop-shadow md:h-14 md:w-11" />
        <Wordmark className="mt-2 text-2xl drop-shadow md:text-4xl lg:text-5xl" />
      </div>

      {heroSlides.length > 1 && (
        <div className="absolute bottom-7 right-6 z-10 flex gap-3 md:right-12 md:gap-5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className="flex h-8 w-14 items-center md:w-32"
            >
              <span className="relative h-[3px] w-full overflow-hidden bg-white/40">
                <span
                  className="absolute inset-y-0 left-0 w-full"
                  style={{
                    background: i === slide ? RED : "transparent",
                    transformOrigin: "left",
                    transform: i === slide ? "scaleX(1)" : "scaleX(0)",
                    transition: i === slide ? `transform ${SLIDE_MS}ms linear` : "none",
                  }}
                />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
