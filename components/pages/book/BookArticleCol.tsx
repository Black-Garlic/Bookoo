import BookArticleCard from "./BookArticleCard";

const BookArticleCol = () => {
  return (
    <div className={"w-full flex flex-col"}>
      <BookArticleCard />
      <div className={"my-5"} />
      <BookArticleCard />
      <div className={"my-5"} />
      <BookArticleCard />
      <div className={"my-5"} />
      <BookArticleCard />
      <div className={"my-5"} />
      <BookArticleCard />
    </div>
  );
};

export default BookArticleCol;
