"use client";

import { Article, StaticPage } from "../../components/static-page";

export default function PrivacyPolicy() {
  return (
    <StaticPage
      sideLabel="PRIVACY"
      eyebrow="LEGAL"
      title="PRIVACY POLICY"
      breadcrumb="Privacy Policy"
      lead="signifier(以下「当店」)は、お客様の個人情報を以下の方針に基づき取り扱います。"
    >
      <Article title="第1条(取得する情報)">
        <p>
          当店は、ご注文・会員登録・お問い合わせの際に、氏名、住所、電話番号、メールアドレス、決済に必要な情報、および購入履歴を取得します。また、サイトの利用状況を把握するため、Cookie 等により閲覧情報を取得することがあります。
        </p>
      </Article>

      <Article title="第2条(利用目的)" delay={60}>
        <ul className="list-disc space-y-2 pl-5">
          <li>ご注文の確認、商品の発送、代金の決済のため</li>
          <li>お問い合わせ・修理依頼への対応のため</li>
          <li>新商品・イベント等のご案内(ご同意いただいた場合)のため</li>
          <li>サービスの改善および不正利用の防止のため</li>
        </ul>
      </Article>

      <Article title="第3条(第三者提供)" delay={100}>
        <p>
          法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。配送業者・決済代行会社など業務委託先への提供は、利用目的の達成に必要な範囲に限ります。
        </p>
      </Article>

      <Article title="第4条(安全管理)" delay={140}>
        <p>
          当店は、個人情報への不正アクセス、紛失、改ざんおよび漏えいを防止するため、適切な安全管理措置を講じます。決済情報は暗号化された通信により送信されます。
        </p>
      </Article>

      <Article title="第5条(開示・訂正・削除)" delay={180}>
        <p>
          ご本人からの個人情報の開示・訂正・利用停止・削除のご請求には、本人確認のうえ速やかに対応します。コンタクトフォームよりご連絡ください。
        </p>
      </Article>

      <Article title="第6条(改定)" delay={220}>
        <p>
          本ポリシーの内容は、法令の改正やサービスの変更に応じて改定することがあります。重要な変更がある場合は、本サイト上でお知らせします。
        </p>
        <p className="text-neutral-400">制定日: 2026年1月1日</p>
      </Article>
    </StaticPage>
  );
}
