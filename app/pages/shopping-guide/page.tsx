"use client";

import { Article, StaticPage } from "../../components/static-page";

export default function ShoppingGuide() {
  return (
    <StaticPage
      sideLabel="GUIDE"
      eyebrow="CUSTOMER SERVICE"
      title="SHOPPING GUIDE"
      breadcrumb="Shopping Guide"
      lead="ご注文からお届けまでの流れと、お支払い・配送・返品交換についてのご案内です。"
    >
      <Article title="01. ご注文について">
        <p>
          商品ページよりサイズ・オプションをお選びのうえ、カートからご注文手続きへお進みください。ご注文確定後、確認メールを自動送信いたします。
        </p>
        <p>
          受注生産のアイテムは、ご注文後のキャンセル・内容変更を承ることができません。あらかじめご了承ください。
        </p>
      </Article>

      <Article title="02. お支払い方法" delay={80}>
        <p>以下のお支払い方法をご利用いただけます。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>クレジットカード(VISA / Mastercard / JCB / AMEX)</li>
          <li>コンビニ決済(前払い)</li>
          <li>銀行振込(前払い・振込手数料はお客様負担)</li>
          <li>スマートフォン決済(各種Pay)</li>
        </ul>
      </Article>

      <Article title="03. 配送・送料" delay={120}>
        <p>
          在庫のある商品はご注文確定から3営業日以内に発送いたします。受注生産品は各商品ページ記載の納期をご確認ください。
        </p>
        <p>
          送料は全国一律 ¥770(税込)。¥11,000(税込)以上のご注文で送料無料となります。配送日時のご指定も承ります。
        </p>
      </Article>

      <Article title="04. ラッピング" delay={160}>
        <p>
          ギフトボックス(¥550)、ショッピングバッグ(¥220)をご用意しています。ご注文時のオプションでお選びください。
        </p>
      </Article>

      <Article title="05. 返品・交換" delay={200}>
        <p>
          商品到着後7日以内に、未使用の状態に限り返品・交換を承ります。まずはコンタクトフォームよりご連絡ください。
        </p>
        <p>
          お客様都合による返品の送料はお客様負担となります。不良品・誤配送の場合は当方負担にて速やかに対応いたします。なお、受注生産品・カスタマイズ品は返品対象外です。
        </p>
      </Article>
    </StaticPage>
  );
}
