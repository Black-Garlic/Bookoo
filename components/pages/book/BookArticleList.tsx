import BookArticleRow from "./BookArticleRow";
import { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";

interface BookArticleListProps {
  bookId: number;
}

const BookArticleList = ({ bookId }: BookArticleListProps) => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    getArticleList();
  }, [bookId]);
  const getArticleList = async () => {
    // const res = await ArticleService.getArticleList();
    //   setArticleList(res);
  };
  return (
    <div className={"w-full h-auth flex flex-col"}>
      {articleList && articleList.length === 0 ? (
        <>
          <BookArticleRow />
          <div className={"mt-8"} />
          <BookArticleRow />
          <div className={"mt-8"} />
          <BookArticleRow />
          <div className={"mt-8"} />
          <BookArticleRow />
        </>
      ) : (
        <div className={"text-white font-bold pl-3 text-3xl"}>
          서평이 존재하지 않습니다. (임시)
        </div>
      )}
    </div>
  );
};

export default BookArticleList;
