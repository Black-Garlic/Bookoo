import BookReviewCard from "./BookReviewCard";

const BookReviewCol = () => {
  return (
    <div className={"w-full flex flex-col"}>
      <BookReviewCard />
      <div className={"my-5"} />
      <BookReviewCard />
      <div className={"my-5"} />
      <BookReviewCard />
      <div className={"my-5"} />
      <BookReviewCard />
      <div className={"my-5"} />
      <BookReviewCard />
    </div>
  );
};

export default BookReviewCol;
