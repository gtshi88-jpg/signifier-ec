"use client";

import Link from "next/link";
import {
  CurtainImage,
  Footer,
  Header,
  Logo,
  RED,
  Reveal,
  u,
  useReveal,
  Wordmark,
} from "../../components/chrome";

/*
 * Philosophy page (/pages/philosophy) — layout study.
 * Photography: Unsplash. Copy is original placeholder text.
 */

export default function Philosophy() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      {/* ---------- hero ---------- */}
      <section className="relative h-[72svh]">
        <CurtainImage src={u("photo-1544053287-37b042a45a17", 2000)} alt="" className="h-full" />
        <div className="absolute inset-0 flex items-end">
          <div className="px-6 pb-14 md:px-24">
            <Reveal delay={300}>
              <p className="text-[12px] tracking-[0.4em] text-white/80">ABOUT</p>
              <h1 className="mt-4 text-4xl tracking-[0.3em] text-white md:text-5xl">PHILOSOPHY</h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 01 IDENTIFY JEWELRY ---------- */}
      <section className="relative px-6 py-28 md:px-24 md:py-40">
        <span
          className="pointer-events-none absolute right-2 top-24 hidden select-none xl:block"
          style={{ writingMode: "vertical-rl", fontSize: "clamp(44px,5vw,80px)", letterSpacing: "0.14em", opacity: 0.9 }}
          aria-hidden
        >
          IDENTITY
        </span>

        <div className="grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <p className="text-[13px] tracking-[0.3em] text-neutral-400">01.</p>
              <h2 className="mt-3 text-2xl tracking-[0.2em] md:text-3xl">IDENTIFY JEWELRY</h2>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="mt-10 text-xl leading-loose md:text-[22px]">
                わたしを、わたしとして<br />生きるためのジュエリー。
              </h3>
              <div className="mt-8 space-y-6 text-[14px] leading-8 text-neutral-600">
                <p>
                  古来、人は星や動物、護符のかたちに願いを託し、身につけることで自分を守ってきました。VERMILLION はその営みを現代のジュエリーとして翻訳します。
                </p>
                <p>
                  誰かに合わせるためではなく、自分の輪郭をたしかめるために。今日のあなたを選びとる小さな儀式として、意味を纏うジュエリーを提案します。
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <CurtainImage src={u("premium_photo-1669951867704-a78fd21fbbd2", 1200)} alt="Identify Jewelry" ratio="4/5" />
          </Reveal>
        </div>
      </section>

      {/* ---------- 02 VERMILLION (red band) ---------- */}
      <VermillionBand />

      {/* ---------- linked content blocks ---------- */}
      <section className="px-6 py-28 md:px-24 md:py-36">
        <div className="grid max-w-6xl gap-10 md:grid-cols-2">
          {[
            {
              title: "JEWELRY HISTORIA",
              text: "護符と装身具の歴史をたどる読みもの。モチーフに宿る物語を紐解きます。",
              img: u("photo-1601121141461-9d6647bca1ed", 1100),
            },
            {
              title: "ORACLE CARDS",
              text: "星々のことばを日々の指針に。ジュエリーと響き合うオラクルカード。",
              img: u("photo-1518075927137-c76d63928cb8", 1100),
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 200}>
              <Link href="/pages/gallery" className="group block">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-[1.04]">
                    <CurtainImage src={b.img} alt={b.title} ratio="16/10" delay={i * 150} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg tracking-[0.25em]">{b.title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-neutral-600">{b.text}</p>
                <span className="mt-4 inline-block text-[12px] tracking-[0.3em]" style={{ color: RED }}>
                  READ MORE →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* red band: the meaning of the color vermillion */
function VermillionBand() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: RED,
          transform: shown ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 1.3s cubic-bezier(.76,0,.24,1)",
        }}
      />
      <div className="relative grid items-center gap-14 px-6 py-28 text-white md:grid-cols-2 md:px-24 md:py-40">
        <Reveal delay={300}>
          <CurtainImage src={u("photo-1557053910-d9eadeed1c58", 1200)} alt="Vermillion" ratio="4/5" curtain={RED} delay={400} />
        </Reveal>
        <div>
          <Reveal delay={400}>
            <p className="text-[13px] tracking-[0.3em] text-white/70">02.</p>
            <h2 className="mt-3 text-2xl tracking-[0.2em] md:text-3xl">VERMILLION</h2>
          </Reveal>
          <Reveal delay={550}>
            <h3 className="mt-10 text-xl leading-loose md:text-[22px]">
              いのちの色、<br />朱に込めて。
            </h3>
            <div className="mt-8 space-y-6 text-[14px] leading-8 text-white/85">
              <p>
                ブランド名の由来である朱色(バーミリオン)は、古くから魔除けの色として鳥居や印章に用いられ、同時に絵画では情熱と生命力を象徴してきました。
              </p>
              <p>
                守ることと、燃やすこと。ふたつの力をあわせ持つこの色を、わたしたちはものづくりの中心に置いています。
              </p>
            </div>
          </Reveal>
          <Reveal delay={700}>
            <div className="mt-12 flex flex-col items-start" aria-hidden>
              <Logo className="h-12 w-10 text-white/90" />
              <Wordmark className="mt-2 text-2xl text-white/90" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
