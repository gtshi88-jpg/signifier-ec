"use client";

import Link from "next/link";
import { Footer, Header, RED, Reveal } from "./chrome";

/*
 * Shared shell for static / support pages
 * (shopping guide, contact, legal pages, ...).
 */

export function StaticPage({
  sideLabel,
  eyebrow,
  title,
  lead,
  breadcrumb,
  children,
}: {
  sideLabel: string;
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="relative px-6 pb-24 pt-28 md:px-16 lg:px-24">
        <span
          className="pointer-events-none absolute right-2 top-28 hidden select-none xl:block"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            fontSize: "clamp(48px,6vw,96px)",
            letterSpacing: "0.12em",
          }}
          aria-hidden
        >
          {sideLabel}
        </span>

        <Reveal from="translateY(16px)">
          <nav className="text-[12px] tracking-wider text-neutral-500">
            <Link href="/" className="hover:opacity-60">Top</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">{breadcrumb}</span>
          </nav>
          <p className="mt-10 text-[12px] tracking-[0.35em] text-neutral-400">{eyebrow}</p>
          <h1 className="mt-5 text-3xl leading-relaxed tracking-[0.2em] md:text-4xl">{title}</h1>
          {lead && (
            <p className="mt-7 max-w-xl text-[14px] leading-8 text-neutral-600">{lead}</p>
          )}
        </Reveal>

        <div className="mt-16 max-w-3xl">{children}</div>
      </main>

      <Footer />
    </div>
  );
}

/* numbered / titled block used across support pages */
export function Article({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <section className="border-t border-neutral-300 py-10">
        <h2 className="text-[16px] tracking-[0.15em]">{title}</h2>
        <div className="mt-5 space-y-4 text-[13.5px] leading-8 text-neutral-600">{children}</div>
      </section>
    </Reveal>
  );
}
