"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer, Header, RED, Reveal } from "../../components/chrome";
import { newsEntries, newsHref, newsTags, type NewsTag } from "../../data/news";

export default function News() {
  const [tag, setTag] = useState<NewsTag | "ALL">("ALL");
  const filtered =
    tag === "ALL" ? newsEntries : newsEntries.filter((entry) => entry.tag === tag);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
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
            NEWS
          </span>

          <Reveal from="translateY(16px)">
            <nav className="text-[12px] tracking-wider text-neutral-500">
              <Link href="/" className="hover:opacity-60">
                Top
              </Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-800">News</span>
            </nav>
            <p className="mt-10 text-[13px] tracking-[0.3em] text-neutral-400">06.</p>
            <h1 className="mt-2 text-2xl tracking-[0.25em] md:text-3xl">NEWS</h1>
            <p className="mt-6 max-w-md text-[13px] leading-7 text-neutral-600">
              ショップ情報、新作リリース、配送やサイトに関するお知らせを掲載しています。
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] tracking-[0.2em]">
              {newsTags.map((t) => (
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

          <ul className="mt-14">
            {filtered.map((entry, i) => (
              <li key={entry.slug} className="border-t border-neutral-300 last:border-b">
                <Reveal delay={i * 80}>
                  <Link
                    href={newsHref(entry.slug)}
                    className="group flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-10"
                  >
                    <span className="text-[12px] tracking-[0.2em] text-neutral-400">{entry.date}</span>
                    <span className="w-14 text-[10px] tracking-[0.25em]" style={{ color: RED }}>
                      {entry.tag}
                    </span>
                    <span className="text-[14px] leading-7 group-hover:opacity-60">{entry.text}</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
