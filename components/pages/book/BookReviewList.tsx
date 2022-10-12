import BookReviewRow from "./BookReviewRow";

const BookReviewList = () => {
  return (
    <div className={"w-full h-auth flex flex-col"}>
      <BookReviewRow />
      <div className={"mt-8"} />
      <BookReviewRow />
      <div className={"mt-8"} />
      <BookReviewRow />
      <div className={"mt-8"} />
      <BookReviewRow />
    </div>
  );
};

export default BookReviewList;
