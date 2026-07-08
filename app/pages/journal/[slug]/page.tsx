"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { Footer, Header, RED, Reveal } from "../../../components/chrome";
import { getAdjacentJournal, getJournalBySlug } from "../../../data/journal";

const JOURNAL_BG = "#e7e2da";

export default function JournalDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = getJournalBySlug(slug);

  if (!entry) notFound();

  const { prev, next } = getAdjacentJournal(slug);

  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900" style={{ background: JOURNAL_BG }}>
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
            JOURNAL
          </span>

          <Reveal from="translateY(16px)">
            <nav className="text-[12px] tracking-wider text-neutral-500">
              <Link href="/" className="hover:opacity-60">
                Top
              </Link>
              <span className="mx-2">/</span>
              <Link href="/pages/journal" className="hover:opacity-60">
                Journal
              </Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-800">{entry.tag}</span>
            </nav>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              <time className="text-[12px] tracking-[0.2em] text-neutral-400">{entry.date}</time>
              <span className="text-[10px] tracking-[0.25em]" style={{ color: RED }}>
                {entry.tag}
              </span>
            </div>

            <h1 className="mt-6 text-xl leading-relaxed tracking-[0.12em] md:text-2xl">
              {entry.title}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden">
              <Image
                src={entry.img}
                alt={entry.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="img-tone object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12 space-y-6 border-t border-neutral-400/40 pt-10 text-[14px] leading-8 text-neutral-600">
              {entry.body.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-16 flex flex-col gap-8 border-t border-neutral-400/40 pt-10 md:flex-row md:items-center md:justify-between">
              <Link
                href="/pages/journal"
                className="text-[13px] tracking-[0.3em] transition-opacity hover:opacity-60"
                style={{ color: RED }}
              >
                ← JOURNAL 一覧へ
              </Link>

              <div className="flex flex-col gap-4 text-[13px] tracking-[0.12em] md:items-end">
                {prev && (
                  <Link href={`/pages/journal/${prev.slug}`} className="group max-w-md text-right">
                    <span className="text-[10px] tracking-[0.25em] text-neutral-400">PREV</span>
                    <span className="mt-1 block leading-7 text-neutral-700 group-hover:opacity-60">
                      {prev.title}
                    </span>
                  </Link>
                )}
                {next && (
                  <Link href={`/pages/journal/${next.slug}`} className="group max-w-md text-right">
                    <span className="text-[10px] tracking-[0.25em] text-neutral-400">NEXT</span>
                    <span className="mt-1 block leading-7 text-neutral-700 group-hover:opacity-60">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </article>
      </main>

      <Footer />
    </div>
  );
}
