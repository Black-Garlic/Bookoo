import BookImageCardList from "../../common/book/BookImageCardList";
import EmptyList from "./EmptyList";
import { BookUnitResponseData } from "../../../typings/Books";
import React, { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import { UserService } from "../../../services/UserService";
import ArticleCard from "./ArticleCard";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import BookImageCard from "../../common/book/BookImageCard";
import MyBookUnit from "./MyBookUnit";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";

interface MyBookListProps {
  isEmpty: boolean;
}

const testData: BookUnitResponseData[] = [{}];

const MyBookList = ({ isEmpty }: MyBookListProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [myBookList, setMyBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  /**
   * 나의 서평 리스트
   */
  const getMyArticleList = async () => {
    setLoading(false);
    await UserService.getMyShelfBook(userInfo.id)
      .then((res) => {
        setLoading(true);
        setMyBookList(res.books);
      })
      .catch((error) => {
        setLoading(true);
      });
  };

  useDidMountEffect(() => {
    getMyArticleList();
  }, []);

  return (
    <div className={"pr-20"}>
      <div className={"w-full h-auto flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {myBookList?.length === 0
            ? "내 책"
            : `총 ${myBookList?.length}개의 서평`}
        </div>
      </div>
      {!loading ? (
        <div
          className={
            " w-full h-96 flex flex-row justify-center title-2 items-center text-white"
          }
        >
          로딩중...
        </div>
      ) : myBookList?.length === 0 ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"등록된 책이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div className={"w-full flex flex-row flex-wrap gap-y-8 gap-x-24 "}>
            {myBookList &&
              myBookList.length > 0 &&
              myBookList.map((element, index) => {
                return <MyBookUnit key={index} bookInfo={element} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookList;
