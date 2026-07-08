export type NewsTag = "SHOP" | "ITEM" | "INFO";

export type NewsEntry = {
  slug: string;
  date: string;
  tag: NewsTag;
  text: string;
  body: string[];
};

export const newsEntries: NewsEntry[] = [
  {
    slug: "hankyu-umeda-popup-2026",
    date: "2026.06.28",
    tag: "SHOP",
    text: "阪急うめだ本店 POP UP STORE 開催のお知らせ(7/9–7/22)",
    body: [
      "このたび、阪急うめだ本店にて POP UP STORE を開催いたします。Zodiac コレクションを中心に、イヤーカフやリングの新作を実際にお手に取ってご覧いただけます。",
      "会期中は、ジュエリーのスタイリング相談も承ります。お近くにお越しの際は、ぜひお立ち寄りください。",
      "【会期】2026年7月9日(木)–7月22日(水)\n【会場】阪急うめだ本店 2F 特設スペース\n【営業時間】10:00–20:00（最終日は18:00まで）",
    ],
  },
  {
    slug: "zodiac-cancer-2026",
    date: "2026.06.15",
    tag: "ITEM",
    text: "Zodiac コレクションに かに座の新作が加わりました",
    body: [
      "Zodiac コレクションに、かに座をモチーフにしたイヤーカフリングが加わりました。月の満ち欠けを思わせる曲線と、守りの象徴である殻のフォルムを抽象化したシルエットが特徴です。",
      "イヤーカフとしても、リングとしても楽しめる2way仕様。内側に刻まれた星座のしるしが、日々の装いに静かな意味を添えます。",
      "オンラインストアおよび表参道サロンにて、ご覧いただけます。",
    ],
  },
  {
    slug: "summer-shipping-2026",
    date: "2026.05.20",
    tag: "INFO",
    text: "夏季休業期間中の配送スケジュールについて",
    body: [
      "誠に勝手ながら、下記の期間を夏季休業とさせていただきます。休業期間中にいただいたご注文・お問い合わせは、8月19日(火)より順次対応いたします。",
      "【夏季休業期間】2026年8月10日(月)–8月18日(火)\n【最終発送日】2026年8月8日(土) 正午までのご注文分",
      "休業前後は配送が混み合う見込みです。お早めのご注文をおすすめいたします。ご不便をおかけしますが、何卒ご了承ください。",
    ],
  },
  {
    slug: "customize-ring-reopen",
    date: "2026.04.28",
    tag: "ITEM",
    text: "Customize リングのオーダー受付を再開しました",
    body: [
      "Customize リングのオーダー受付を再開いたしました。お好みの文字や記号を刻印し、世界にひとつだけのリングをお作りします。",
      "刻印内容のご相談は、ご注文前にフォームよりお問い合わせください。制作には約3〜4週間をいただいております。",
      "刻印の字体や配置については、サロンスタッフが丁寧にご案内いたします。",
    ],
  },
  {
    slug: "omotesando-hours",
    date: "2026.04.05",
    tag: "SHOP",
    text: "表参道サロン 営業時間変更のお知らせ",
    body: [
      "2026年4月12日(日)より、表参道サロンの営業時間を下記のとおり変更いたします。",
      "【変更後の営業時間】11:00–19:00（定休日: 水曜日）\n【変更前】11:00–20:00（定休日: 水曜日）",
      "ご来店の際は、あらかじめ営業時間をご確認ください。",
    ],
  },
  {
    slug: "2026-ss-online",
    date: "2026.03.18",
    tag: "ITEM",
    text: "2026 SS コレクションのオンライン販売を開始しました",
    body: [
      "2026 SS コレクションのオンライン販売を開始いたしました。軽やかなレイヤードを想定したトップスと、身体のラインを整えるワイドトラウザスを中心に、黒の緊張感を日常へ落とし込むエディットです。",
      "コレクションのルックブックは Gallery ページでもご覧いただけます。ぜひご覧ください。",
    ],
  },
  {
    slug: "site-renewal-2026",
    date: "2026.02.10",
    tag: "INFO",
    text: "サイトリニューアルのお知らせ",
    body: [
      "signifier 公式オンラインストアをリニューアルいたしました。ブランドの世界観をより深くお伝えするため、デザインとナビゲーションを刷新しています。",
      "これまでのご愛顧に心より感謝申し上げます。今後とも signifier をよろしくお願いいたします。",
    ],
  },
  {
    slug: "isetan-shinjuku-popup",
    date: "2026.01.22",
    tag: "SHOP",
    text: "伊勢丹新宿店 POP UP STORE 開催のお知らせ(2/1–2/14)",
    body: [
      "伊勢丹新宿店にて POP UP STORE を開催いたします。Cosmic Gem リングや Zodiac イヤーカフをはじめ、定番アイテムを一堂にご紹介します。",
      "【会期】2026年2月1日(日)–2月14日(土)\n【会場】伊勢丹新宿店 本館 2F ジュエリー売場内",
      "会期限定のラッピングもご用意しております。",
    ],
  },
  {
    slug: "zodiac-sagittarius-2025",
    date: "2025.12.08",
    tag: "ITEM",
    text: "Zodiac コレクションに いて座の新作が加わりました",
    body: [
      "Zodiac コレクションに、いて座をモチーフにしたイヤーカフリングが加わりました。弓を引く手の力強さと、矢の先端に宿る意志を、流れるような一本のラインで表現しています。",
      "遠くを見据える星座の物語を、身につけるジュエリーとしてお届けします。",
    ],
  },
  {
    slug: "year-end-shipping-2025",
    date: "2025.11.15",
    tag: "INFO",
    text: "年末年始の配送スケジュールについて",
    body: [
      "年末年始の配送スケジュールについてお知らせいたします。",
      "【年内最終発送】2025年12月27日(土) 正午までのご注文分\n【年始発送再開】2026年1月6日(火)より順次発送",
      "休業期間中のご注文・お問い合わせは、1月6日以降に順次対応いたします。",
    ],
  },
];

export const newsTags: Array<NewsTag | "ALL"> = ["ALL", "SHOP", "ITEM", "INFO"];

export function newsHref(slug: string) {
  return `/pages/news/${slug}`;
}

export function getNewsBySlug(slug: string) {
  return newsEntries.find((entry) => entry.slug === slug);
}

export function getAdjacentNews(slug: string) {
  const index = newsEntries.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: newsEntries[index + 1],
    next: newsEntries[index - 1],
  };
}
