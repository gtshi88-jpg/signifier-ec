"use client";

import Link from "next/link";
import { useState } from "react";
import { CurtainImage, Footer, Header, RED, Reveal } from "../../components/chrome";
import { journalEntries, journalHref, journalTags, type JournalTag } from "../../data/journal";

const JOURNAL_BG = "#e7e2da";

export default function Journal() {
  const [tag, setTag] = useState<JournalTag | "ALL">("ALL");
  const filtered =
    tag === "ALL" ? journalEntries : journalEntries.filter((entry) => entry.tag === tag);

  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900" style={{ background: JOURNAL_BG }}>
      <Header />

      <main className="px-6 pb-28 pt-32 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-6xl">
          <span
            className="pointer-events-none absolute -right-2 top-0 hidden select-none xl:block"
            style={{
              color: RED,
              writingMode: "vertical-rl",
              fontSize: "clamp(48px,6vw,96px)",
              letterSpacing: "0.12em",
            }}
            aria-hidden
          >
            JOURNAL
          </span>

          <Reveal from="translateY(16px)">
            <nav className="text-[12px] tracking-wider text-neutral-500">
              <Link href="/" className="hover:opacity-60">
                Top
              </Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-800">Journal</span>
            </nav>
            <p className="mt-10 text-[13px] tracking-[0.3em] text-neutral-400">05.</p>
            <h1 className="mt-2 text-2xl tracking-[0.25em] md:text-3xl">JOURNAL</h1>
            <p className="mt-6 max-w-md text-[13px] leading-7 text-neutral-600">
              アトリエの手仕事、素材への眼差し、纏うことの思想を綴る読みもの。
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.2em]">
              {journalTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTag(t)}
                  className="pb-1 transition-opacity hover:opacity-60"
                  style={
                    t === tag
                      ? { color: RED, borderBottom: `1px solid ${RED}` }
                      : { color: "#8a8378" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 100}>
                <Link href={journalHref(entry.slug)} className="group block">
                  <CurtainImage
                    src={entry.img}
                    alt={entry.title}
                    ratio="4/3"
                    delay={i * 80}
                    curtain={JOURNAL_BG}
                  />
                  <p className="mt-4 text-[11px] tracking-[0.25em] text-neutral-400">{entry.date}</p>
                  <p className="mt-1 text-[10px] tracking-[0.25em]" style={{ color: RED }}>
                    {entry.tag}
                  </p>
                  <p className="mt-2 text-[14px] leading-7 group-hover:opacity-60">{entry.title}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
