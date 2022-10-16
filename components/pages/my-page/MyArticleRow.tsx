import ArticleCard from "./ArticleCard";

const MyArticleRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <ArticleCard like={false} />
      <div className={"mx-6"} />
      <ArticleCard like={false} />
      <div className={"mx-6"} />
      <ArticleCard like={false} />
    </div>
  );
};

export default MyArticleRow;
