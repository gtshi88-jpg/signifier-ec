import Image from "next/image";
import Link from "next/link";
import { Footer, Header, Logo, Wordmark } from "./components/chrome";

const BG = "#f2f0ec";
const RED = "#b0301c";

const unsplash = (id: string, w = 1600) =>
  `https://${id.startsWith("premium_") ? "plus" : "images"}.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f2f0ec] text-neutral-900">
      <Header />

      <main className="relative min-h-[100svh] px-6 pb-20 pt-28 md:px-16 lg:px-24">
        <span
          className="pointer-events-none absolute right-2 top-28 hidden select-none xl:block"
          style={{
            color: RED,
            writingMode: "vertical-rl",
            fontSize: "clamp(72px,9vw,136px)",
            letterSpacing: "0.08em",
            opacity: 0.95,
          }}
          aria-hidden
        >
          404
        </span>

        <div className="grid min-h-[calc(100svh-12rem)] items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <section className="relative z-10 max-w-xl">
            <p className="text-[12px] tracking-[0.35em] text-neutral-400">NOT FOUND</p>
            <h1 className="mt-5 text-3xl leading-relaxed tracking-[0.22em] md:text-5xl">
              星のしるしを、
              <br />
              見失いました。
            </h1>
            <div className="mt-8 space-y-5 text-[14px] leading-8 text-neutral-600">
              <p>
                お探しのページは移動したか、現在はご覧いただけないようです。
                VERMILLION のコレクションから、次の物語を見つけてください。
              </p>
            </div>

            <div className="mt-11 flex flex-wrap gap-4 text-[12px] tracking-[0.28em]">
              <Link
                href="/collections/all"
                className="inline-flex min-h-12 items-center border border-[#b0301c] px-7 text-[#b0301c] transition-colors hover:bg-neutral-900 hover:text-white"
              >
                ITEM →
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center border border-neutral-300 px-7 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
              >
                TOP
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-start text-neutral-900" aria-hidden>
              <Logo className="h-12 w-10" />
              <Wordmark className="mt-2 text-2xl" />
            </div>
          </section>

          <section className="relative min-h-[420px] md:min-h-[620px]" aria-label="Vermillion jewelry">
            <div className="absolute bottom-0 left-0 top-12 w-[58%] overflow-hidden md:top-24">
              <Image
                src={unsplash("photo-1601121141461-9d6647bca1ed", 1200)}
                alt=""
                fill
                sizes="(max-width: 768px) 60vw, 36vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute right-0 top-0 w-[58%] overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src={unsplash("photo-1706196739260-1568b1cf4acd", 1200)}
                alt=""
                fill
                sizes="(max-width: 768px) 60vw, 36vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 mix-blend-multiply" style={{ background: `${BG}22` }} />
            </div>
            <div
              className="absolute bottom-8 right-8 hidden border border-white/70 px-5 py-4 text-right text-[11px] tracking-[0.25em] text-white md:block"
              style={{ background: "rgba(25,23,21,.24)" }}
            >
              VERMILLION
              <br />
              LOST SIGN
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
