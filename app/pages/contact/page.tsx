"use client";

import { useState } from "react";
import { RED, Reveal } from "../../components/chrome";
import { StaticPage } from "../../components/static-page";

const subjects = [
  "商品について",
  "ご注文・配送について",
  "返品・交換について",
  "修理・アフターケアについて",
  "その他",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <StaticPage
      sideLabel="CONTACT"
      eyebrow="CUSTOMER SERVICE"
      title="CONTACT"
      breadcrumb="Contact"
      lead="商品やご注文についてのお問い合わせは、下記フォームよりお送りください。3営業日以内にメールにてご返信いたします。"
    >
      {sent ? (
        <Reveal>
          <div className="border border-neutral-300 px-8 py-14 text-center">
            <p className="text-[15px] tracking-[0.2em]" style={{ color: RED }}>
              送信が完了しました
            </p>
            <p className="mt-5 text-[13px] leading-8 text-neutral-600">
              お問い合わせありがとうございます。
              <br />
              確認メールをお送りしましたので、届かない場合は迷惑メールフォルダをご確認ください。
            </p>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={100}>
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <label className="block">
                <span className="text-[12px] tracking-[0.25em] text-neutral-500">
                  お名前 <span style={{ color: RED }}>*</span>
                </span>
                <input
                  required
                  type="text"
                  autoComplete="name"
                  className="mt-3 w-full border border-neutral-300 bg-white px-4 py-3 text-[14px] tracking-wider outline-none transition-colors focus:border-neutral-900"
                />
              </label>
              <label className="block">
                <span className="text-[12px] tracking-[0.25em] text-neutral-500">
                  メールアドレス <span style={{ color: RED }}>*</span>
                </span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-3 w-full border border-neutral-300 bg-white px-4 py-3 text-[14px] tracking-wider outline-none transition-colors focus:border-neutral-900"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[12px] tracking-[0.25em] text-neutral-500">
                お問い合わせ種別 <span style={{ color: RED }}>*</span>
              </span>
              <select
                required
                defaultValue=""
                className="mt-3 w-full border border-neutral-300 bg-white px-4 py-3 text-[14px] tracking-wider outline-none transition-colors focus:border-neutral-900"
              >
                <option value="" disabled>
                  選択してください
                </option>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[12px] tracking-[0.25em] text-neutral-500">
                ご注文番号(任意)
              </span>
              <input
                type="text"
                placeholder="例: SG-12345"
                className="mt-3 w-full border border-neutral-300 bg-white px-4 py-3 text-[14px] tracking-wider outline-none transition-colors focus:border-neutral-900"
              />
            </label>

            <label className="block">
              <span className="text-[12px] tracking-[0.25em] text-neutral-500">
                お問い合わせ内容 <span style={{ color: RED }}>*</span>
              </span>
              <textarea
                required
                rows={7}
                className="mt-3 w-full resize-y border border-neutral-300 bg-white px-4 py-3 text-[14px] leading-7 tracking-wider outline-none transition-colors focus:border-neutral-900"
              />
            </label>

            <p className="text-[12px] leading-7 text-neutral-500">
              ご入力いただいた個人情報は、お問い合わせへの対応のためにのみ利用します。詳しくは
              <a href="/pages/privacy-policy" className="underline hover:opacity-60">
                プライバシーポリシー
              </a>
              をご覧ください。
            </p>

            <button
              type="submit"
              className="w-full py-4 text-[13px] tracking-[0.3em] text-white transition-opacity hover:opacity-80 md:w-72"
              style={{ background: RED }}
            >
              送信する
            </button>
          </form>
        </Reveal>
      )}
    </StaticPage>
  );
}
