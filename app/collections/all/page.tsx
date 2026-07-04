"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Footer, Header, RED, Reveal, u } from "../../components/chrome";

/*
 * Item listing page (/collections/all) — layout study.
 * Photography: generated apparel visuals + Unsplash placeholders.
 * Copy is original placeholder text.
 */

type Item = {
  name: string;
  price: number;
  category: string;
  img: string;
  hover: string;
  badge?: "NEW" | "残りわずか" | "SOLD OUT";
};

const PRODUCT_URL = "/products/dsse2056h-si";

const allItems: Item[] = [
  { name: "Structured Wool Coat", price: 132000, category: "Outerwear", img: "/images/fashion/pickup-outerwear.png", hover: "/images/fashion/women-key.png", badge: "NEW" },
  { name: "Long Tailored Coat", price: 148500, category: "Outerwear", img: "/images/fashion/men-outerwear.png", hover: "/images/fashion/men-layered-top.png" },
  { name: "Double-Breasted Jacket", price: 99000, category: "Jacket", img: "/images/fashion/pickup-tailored-jacket.png", hover: "/images/fashion/men-outerwear.png", badge: "NEW" },
  { name: "Sculpted Waist Jacket", price: 118800, category: "Jacket", img: "/images/fashion/women-key.png", hover: "/images/fashion/pickup-outerwear.png", badge: "残りわずか" },
  { name: "Layered White Shirt", price: 39600, category: "Shirts", img: "/images/fashion/men-layered-top.png", hover: "/images/fashion/pickup-wide-trousers.png" },
  { name: "Sleeveless Long Vest", price: 63800, category: "Tops", img: "/images/fashion/pickup-wide-trousers.png", hover: "/images/fashion/women-key.png" },
  { name: "Wide Pleated Trousers", price: 52800, category: "Bottoms", img: "/images/fashion/pickup-wide-trousers.png", hover: "/images/fashion/pickup-tailored-jacket.png", badge: "NEW" },
  { name: "Straight Black Trousers", price: 57200, category: "Bottoms", img: "/images/fashion/pickup-tailored-jacket.png", hover: "/images/fashion/men-outerwear.png" },
  { name: "Sculptural Ring Set", price: 29700, category: "Accessories", img: "/images/fashion/detail-ring-fingertips.png", hover: "/images/fashion/detail-cuff-fingers.png", badge: "NEW" },
  { name: "Cuff Line Ring", price: 18700, category: "Accessories", img: "/images/fashion/detail-cuff-fingers.png", hover: "/images/fashion/detail-ring-fingertips.png" },
  { name: "Minimal Ear Cuff", price: 22000, category: "Accessories", img: "/images/fashion/detail-face-close.png", hover: "/images/fashion/detail-tops-bust.png" },
  { name: "Zodiac イヤーカフリング", price: 26400, category: "Accessories", img: u("photo-1706196612848-0cd22cb6231e", 900), hover: "/images/fashion/detail-face-close.png", badge: "SOLD OUT" },
];

const categories = ["All", "Outerwear", "Jacket", "Tops", "Shirts", "Bottoms", "Accessories"];
const priceRanges = ["すべて", "〜¥30,000", "¥30,000〜¥60,000", "¥60,000〜¥100,000", "¥100,000〜"];
const materials = ["Wool Gabardine", "Cotton Poplin", "Technical Twill", "Leather", "Silver 925"];
const collections = ["TAILORING", "OUTERWEAR EDIT", "SHIRTS", "TROUSERS", "ACCESSORY", "ZODIAC"];
const sorts = ["おすすめ順", "価格が安い順", "価格が高い順"] as const;

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

function inRange(price: number, range: string) {
  switch (range) {
    case "〜¥30,000": return price < 30000;
    case "¥30,000〜¥60,000": return price >= 30000 && price < 60000;
    case "¥60,000〜¥100,000": return price >= 60000 && price < 100000;
    case "¥100,000〜": return price >= 100000;
    default: return true;
  }
}

