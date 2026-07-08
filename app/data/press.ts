export type PressTag = "MAGAZINE" | "WEB" | "INTERVIEW";

export type PressEntry = {
  slug: string;
  media: string;
  issue: string;
  tag: PressTag;
  text: string;
  body: string[];
};

export const pressEntries: PressEntry[] = [
  {
    slug: "muse-magazine-2026-07",
    media: "MUSE MAGAZINE",
    issue: "2026年7月号",
    tag: "MAGAZINE",
    text: "特集「星を纏う」にて Zodiac イヤーカフが紹介されました",
    body: [
      "ファッション誌 MUSE MAGAZINE 2026年7月号の特集「星を纏う」にて、signifier の Zodiac イヤーカフが紹介されました。",
      "夜空の物語を身につけるジュエリーとして、星座モチーフのフォルムとシルバーの質感が、6ページにわたるエディトリアルで紹介されています。",
      "誌面では、黒のテーラードスタイルとのレイヤードも提案。ジュエリーが輪郭を静かに支える装いの可能性を、ぜひご覧ください。",
    ],
  },
  {
    slug: "lune-vol-48",
    media: "LUNE",
    issue: "vol.48",
    tag: "MAGAZINE",
    text: "連載コラム内で Cosmic Gem リングが掲載されました",
    body: [
      "カルチャーマガジン LUNE vol.48 の連載コラム「しるしの考古学」にて、Cosmic Gem リングが掲載されました。",
      "護符としてのジュエリーの歴史をたどるコラムの中で、現代の signifier がどのように意味を翻訳しているかが紹介されています。",
    ],
  },
  {
    slug: "orbit-web-2026-05",
    media: "ORBIT WEB",
    issue: "2026.05",
    tag: "WEB",
    text: "デザイナーインタビューが公開されました",
    body: [
      "ファッションウェブメディア ORBIT WEB にて、signifier デザイナーによるインタビュー記事が公開されました。",
      "ブランド名の由来である朱色、黒を軸にしたものづくり、そして「わたしを、わたしとして生きるためのジュエリー」という哲学について語っています。",
      "オンラインでのみご覧いただける、フルバージョンのインタビューです。",
    ],
  },
  {
    slug: "vogue-japan-2026-03",
    media: "VOGUE JAPAN",
    issue: "2026年3月号",
    tag: "MAGAZINE",
    text: "ジュエリーガイドに Cosmic Gem リングが選出されました",
    body: [
      "VOGUE JAPAN 2026年3月号のジュエリーガイドにて、Cosmic Gem リングが「今季纏うべきリング」として選出されました。",
      "ミニマルなフォルムと、指先に宿る小さな光の表情が評価されています。",
    ],
  },
  {
    slug: "signifier-designer-talk-2026-02",
    media: "SIGNIFIER SALON",
    issue: "2026.02",
    tag: "INTERVIEW",
    text: "表参道サロンにてトークイベントを開催しました",
    body: [
      "表参道サロンにて、「黒を纏う、しるしを纏う」をテーマにしたトークイベントを開催しました。",
      "アパレルとジュエリーの境界を越えた装いの提案、参加者との対話を通じて、signifier の世界観を共有する時間となりました。",
      "次回の開催については、News にてお知らせいたします。",
    ],
  },
  {
    slug: "fashion-press-web-2025-12",
    media: "FASHION PRESS",
    issue: "2025.12",
    tag: "WEB",
    text: "2025年 ベストジュエリーに Zodiac コレクションが選ばれました",
    body: [
      "FASHION PRESS の年間ベストジュエリー特集にて、Zodiac コレクションが「星座を身につける新しい形」として紹介されました。",
      "イヤーカフとリングの2way仕様、星座ごとのモチーフ設計が高く評価されています。",
    ],
  },
];

export const pressTags: Array<PressTag | "ALL"> = ["ALL", "MAGAZINE", "WEB", "INTERVIEW"];

export function pressHref(slug: string) {
  return `/pages/press/${slug}`;
}

export function getPressBySlug(slug: string) {
  return pressEntries.find((entry) => entry.slug === slug);
}

export function getAdjacentPress(slug: string) {
  const index = pressEntries.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: pressEntries[index + 1],
    next: pressEntries[index - 1],
  };
}
