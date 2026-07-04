"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Footer,
  Header,
  RED,
  Reveal,
  u,
} from "../components/chrome";

type CartItem = {
  id: string;
  name: string;
  option: string;
  price: number;
  img: string;
};

const initialItems: CartItem[] = [
  {
    id: "aries-ear-cuff",
    name: "Zodiac イヤーカフリング おひつじ座",
    option: "Silver 925 / 通常ラッピング",
    price: 26400,
    img: u("photo-1706196612848-0cd22cb6231e", 900),
  },
  {
    id: "stone-ring",
    name: "Stone リング ムーンストーン",
    option: "Silver 925 / ギフトボックス",
    price: 23100,
    img: u("photo-1706196739260-1568b1cf4acd", 900),
  },
];

const yen = (value: number) => `¥${value.toLocaleString("ja-JP")}`;

export default function CartPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "aries-ear-cuff": 1,
    "stone-ring": 1,
  });

  const subtotal = useMemo(
    () => initialItems.reduce((sum, item) => sum + item.price * quantities[item.id], 0),
    [quantities]
  );
  const shipping = subtotal >= 11000 ? 0 : 770;
  const total = subtotal + shipping;

  const updateQty = (id: string, next: number) => {
    setQuantities((current) => ({ ...current, [id]: Math.max(1, next) }));
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="relative px-6 pb-20 pt-28 md:px-16 lg:px-24">
        <span
          className="pointer-events-none absolute right-2 top-28 hidden select-none xl:block"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            fontSize: "clamp(64px,8vw,120px)",
            letterSpacing: "0.1em",
          }}
          aria-hidden
        >
          CART
        </span>

        <Reveal from="translateY(16px)">
          <nav className="text-[12px] tracking-wider text-neutral-500">
            <Link href="/" className="hover:opacity-60">Top</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Cart</span>
          </nav>
          <div className="mt-10 flex flex-col justify-between gap-6 border-b border-neutral-300 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] tracking-[0.35em] text-neutral-400">ORDER</p>
              <h1 className="mt-5 text-3xl tracking-[0.3em] md:text-5xl">CART</h1>
            </div>
            <p className="max-w-sm text-[13px] leading-7 text-neutral-600">
              選んだしるしを確認して、ご購入手続きへお進みください。
              ¥11,000以上のご注文は送料無料です。
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_360px]">
          <section>
            <div className="hidden border-b border-neutral-300 pb-4 text-[11px] tracking-[0.24em] text-neutral-400 md:grid md:grid-cols-[1fr_128px_120px]">
              <span>ITEM</span>
              <span className="text-center">QUANTITY</span>
              <span className="text-right">TOTAL</span>
            </div>

            <div>
              {initialItems.map((item, index) => (
                <Reveal key={item.id} delay={index * 120}>
                  <article className="grid gap-5 border-b border-neutral-300 py-7 md:grid-cols-[1fr_128px_120px] md:items-center">
                    <div className="grid grid-cols-[104px_1fr] gap-5 md:grid-cols-[128px_1fr]">
                      <Link href="/products/dsse2056h-si" className="relative block overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </Link>
                      <div>
                        <p className="text-[11px] tracking-[0.28em] text-neutral-400">VERMILLION</p>
                        <Link href="/products/dsse2056h-si" className="mt-2 block text-[14px] leading-7 hover:opacity-60">
                          {item.name}
                        </Link>
                        <p className="mt-2 text-[12px] leading-6 text-neutral-500">{item.option}</p>
                        <p className="mt-3 text-[14px] font-semibold">{yen(item.price)}</p>
                        <button
                          type="button"
                          className="mt-5 text-[11px] tracking-[0.22em] text-neutral-400 transition-opacity hover:opacity-60"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-center">
                      <span className="text-[11px] tracking-[0.24em] text-neutral-400 md:hidden">QUANTITY</span>
                      <div className="flex h-11 items-center border border-neutral-300">
                        <button
                          type="button"
                          className="h-full px-4 text-lg transition-opacity hover:opacity-50"
                          onClick={() => updateQty(item.id, quantities[item.id] - 1)}
                          aria-label={`${item.name} quantity down`}
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-[14px]">{quantities[item.id]}</span>
                        <button
                          type="button"
                          className="h-full px-4 text-lg transition-opacity hover:opacity-50"
                          onClick={() => updateQty(item.id, quantities[item.id] + 1)}
                          aria-label={`${item.name} quantity up`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[14px] font-semibold md:block md:text-right">
                      <span className="text-[11px] font-normal tracking-[0.24em] text-neutral-400 md:hidden">TOTAL</span>
                      {yen(item.price * quantities[item.id])}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal delay={220}>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-t border-neutral-900 pt-8">
                <p className="text-[12px] tracking-[0.35em]" style={{ color: RED }}>
                  SUMMARY
                </p>
                <dl className="mt-8 space-y-5 text-[14px]">
                  <div className="flex justify-between gap-6">
                    <dt className="text-neutral-500">小計</dt>
                    <dd>{yen(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-neutral-500">送料</dt>
                    <dd>{shipping === 0 ? "無料" : yen(shipping)}</dd>
                  </div>
                  <div className="border-t border-neutral-300 pt-5">
                    <div className="flex justify-between gap-6 text-lg">
                      <dt>合計</dt>
                      <dd>{yen(total)}</dd>
                    </div>
                    <p className="mt-2 text-right text-[11px] tracking-wider text-neutral-400">税込</p>
                  </div>
                </dl>

                <button
                  type="button"
                  className="mt-9 w-full py-4 text-[13px] tracking-[0.3em] text-white transition-opacity hover:opacity-85"
                  style={{ background: RED }}
                >
                  CHECKOUT
                </button>

                <Link
                  href="/collections/all"
                  className="mt-4 flex min-h-12 items-center justify-center border border-neutral-300 text-[12px] tracking-[0.28em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                >
                  CONTINUE SHOPPING
                </Link>

                <div className="mt-10 border-t border-neutral-300 pt-7">
                  <p className="text-[11px] tracking-[0.28em] text-neutral-400">GIFT NOTE</p>
                  <p className="mt-3 text-[13px] leading-7 text-neutral-600">
                    ギフト包装をご希望の場合は、商品ページでラッピングをお選びください。
                    注文確認画面で配送日時の指定ができます。
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
