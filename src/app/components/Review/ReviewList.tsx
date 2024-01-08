import ReviewListItem, { ReviewItem } from "./ReviewListItem";

interface ReviewListProps {
  reviews: ReviewItem[];
  onClickListItem: (item: ReviewItem) => void;
}

export default function ReviewList({
  reviews,
  onClickListItem,
}: ReviewListProps) {
  return (
    <ul className="w-full flex flex-col gap-2">
      {reviews.map((review) => (
        <ReviewListItem
          onClick={onClickListItem}
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
