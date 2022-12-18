import BookArticleRow from "./BookArticleRow";
import React, { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import BookArticleCard from "./BookArticleCard";

interface BookArticleListProps {
  bookId: number;
}

const BookArticleList = ({ bookId }: BookArticleListProps) => {
  const [otherArticles, setOtherArticles] = useState([]);
  useEffect(() => {
    getOtherArticle(bookId);
  }, [bookId]);
  // const getArticleList = async () => {
  //   const res = await ArticleService.getArticleList();
  //     setArticleList(res);
  // };

  const getOtherArticle = async (bookId: number) => {
    const res = await ArticleService.getOtherArticles(bookId);
    setOtherArticles(res);
  };

  return (
    <div className={"w-full h-full flex flex-col"}>
      {otherArticles && otherArticles.length === 0 ? (
        <div className={"flex flex-wrap"}>
          {otherArticles.map((element: any, index) => {
            return (
              <BookArticleCard
                type={"book"}
                key={element.articleId}
                articleInfo={element}
              />
            );
          })}
        </div>
      ) : (
        // <>
        //   <BookArticleRow />
        //   <div className={"mt-8"} />
        //   <BookArticleRow />
        //   <div className={"mt-8"} />
        //   <BookArticleRow />
        //   <div className={"mt-8"} />
        //   <BookArticleRow />
        // </>
        <div className={"text-white font-bold pl-3 text-3xl h-[20rem]"}>
          <div className={"h-full flex flex-col items-center justify-center"}>
            <div className={"w-[80px] h-[80px] self-center mb-4"}>
              <img src={"/svg/empty_book_list.svg"} alt={"Empty"} />
            </div>
            <div
              className={"w-full h-auto caption-1 text-text-1 text-center mt-5"}
            >
              다른 사람의 서평이 없어요
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookArticleList;
