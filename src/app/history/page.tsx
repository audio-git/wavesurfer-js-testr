import { twMerge } from "tailwind-merge";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import Page from "@/ui/Page";
import ThemeToggle from "../components/ThemeToggle";
import ReviewList, { ReviewItem } from "../components/Review/ReviewList";

enum ReviewType {
  LIKE = "LIKE",
  FIX = "FIX",
}

interface WaveInfo {
  id: number;
  url: string;
  type: ReviewType;
  username: string;
  title: string;
  // ...
}

const ICONS = {
  [ReviewType.FIX]: "✍",
  [ReviewType.LIKE]: "👍",
};

const MOCKS: Array<ReviewItem> = [
  {
    id: 1,
    url: "/sound/sample-15s.mp3",
    type: ReviewType.FIX,
    username: "한동진",
    title: "볼륨 조금만 줄여주세요!",
    createDateTime: "12월 29일",
  },
  {
    id: 2,
    url: "/sound/sample-15s.mp3",
    type: ReviewType.LIKE,
    username: "표현영",
    title: "질감이 너무 좋아요!",
    createDateTime: "12월 28일",
  },
  {
    id: 3,
    url: "/sound/sample-15s.mp3",
    type: ReviewType.FIX,
    username: "한동진",
    title: "베이스 소리가 잘 안들리는 것 같아요..!",
    createDateTime: "12월 28일",
  },
  {
    id: 4,
    url: "/sound/sample-15s.mp3",
    type: ReviewType.LIKE,
    username: "한동진",
    title: "미쳤다..",
    createDateTime: "12월 27일",
  },
  {
    id: 5,
    url: "/sound/sample-15s.mp3",
    type: ReviewType.LIKE,
    username: "표현영",
    title: "이런 느낌 좋은 것 같습니다!",
    createDateTime: "12월 25일",
  },
];

export default function History() {
  return (
    <Page.Container>
      <Page.Header className="surface ">
        <div className="flex items-center gap-6 on-surface">
          <article className="text-xs">
            <FaArrowLeft />
          </article>
          <h1 className="font-bold">AAAA 음원본</h1>
        </div>

        <ThemeToggle />
      </Page.Header>
      <Page.Body>
        <nav className="w-full surface border-b dark:border-neutral-500">
          <ul className="w-full flex items-center justify-around">
            <a href="#new" className={twMerge("py-2 font-semibold touch-none", "af")}>
              신규
            </a>
            <a href="#end" className="py-2 font-semibold">
              완료
            </a>
          </ul>
        </nav>

        <section className="w-full h-full overflow-y-auto scroll-smooth flex flex-col gap-y-8 p-4 surface">
          <div className="w-full">
            <h2 id="new" className="text-neutral-500 font-bold mb-3 px-2">
              신규
            </h2>
            <ReviewList reviews={MOCKS} />
          </div>

          <div className="w-full">
            <h2 id="end" className="text-neutral-500 font-bold mb-3 px-2">
              완료
            </h2>
            <ReviewList reviews={MOCKS} />
          </div>

          <div className="w-full">
            <h2 className="text-neutral-500 font-bold mb-3 px-2">완료</h2>
            <ReviewList reviews={MOCKS} />
          </div>
        </section>
      </Page.Body>
    </Page.Container>
  );
}
