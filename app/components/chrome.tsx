"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const RED = "#b0301c";
export const BG = "#f2f0ec";

export const u = (id: string, w = 1600) =>
  `https://${id.startsWith("premium_") ? "plus" : "images"}.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const nav = ["Item", "About", "Gallery", "Journal", "News", "Press"];

export const navLinks: Record<string, string> = {
  Item: "/collections/all",
  About: "/pages/philosophy",
  Gallery: "/pages/gallery",
  Journal: "/#journal",
  News: "/#news",
  Press: "/#press",
};

export const footerGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "CUSTOMER SERVICE",
    links: [
      { label: "Shopping Guide", href: "/pages/shopping-guide" },
      { label: "After Care", href: "/pages/after-care" },
      { label: "Contact", href: "/pages/contact" },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "特定商取引法に基づく表記", href: "/pages/law" },
      { label: "Terms of Use", href: "/pages/terms" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
    ],
  },
  {
    heading: "FOLLOW US",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "X (Twitter)", href: "https://x.com/" },
    ],
  },
];

/* --------------------------- scroll reveal --------------------------- */

export function useReveal<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

export function Reveal({
  children,
  delay = 0,
  from = "translateY(48px)",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: string;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : from,
        transition: `opacity 1.1s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 1.1s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* image that unveils with a curtain wipe + slow settle-zoom on scroll-in */
export function CurtainImage({
  src,
  alt = "",
  ratio,
  delay = 0,
  curtain = BG,
  className = "",
}: {
  src: string;
  alt?: string;
  ratio?: string;
  delay?: number;
  curtain?: string;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.25);
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="img-tone absolute inset-0 h-full w-full object-cover"
        style={{
          transform: shown ? "scale(1)" : "scale(1.15)",
          transition: `transform 1.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: curtain,
          transform: shown ? "scaleY(0)" : "scaleY(1)",
          transformOrigin: "top",
          transition: `transform 1.2s cubic-bezier(.76,0,.24,1) ${delay}ms`,
        }}
      />
    </div>
  );
}

/* --------------------------- brand marks --------------------------- */

/**
 * Ornate “S” monogram — baroque filigree / acanthus scrollwork,
 * inspired by classic premium initial marks.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      {/* S body with leaf-shaped cutouts (evenodd) */}
      <path
        fillRule="evenodd"
        d="
          M74 24
          C74 12 62 4 48 4
          C30 4 18 14 18 30
          C18 42 28 49 44 55
          L58 60
          C70 65 76 72 76 84
          C76 102 60 116 42 116
          C26 116 14 106 14 92
          H28
          C28 100 36 106 44 106
          C56 106 64 98 64 86
          C64 76 56 70 44 65
          L30 60
          C16 54 10 46 10 32
          C10 12 26 0 48 0
          C66 0 82 10 82 24
          Z

          M42 22
          C46 16 54 14 58 18
          C55 22 56 28 58 32
          C52 32 46 28 42 22
          Z

          M50 34
          C56 32 62 36 64 42
          C58 44 54 48 52 54
          C48 48 44 42 50 34
          Z

          M48 66
          C54 68 58 74 56 80
          C50 78 44 80 40 84
          C42 76 44 70 48 66
          Z

          M58 78
          C54 84 46 86 42 82
          C45 78 44 72 42 68
          C48 68 54 72 58 78
          Z
        "
      />
      {/* Upper terminal spiral */}
      <path d="M78 8c8 2 13 9 11 17-2 7-9 10-15 8 3-5 3-11 0-15-3-4-9-4-13 1 5-8 11-12 17-11z" />
      {/* Lower terminal spiral */}
      <path d="M22 112c-8-2-13-9-11-17 2-7 9-10 15-8-3 5-3 11 0 15 3 4 9 4 13-1-5 8-11 12-17 11z" />
      {/* Outer acanthus leaves */}
      <path d="M86 32c6 4 8 12 4 18-6-3-12-2-17 2 5-6 8-13 13-20z" />
      <path d="M14 88c-6-4-8-12-4-18 6 3 12 2 17-2-5 6-8 13-13 20z" />
      <path d="M28 10c-7 3-11 10-10 17 6-2 11 0 15-3-2-5-3-10-5-14z" />
      <path d="M72 110c7-3 11-10 10-17-6 2-11 0-15 3 2 5 3 10 5 14z" />
      <path d="M84 54c4 2 6 7 4 12-4-1-8 0-11 2 2-5 4-10 7-14z" />
      <path d="M16 66c-4-2-6-7-4-12 4 1 8 0 11-2-2 5-4 10-7 14z" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[0.06em] ${className}`}>
      signifier
    </span>
  );
}

