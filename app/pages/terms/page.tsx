"use client";

import { Article, StaticPage } from "../../components/static-page";

export default function Terms() {
  return (
    <StaticPage
      sideLabel="TERMS"
      eyebrow="LEGAL"
      title="TERMS OF USE"
      breadcrumb="Terms of Use"
      lead="本規約は、signifier(以下「当店」)が運営する本サイトのご利用条件を定めるものです。ご利用の前に必ずお読みください。"
    >
      <Article title="第1条(適用)">
        <p>
          本規約は、本サイトを通じて提供されるすべてのサービスの利用に適用されます。ご注文をもって、本規約に同意いただいたものとみなします。
        </p>
      </Article>

      <Article title="第2条(アカウント)" delay={60}>
        <p>
          会員登録の際は、正確な情報をご登録ください。ログイン情報の管理はお客様ご自身の責任で行うものとし、第三者による不正利用について当店は責任を負いません。
        </p>
      </Article>

      <Article title="第3条(売買契約の成立)" delay={100}>
        <p>
          売買契約は、当店がご注文の確認メールを送信した時点で成立します。在庫状況や決済の承認状況により、ご注文をお受けできない場合があります。
        </p>
      </Article>

      <Article title="第4条(知的財産権)" delay={140}>
        <p>
          本サイトに掲載される文章、写真、ロゴ、デザインその他のコンテンツに関する権利は、当店または正当な権利者に帰属します。権利者の許諾なく複製・転用することを禁じます。
        </p>
      </Article>

      <Article title="第5条(禁止事項)" delay={180}>
        <ul className="list-disc space-y-2 pl-5">
          <li>法令または公序良俗に違反する行為</li>
          <li>転売を目的とした購入行為</li>
          <li>本サイトの運営を妨害する行為</li>
          <li>他のお客様または第三者の権利を侵害する行為</li>
        </ul>
      </Article>

      <Article title="第6条(免責)" delay={220}>
        <p>
          天災、通信障害その他当店の責めに帰さない事由により生じた損害について、当店は責任を負いません。商品の色味は、ご覧の環境により実物と異なって見える場合があります。
        </p>
      </Article>

      <Article title="第7条(規約の変更・準拠法)" delay={260}>
        <p>
          当店は、必要に応じて本規約を変更できるものとします。本規約は日本法に準拠し、本サイトに関する紛争は当店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
        <p className="text-neutral-400">制定日: 2026年1月1日</p>
      </Article>
    </StaticPage>
  );
}
