"use client";

import { Article, StaticPage } from "../../components/static-page";

export default function AfterCare() {
  return (
    <StaticPage
      sideLabel="CARE"
      eyebrow="CUSTOMER SERVICE"
      title="AFTER CARE"
      breadcrumb="After Care"
      lead="永くご愛用いただくために。日々のお手入れの方法と、修理・メンテナンスサービスのご案内です。"
    >
      <Article title="01. 日々のお手入れ">
        <p>
          ご着用後は柔らかい布で皮脂や水分をやさしく拭き取り、直射日光を避けて保管してください。シルバー素材は空気に触れると硫化して色が変わるため、チャック付きの袋など密閉できる状態での保管をおすすめします。
        </p>
        <p>
          黒ずみが気になる場合は、市販のシルバー用クロスで磨いてください。石付きのアイテムは研磨剤入りの液体クリーナーのご使用をお避けください。
        </p>
      </Article>

      <Article title="02. 素材ごとのご注意" delay={80}>
        <ul className="list-disc space-y-2 pl-5">
          <li>Silver 925 — 温泉・海水・漂白剤に触れると変色の原因になります。</li>
          <li>Gold Coating — 摩擦でコーティングが薄くなるため、重ね着けの際はご注意ください。</li>
          <li>天然石 — 衝撃や急激な温度変化に弱いものがあります。超音波洗浄はお避けください。</li>
          <li>ウール・コットン製品 — 洗濯表示に従い、初回はドライクリーニングをおすすめします。</li>
        </ul>
      </Article>

      <Article title="03. 修理サービス" delay={120}>
        <p>
          サイズ直し・チェーン交換・石留め直し・磨き直しなどを有償にて承ります(購入から6ヶ月以内の初期不良は無償)。
        </p>
        <p>
          コンタクトフォームより品番とご購入時期、症状をお知らせください。お見積りと納期をご案内いたします。
        </p>
      </Article>

      <Article title="04. 承れない修理" delay={160}>
        <p>
          他社製品の修理、著しい変形・破損があるもの、パーツの製造が終了しているものについては、承れない場合があります。あらかじめご了承ください。
        </p>
      </Article>
    </StaticPage>
  );
}
