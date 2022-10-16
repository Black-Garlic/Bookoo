import ArticleImageCard from "./ArticleImageCard";

const ArticleImageCardRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <ArticleImageCard />
      <div className={"mx-6"} />
      <ArticleImageCard />
      <div className={"mx-6"} />
      <ArticleImageCard />
    </div>
  );
};

export default ArticleImageCardRow;
