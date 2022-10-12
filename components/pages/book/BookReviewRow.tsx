import BookReviewCard from "./BookReviewCard";

const BookReviewRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <BookReviewCard />
      <div className={"mx-3"} />
      <BookReviewCard />
    </div>
  );
};

export default BookReviewRow;
