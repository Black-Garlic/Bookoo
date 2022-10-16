import MyArticleRow from "./MyArticleRow";
import EmptyList from "./EmptyList";

interface MyArticleListProps {
  isEmpty: boolean;
}

const MyArticleList = ({ isEmpty }: MyArticleListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {isEmpty ? "내 서평" : "총 99개의 서평"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList comment={"작성한 서평이 없어요"} />
      ) : (
        <div className={"mt-12"}>
          <div className={"flex flex-col"}>
            {/* Article List Row */}
            <MyArticleRow />
            <div className={"mt-28"} />
            <MyArticleRow />
            <div className={"mt-28"} />
            <MyArticleRow />
            <div className={"mt-28"} />
            <MyArticleRow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticleList;
