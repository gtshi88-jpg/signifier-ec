"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header, RED, Reveal, BG } from "../../components/chrome";
import { pressEntries, pressHref, pressTags, type PressTag } from "../../data/press";

const PRESS_BG = "#191715";

export default function Press() {
  const [tag, setTag] = useState<PressTag | "ALL">("ALL");
  const filtered =
    tag === "ALL" ? pressEntries : pressEntries.filter((entry) => entry.tag === tag);

  return (
    <div className="min-h-screen overflow-x-clip text-white" style={{ background: PRESS_BG }}>
      <Header />

      <main className="px-6 pb-28 pt-32 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-4xl">
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
            PRESS
          </span>

          <Reveal from="translateY(16px)">
            <nav className="text-[12px] tracking-wider text-white/50">
              <Link href="/" className="hover:opacity-60">
                Top
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/85">Press</span>
            </nav>
            <p className="mt-10 text-[13px] tracking-[0.3em] text-white/50">07.</p>
            <h1 className="mt-2 text-2xl tracking-[0.25em] md:text-3xl">PRESS</h1>
            <p className="mt-6 max-w-md text-[13px] leading-7 text-white/65">
              雑誌・ウェブメディア・イベントなど、signifier に関するメディア掲載情報。
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.2em]">
              {pressTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTag(t)}
                  className="pb-1 transition-opacity hover:opacity-60"
                  style={
                    t === tag
                      ? { color: RED, borderBottom: `1px solid ${RED}` }
                      : { color: "rgba(255,255,255,.45)" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-14">
            {filtered.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 80}>
                <Link
                  href={pressHref(entry.slug)}
                  className="group block border-t border-white/20 py-8 last:border-b"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                    <span className="text-lg tracking-[0.15em] md:w-56">{entry.media}</span>
                    <span className="text-[12px] tracking-[0.2em] text-white/50">{entry.issue}</span>
                    <span className="w-24 text-[10px] tracking-[0.25em]" style={{ color: RED }}>
                      {entry.tag}
                    </span>
                    <span className="text-[14px] leading-7 text-white/85 group-hover:opacity-60">
                      {entry.text}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <div style={{ background: BG }}>
        <Footer />
      </div>
    </div>
  );
}
