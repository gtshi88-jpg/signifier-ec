"use client";

import { Reveal } from "../../components/chrome";
import { StaticPage } from "../../components/static-page";

const rows = [
  { label: "販売業者", value: "signifier(シニフィアン)" },
  { label: "運営責任者", value: "signifier 運営担当(ダミー表記)" },
  { label: "所在地", value: "〒000-0000 東京都渋谷区(架空の住所です。ご請求があれば遅滞なく開示します)" },
  { label: "お問い合わせ", value: "コンタクトフォームよりご連絡ください。電話番号はご請求があれば遅滞なく開示します。" },
  { label: "販売価格", value: "各商品ページに税込価格で表示" },
  { label: "商品代金以外の必要料金", value: "送料(全国一律 ¥770、¥11,000 以上のご注文で無料)、コンビニ決済・銀行振込の手数料、ラッピング料金" },
  { label: "お支払い方法", value: "クレジットカード、コンビニ決済、銀行振込、スマートフォン決済" },
  { label: "お支払い時期", value: "クレジットカードはご注文時、前払い決済はご注文から7日以内" },
  { label: "商品の引き渡し時期", value: "在庫品はご注文確定後3営業日以内に発送。受注生産品は各商品ページに記載" },
  { label: "返品・交換", value: "商品到着後7日以内、未使用品に限り承ります。お客様都合の返品送料はお客様負担。受注生産品・カスタマイズ品は返品不可" },
  { label: "動作環境", value: "本サイトは最新のブラウザでの閲覧を推奨します" },
];

export default function Law() {
  return (
    <StaticPage
      sideLabel="LEGAL"
      eyebrow="LEGAL"
      title="特定商取引法に基づく表記"
      breadcrumb="特定商取引法に基づく表記"
    >
      <Reveal delay={100}>
        <dl className="border-t border-neutral-300">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid gap-2 border-b border-neutral-300 py-6 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <dt className="text-[13px] tracking-[0.15em] text-neutral-400">{r.label}</dt>
              <dd className="text-[13.5px] leading-8 text-neutral-700">{r.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </StaticPage>
  );
}
