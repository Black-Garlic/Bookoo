import BookArticleCard from "./BookArticleCard";

const BookArticleRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <BookArticleCard />
      <div className={"mx-3"} />
      <BookArticleCard />
    </div>
  );
};

export default BookArticleRow;
