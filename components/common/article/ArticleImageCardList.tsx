import ArticleImageCardRow from "./ArticleImageCardRow";

interface ArticleImageCardListProps {
  extension: boolean;
}

const ArticleImageCardList = ({ extension }: ArticleImageCardListProps) => {
  return (
    // Article List
    <div className={"flex flex-col"}>
      {/* Article List Row */}
      <ArticleImageCardRow />
      {extension && (
        <>
          <div className={"mt-28"} />
          <ArticleImageCardRow />
          <div className={"mt-28"} />
          <ArticleImageCardRow />
          <div className={"mt-28"} />
          <ArticleImageCardRow />
        </>
      )}
      {/*<div className={"w-full flex flex-row"}>*/}
      {/*  <ArticleImageCard />*/}
      {/*  <div className={"mx-6"} />*/}
      {/*  <ArticleImageCard />*/}
      {/*  <div className={"mx-6"} />*/}
      {/*  <ArticleImageCard />*/}
      {/*</div>*/}
    </div>
  );
};

export default ArticleImageCardList;
