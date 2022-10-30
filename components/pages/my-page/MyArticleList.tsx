import MyArticleRow from "./MyArticleRow";
import EmptyList from "./EmptyList";
import { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import ArticleCard from "./ArticleCard";

interface MyArticleListProps {
  isEmpty: boolean;
}

const MyArticleList = ({ isEmpty }: MyArticleListProps) => {
  const [articleList, setArticleList] = useState([]);

  /**
   * 나의 서평 리스트
   */
  const getMyArticleList = async () => {
    const res = await ArticleService.getArticleList(0);
    console.log("data", res);
    setArticleList(res);
  };

  useEffect(() => {
    getMyArticleList();
    getArticelDetail();
  }, []);

  const getArticelDetail = async () => {
    const res = await ArticleService.getArticleDetail({
      articleId: 8,
      userId: 0,
      bookId: 9788960213180,
    });
    console.log("res", res);
  };
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {isEmpty ? "내 서평" : "총 99개의 서평"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"작성된 서평이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div
            className={
              "w-full border border-red-500 flex flex-row justify-start flex-wrap gap-x-8 gap-y-12"
            }
          >
            {articleList &&
              articleList.length > 0 &&
              articleList.map((element, index) => {
                return <ArticleCard key={index} like={false} info={element} />;
              })}

            {/* Article List Row */}
            {/*<MyArticleRow />*/}
            {/*<div className={"mt-28"} />*/}
            {/*<MyArticleRow />*/}
            {/*<div className={"mt-28"} />*/}
            {/*<MyArticleRow />*/}
            {/*<div className={"mt-28"} />*/}
            {/*<MyArticleRow />*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticleList;