/* --------------------------- atmosphere --------------------------- */

/* full-screen film-grain overlay (tiled SVG turbulence) */
export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
        backgroundSize: "300px 300px",
      }}
    />
  );
}

/*
 * Custom cursor (fine pointers only): a small vermillion dot trailing the
 * mouse, a ring over links, and an expanded label over [data-cursor="..."].
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const enableRaf = requestAnimationFrame(() => setEnabled(true));

    let x = -100, y = -100, cx = -100, cy = -100;
    let raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (ref.current) ref.current.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const tagged = el.closest("[data-cursor]");
      if (tagged) {
        setLabel(tagged.getAttribute("data-cursor") || "");
        setHovering(true);
        return;
      }
      setLabel("");
      setHovering(!!el.closest("a,button"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(enableRaf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[95]" aria-hidden>
      <div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ease-out"
        style={
          label
            ? { width: 76, height: 76, background: "rgba(242,240,236,.92)", color: "#191715" }
            : hovering
              ? { width: 40, height: 40, border: `1px solid ${RED}` }
              : { width: 7, height: 7, background: RED }
        }
      >
        {label && <span className="text-[10px] tracking-[0.3em]">{label}</span>}
      </div>
    </div>
  );
}

/* --------------------------- header / footer --------------------------- */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* lock body scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* hide on scroll down, reappear on scroll up */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 140);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out"
      style={{ transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)" }}
    >
      {/* difference blend: dark on light panels, light over photography */}
      <div className="relative flex h-16 items-center justify-between px-4 text-[16px] text-white mix-blend-difference md:h-20 md:px-10 md:text-[18px]">
        {/* mobile hamburger */}
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>

        <nav className="hidden gap-9 md:flex">
          {nav.map((n) => (
            <Link key={n} href={navLinks[n] ?? "/"} className="u-line">
              {n}
            </Link>
          ))}
        </nav>
        <Link href="/" aria-label="signifier home" className="absolute left-1/2 -translate-x-1/2">
          <Logo className="h-10 w-8 md:h-11 md:w-9" />
        </Link>
        <div className="flex items-center gap-5 md:gap-9">
          <button aria-label="Search" className="hidden transition-opacity hover:opacity-60 sm:block">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M15.5 15.5 L21 21" />
            </svg>
          </button>
          <Link href="/login" className="u-line hidden md:inline">Login</Link>
          <Link href="/wishlist" className="u-line hidden md:inline">Wishlist(3)</Link>
          <Link href="/cart" className="u-line">Cart(2)</Link>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/40 transition-opacity duration-300"
          style={{ opacity: menuOpen ? 1 : 0 }}
        />
        <div
          className="absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-[#f2f0ec] px-8 pb-10 pt-5 transition-transform duration-500"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
            transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div className="flex items-center justify-between">
            <Logo className="h-10 w-8" />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1">
            {nav.map((n, i) => (
              <Link
                key={n}
                href={navLinks[n] ?? "/"}
                onClick={() => setMenuOpen(false)}
                className="border-b border-neutral-300 py-4 text-xl tracking-[0.15em] transition-opacity hover:opacity-60"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "none" : "translateX(-16px)",
                  transition: `opacity .5s ease ${120 + i * 60}ms, transform .5s ease ${120 + i * 60}ms`,
                }}
              >
                {n}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 text-[14px] tracking-wider">
            <Link href="/login" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Login</Link>
            <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Wishlist(3)</Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Cart(2)</Link>
            <Wordmark className="mt-6 text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-28 text-neutral-900 md:px-36">
      <Reveal>
        <div className="grid gap-14 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col items-start">
            <Logo className="h-12 w-10" />
            <Wordmark className="mt-2 text-3xl" />
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[14px]">
              {nav.map((n) => (
                <Link key={n} href={navLinks[n] ?? "/"} className="transition-opacity hover:opacity-60">
                  {n}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((g) => (
              <div key={g.heading}>
                <p className="mb-5 text-[11px] tracking-[0.3em] opacity-60">{g.heading}</p>
                <ul className="space-y-3 text-[14px]">
                  {g.links.map((l) =>
                    l.href.startsWith("http") ? (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-60"
                        >
                          {l.label}
                        </a>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <Link href={l.href} className="transition-opacity hover:opacity-60">
                          {l.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-16 text-[11px] tracking-[0.3em]">© signifier</p>
      </Reveal>
    </footer>
  );
}
