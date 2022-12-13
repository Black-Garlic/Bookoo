import EmptyList from "./EmptyList";
import React, { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import ArticleCard from "./ArticleCard";
import { Article } from "../../../typings/Article";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";

const MyArticleList = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [articleList, setArticleList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  /**
   * 나의 서평 리스트
   */
  const getMyArticleList = async () => {
    setLoading(false);
    await ArticleService.getArticleList(userInfo.id)
      .then((res) => {
        setLoading(true);
        setArticleList(res);
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
          {articleList.length === 0
            ? "내 서평"
            : `총 ${articleList.length}개의 서평`}
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
      ) : articleList.length === 0 ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"작성된 서평이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div
            className={
              // "w-full flex flex-row justify-start flex-wrap gap-x-8 gap-y-12"
              "w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-16"
            }
          >
            {articleList &&
              articleList.length > 0 &&
              articleList.map((element, index) => {
                if (element !== null)
                  return (
                    <ArticleCard key={index} like={false} info={element} />
                  );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticleList;