export default function CollectionsAll() {
  const [category, setCategory] = useState("All");
  const [range, setRange] = useState("すべて");
  const [sort, setSort] = useState<(typeof sorts)[number]>("おすすめ順");

  const items = useMemo(() => {
    const filtered = allItems.filter(
      (it) => (category === "All" || it.category === category) && inRange(it.price, range)
    );
    if (sort === "価格が安い順") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "価格が高い順") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [category, range, sort]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="px-6 pt-28 md:px-16 lg:px-24">
        <Reveal from="translateY(16px)">
          <nav className="text-[12px] tracking-wider text-neutral-500">
            <Link href="/" className="hover:opacity-60">Top</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Item</span>
          </nav>
          <h1 className="mt-6 text-3xl tracking-[0.35em] md:text-4xl">ITEM</h1>
          <p className="mt-3 text-[13px] tracking-wider text-neutral-500">ALL ITEMS ({items.length})</p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* ---------- filter sidebar ---------- */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={150}>
              <div className="space-y-10 text-[13px]">
                <div>
                  <p className="mb-4 text-[11px] tracking-[0.3em] text-neutral-400">CATEGORY</p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-y-3">
                    {categories.map((c) => (
                      <li key={c}>
                        <button
                          onClick={() => setCategory(c)}
                          className="tracking-[0.12em] transition-opacity hover:opacity-60"
                          style={{ color: category === c ? RED : undefined, borderBottom: category === c ? `1px solid ${RED}` : "none" }}
                        >
                          {c}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-4 text-[11px] tracking-[0.3em] text-neutral-400">PRICE</p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-y-3">
                    {priceRanges.map((r) => (
                      <li key={r}>
                        <button
                          onClick={() => setRange(r)}
                          className="tracking-wider transition-opacity hover:opacity-60"
                          style={{ color: range === r ? RED : undefined }}
                        >
                          {r}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:block">
                  <p className="mb-4 text-[11px] tracking-[0.3em] text-neutral-400">MATERIAL</p>
                  <ul className="space-y-3 text-neutral-500">
                    {materials.map((m) => (
                      <li key={m}><span className="tracking-wider">{m}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:block">
                  <p className="mb-4 text-[11px] tracking-[0.3em] text-neutral-400">COLLECTION</p>
                  <ul className="space-y-3 text-neutral-500">
                    {collections.map((c) => (
                      <li key={c}><span className="tracking-[0.15em] text-[12px]">{c}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </aside>

          {/* ---------- grid ---------- */}
          <div>
            <Reveal delay={200}>
              <div className="mb-8 flex items-center justify-end gap-3 text-[13px]">
                <label htmlFor="sort" className="text-neutral-500">並び替え</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
                  className="border border-neutral-300 bg-transparent px-3 py-2 tracking-wider outline-none focus:border-neutral-900"
                >
                  {sorts.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3">
              {items.map((it, i) => (
                <Reveal key={it.name} delay={(i % 3) * 100}>
                  <Link href={PRODUCT_URL} className="group block">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                      <Image
                        src={it.img}
                        alt={it.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                      />
                      <Image
                        src={it.hover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                      />
                      {it.badge && (
                        <span
                          className="absolute left-3 top-3 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white"
                          style={{ background: it.badge === "SOLD OUT" ? "rgba(23,23,23,.85)" : RED }}
                        >
                          {it.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-[11px] tracking-[0.24em] text-neutral-400">{it.category}</p>
                    <p className="mt-2 text-[13px] leading-6">{it.name}</p>
                    <p className="mt-1 text-[13px] font-semibold">{yen(it.price)}</p>
                  </Link>
                </Reveal>
              ))}
            </div>

            {items.length === 0 && (
              <p className="py-24 text-center text-[13px] tracking-wider text-neutral-500">
                該当するアイテムがありません
              </p>
            )}

            {/* pagination */}
            <Reveal delay={200}>
              <div className="mt-20 flex items-center justify-center gap-6 text-[14px] tracking-[0.2em]">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className="px-1 transition-opacity hover:opacity-60"
                    style={p === 1 ? { color: RED, borderBottom: `1px solid ${RED}` } : undefined}
                  >
                    {p}
                  </button>
                ))}
                <span className="text-neutral-400">…</span>
                <button className="px-1 transition-opacity hover:opacity-60">6</button>
                <button className="ml-4 tracking-[0.3em] transition-opacity hover:opacity-60" style={{ color: RED }}>
                  NEXT →
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
