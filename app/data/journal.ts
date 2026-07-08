export type JournalTag = "ATELIER" | "MATERIAL" | "COLUMN";

export type JournalEntry = {
  slug: string;
  date: string;
  tag: JournalTag;
  title: string;
  img: string;
  body: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "atelier-black-tailoring",
    date: "2026.06.21",
    tag: "ATELIER",
    title: "アトリエ便り: 黒を仕立てる手",
    img: "/images/fashion/pickup-tailored-jacket.png",
    body: [
      "黒は、光を吸い込む色でもあり、輪郭を研ぎ澄ます色でもあります。アトリエでは、布地が身体に落ちる角度を決めるとき、いつも少しだけ立ち位置を変えて鏡の前に立ちます。",
      "今季のテーラードジャケットは、肩のラインをわずかに下げ、袖丈を長めに取ることで、腕の動きに余白を持たせました。黒一色でも、歩くたびに布が生きる——そんな服を仕立てたいと考えています。",
      "仕立ての最後に、内側へ朱色の糸を一本通す儀式を続けています。目に見えない場所に、いのちの色を忍ばせる。それが signifier のものづくりの習慣です。",
    ],
  },
  {
    slug: "material-wool-gabardine",
    date: "2026.05.30",
    tag: "MATERIAL",
    title: "素材考 — ウールギャバジンの落ち感について",
    img: "/images/fashion/pickup-wide-trousers.png",
    body: [
      "ウールギャバジンは、織り目が斜めに走ることで、自然なドレープと復元力をあわせ持つ素材です。パンツに使うとき、私たちはあえて芯地を控えめにし、腰まわりから脚へと連続するラインを大切にしています。",
      "今季のワイドトラウザスは、歩いたあとに残るわずかなシワさえ、着用の記憶として受け入れる設計です。完璧に整えすぎないこと。それもまた、黒を纏うという営みの一部だと考えています。",
      "素材は、身体とともに古びていく。だからこそ、最初の一着は手触りと落ち感を、じっくり確かめてほしいのです。",
    ],
  },
  {
    slug: "seven-habits-of-signs",
    date: "2026.04.12",
    tag: "COLUMN",
    title: "しるしを纏う、7つの習慣",
    img: "/images/fashion/detail-ring-fingertips.png",
    body: [
      "身につけるものに意味を託すことは、古くから続く人間の営みです。朝、指にリングを通す。耳にカフをはめる。それは装飾ではなく、一日の輪郭をたしかめる小さな儀式でもあります。",
      "一つ目は、鏡の前で一度だけ深呼吸すること。二つ目は、同じジュエリーを毎日ではなく、気分で選び替えること。三つ目は、手入れの時間を短くてもいいから確保すること——。",
      "七つの習慣は、誰かに合わせるためではなく、自分のリズムを見つけるための手引きです。あなただけのしるしを、静かに纏ってください。",
    ],
  },
  {
    slug: "atelier-vermillion-thread",
    date: "2026.03.02",
    tag: "ATELIER",
    title: "アトリエ便り: 朱色の糸を通す理由",
    img: "/images/fashion/detail-cuff-fingers.png",
    body: [
      "ブランド名の由来である朱色は、古くから魔除けの色として鳥居や印章に用いられてきました。私たちは、その色を目に見えない場所へ忍ばせることを、ものづくりの中心に置いています。",
      "ジャケットの裏地、リングの内側、カフの接合部——朱色の糸は、身につける人だけが知る秘密の印です。",
    ],
  },
  {
    slug: "material-silver-aging",
    date: "2026.01.18",
    tag: "MATERIAL",
    title: "素材考 — シルバーの経年変化を楽しむ",
    img: "/images/fashion/detail-ring-fingertips.png",
    body: [
      "signifier のシルバージュエリーは、表面のコーティングを施していません。空気に触れ、肌に触れ、少しずつ色が深まっていく——その過程そのものを、素材の表情として楽しんでいただきたいのです。",
      "黒ずみが気になったら、シルバー用クロスで軽く磨けば、また別の表情に戻ります。完璧な輝きよりも、使い込まれた美しさを。",
    ],
  },
  {
    slug: "column-zodiac-motif",
    date: "2025.12.20",
    tag: "COLUMN",
    title: "星座のモチーフが指先に宿るまで",
    img: "/images/fashion/women-key.png",
    body: [
      "Zodiac コレクションは、夜空の物語を身につけるジュエリーとして生まれました。星座の形をそのまま写すのではなく、神話の一節を抽象化し、指先や耳もとに宿す——それが私たちの翻訳の仕方です。",
      "かに座の殻、いて座の弓、おひつじ座の角。それぞれのモチーフは、纏う人の輪郭を静かに支える護符として仕立てられています。",
    ],
  },
];

export const journalTags: Array<JournalTag | "ALL"> = ["ALL", "ATELIER", "MATERIAL", "COLUMN"];

export function journalHref(slug: string) {
  return `/pages/journal/${slug}`;
}

export function getJournalBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getAdjacentJournal(slug: string) {
  const index = journalEntries.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: journalEntries[index + 1],
    next: journalEntries[index - 1],
  };
}
