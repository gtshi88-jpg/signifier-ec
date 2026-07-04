"use client";

import Link from "next/link";
import {
  CurtainImage,
  Footer,
  Header,
  Logo,
  RED,
  Reveal,
  u,
  Wordmark,
} from "../components/chrome";

const benefits = [
  "Wishlist と Cart を保存",
  "購入履歴と配送状況を確認",
  "星座コレクションの再入荷通知",
];

export default function LoginPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="relative px-6 pb-20 pt-28 md:px-16 lg:px-24">
        <span
          className="pointer-events-none absolute right-2 top-28 hidden select-none xl:block"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            fontSize: "clamp(56px,7vw,104px)",
            letterSpacing: "0.12em",
          }}
          aria-hidden
        >
          MEMBER
        </span>

        <div className="grid min-h-[calc(100svh-9rem)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <section>
            <Reveal from="translateY(16px)">
              <nav className="text-[12px] tracking-wider text-neutral-500">
                <Link href="/" className="hover:opacity-60">Top</Link>
                <span className="mx-2">/</span>
                <span className="text-neutral-800">Login</span>
              </nav>
              <p className="mt-10 text-[12px] tracking-[0.35em] text-neutral-400">ACCOUNT</p>
              <h1 className="mt-5 text-3xl tracking-[0.3em] md:text-5xl">LOGIN</h1>
              <p className="mt-7 max-w-md text-[14px] leading-8 text-neutral-600">
                VERMILLION の物語を、あなたの手元に残しておくための場所。
                Wishlist や Cart を保存し、気になるしるしをいつでも見返せます。
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-12 hidden max-w-md border-t border-neutral-300 pt-8 md:block">
                <p className="text-[11px] tracking-[0.3em] text-neutral-400">MEMBER SERVICE</p>
                <ul className="mt-5 space-y-4 text-[13px] leading-7 text-neutral-600">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span style={{ color: RED }}>+</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>

          <section className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
            <Reveal delay={120} className="hidden md:block">
              <CurtainImage
                src={u("photo-1518075927137-c76d63928cb8", 1000)}
                alt=""
                ratio="3/4"
              />
            </Reveal>

            <Reveal delay={240}>
              <div className="border-t border-neutral-900 pt-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[12px] tracking-[0.35em]" style={{ color: RED }}>
                      SIGN IN
                    </p>
                    <h2 className="mt-3 text-xl tracking-[0.2em]">MEMBER LOGIN</h2>
                  </div>
                  <Logo className="h-11 w-9 shrink-0" />
                </div>

                <form className="mt-9 space-y-7">
                  <label className="block">
                    <span className="text-[12px] tracking-[0.24em] text-neutral-500">EMAIL</span>
                    <input
                      type="email"
                      autoComplete="email"
                      className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-neutral-900"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[12px] tracking-[0.24em] text-neutral-500">PASSWORD</span>
                    <input
                      type="password"
                      autoComplete="current-password"
                      className="mt-3 w-full border-b border-neutral-300 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-neutral-900"
                    />
                  </label>

                  <div className="flex flex-wrap items-center justify-between gap-4 text-[12px] tracking-wider text-neutral-500">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#b0301c]" />
                      ログイン状態を保持
                    </label>
                    <Link href="#" className="hover:opacity-60">パスワードをお忘れの方</Link>
                  </div>

                  <button
                    type="button"
                    className="w-full py-4 text-[13px] tracking-[0.32em] text-white transition-opacity hover:opacity-85"
                    style={{ background: RED }}
                  >
                    LOGIN
                  </button>
                </form>

                <div className="mt-9 border-t border-neutral-300 pt-8">
                  <p className="text-[13px] leading-7 text-neutral-600">
                    はじめてご利用の方は、会員登録へお進みください。
                  </p>
                  <Link
                    href="#"
                    className="mt-5 inline-flex min-h-12 items-center border border-neutral-900 px-7 text-[12px] tracking-[0.28em] transition-colors hover:bg-neutral-900 hover:text-white"
                  >
                    CREATE ACCOUNT
                  </Link>
                </div>

                <div className="mt-12 flex flex-col items-start" style={{ color: RED }} aria-hidden>
                  <Wordmark className="text-2xl" />
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
