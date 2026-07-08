"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { Footer, Header, RED, Reveal, BG } from "../../../components/chrome";
import { getAdjacentPress, getPressBySlug } from "../../../data/press";

const PRESS_BG = "#191715";

export default function PressDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = getPressBySlug(slug);

  if (!entry) notFound();

  const { prev, next } = getAdjacentPress(slug);

  return (
    <div className="min-h-screen overflow-x-clip text-white" style={{ background: PRESS_BG }}>
      <Header />

      <main className="px-6 pb-28 pt-32 md:px-16 lg:px-24">
        <article className="relative mx-auto max-w-3xl">
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
              <Link href="/pages/press" className="hover:opacity-60">
                Press
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/85">{entry.tag}</span>
            </nav>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-lg tracking-[0.15em]">{entry.media}</span>
              <span className="text-[12px] tracking-[0.2em] text-white/50">{entry.issue}</span>
              <span className="text-[10px] tracking-[0.25em]" style={{ color: RED }}>
                {entry.tag}
              </span>
            </div>

            <h1 className="mt-6 text-xl leading-relaxed tracking-[0.12em] md:text-2xl">
              {entry.text}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 space-y-6 border-t border-white/20 pt-10 text-[14px] leading-8 text-white/70">
              {entry.body.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-16 flex flex-col gap-8 border-t border-white/20 pt-10 md:flex-row md:items-center md:justify-between">
              <Link
                href="/pages/press"
                className="text-[13px] tracking-[0.3em] transition-opacity hover:opacity-60"
                style={{ color: RED }}
              >
                ← PRESS 一覧へ
              </Link>

              <div className="flex flex-col gap-4 text-[13px] tracking-[0.12em] md:items-end">
                {prev && (
                  <Link href={`/pages/press/${prev.slug}`} className="group max-w-md text-right">
                    <span className="text-[10px] tracking-[0.25em] text-white/45">PREV</span>
                    <span className="mt-1 block leading-7 text-white/80 group-hover:opacity-60">
                      {prev.text}
                    </span>
                  </Link>
                )}
                {next && (
                  <Link href={`/pages/press/${next.slug}`} className="group max-w-md text-right">
                    <span className="text-[10px] tracking-[0.25em] text-white/45">NEXT</span>
                    <span className="mt-1 block leading-7 text-white/80 group-hover:opacity-60">
                      {next.text}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </article>
      </main>

      <div style={{ background: BG }}>
        <Footer />
      </div>
    </div>
  );
}
