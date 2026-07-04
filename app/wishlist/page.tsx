"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Footer,
  Header,
  RED,
  Reveal,
  u,
} from "../components/chrome";

const wishlistItems = [
  {
    name: "Zodiac イヤーカフリング てんびん座",
    price: "¥26,400",
    category: "Ear Cuff",
    img: u("photo-1709150485687-b5ed84fd776c", 900),
    status: "在庫あり",
  },
  {
    name: "Crescent ピアス",
    price: "¥39,600",
    category: "Pierce",
    img: u("photo-1560577938-a5ed9b19fe12", 900),
    status: "残りわずか",
  },
  {
    name: "Royal Star ネックレス",
    price: "¥41,800",
    category: "Necklace",
    img: u("premium_photo-1681276170092-446cd1b5b32d", 900),
    status: "再入荷待ち",
  },
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="relative px-6 pb-20 pt-28 md:px-16 lg:px-24">
        <span
          className="pointer-events-none absolute right-2 top-28 hidden select-none xl:block"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            fontSize: "clamp(52px,6.4vw,96px)",
            letterSpacing: "0.12em",
          }}
          aria-hidden
        >
          WISHLIST
        </span>

        <Reveal from="translateY(16px)">
          <nav className="text-[12px] tracking-wider text-neutral-500">
            <Link href="/" className="hover:opacity-60">Top</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Wishlist</span>
          </nav>
          <div className="mt-10 flex flex-col justify-between gap-6 border-b border-neutral-300 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] tracking-[0.35em] text-neutral-400">SAVED SIGNS</p>
              <h1 className="mt-5 text-3xl tracking-[0.3em] md:text-5xl">WISHLIST</h1>
            </div>
            <p className="max-w-sm text-[13px] leading-7 text-neutral-600">
              気になるしるしを、あとで見返せる場所に。
              入荷状況や価格を確かめながら、次のひとつを選べます。
            </p>
          </div>
        </Reveal>

        <section className="mt-14 grid gap-x-7 gap-y-16 md:grid-cols-3">
          {wishlistItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <article className="group">
                <Link href="/products/dsse2056h-si" className="block">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute left-4 top-4 px-3 py-1.5 text-[10px] tracking-[0.22em] text-white"
                      style={{
                        background: item.status === "再入荷待ち" ? "rgba(23,23,23,.82)" : RED,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </Link>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.28em] text-neutral-400">{item.category}</p>
                    <Link href="/products/dsse2056h-si" className="mt-2 block text-[14px] leading-7 hover:opacity-60">
                      {item.name}
                    </Link>
                    <p className="mt-1 text-[14px] font-semibold">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    className="text-[11px] tracking-[0.2em] text-neutral-400 transition-opacity hover:opacity-60"
                  >
                    REMOVE
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-center text-[11px] tracking-[0.22em]">
                  <Link
                    href="/cart"
                    className="border border-[#b0301c] py-3 text-[#b0301c] transition-colors hover:bg-[#b0301c] hover:text-white"
                  >
                    CART
                  </Link>
                  <Link
                    href="/products/dsse2056h-si"
                    className="border border-neutral-300 py-3 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  >
                    DETAIL
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal delay={300}>
          <section className="mt-24 border-t border-neutral-300 pt-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-[12px] tracking-[0.35em]" style={{ color: RED }}>
                  NEXT STORY
                </p>
                <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                  まだ見ぬコレクションから、あなたの星を探す。
                </p>
              </div>
              <Link
                href="/collections/all"
                className="inline-flex min-h-12 items-center border border-neutral-900 px-7 text-[12px] tracking-[0.28em] transition-colors hover:bg-neutral-900 hover:text-white"
              >
                VIEW ALL ITEMS
              </Link>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
