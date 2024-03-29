import MyFavoriteRow from "./MyFavoriteRow";
import EmptyList from "./EmptyList";
import React, { useEffect, useState } from "react";
import { ArticleService } from "../../../services/ArticleService";
import ArticleCard from "./ArticleCard";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";

interface MyFavoriteListProps {}

const MyFavoriteList = ({}: MyFavoriteListProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFavoriteList();
  }, []);

  const getFavoriteList = async () => {
    setLoading(false);
    await ArticleService.getLikeArticles(userInfo.id).then((res) => {
      setFavoriteList(res);
      setLoading(true);
    });
  };

  return (
    <div className={"pr-20"}>
      <div className={"w-full h-auto flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {favoriteList.length === 0
            ? "내가 좋아하는 서평"
            : `총 ${favoriteList.length}개의 서평`}
        </div>
      </div>
      {!loading ? (
        <div
          className={
            "w-full h-[650px] flex flex-row justify-center title-2 items-center text-white"
          }
        >
          <img
            className={"loading"}
            src={"./svg/loading_circle.svg"}
            alt={"loading"}
          />
        </div>
      ) : favoriteList.length === 0 ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"좋아하는 서평이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div
            className={
              // "w-full flex flex-row justify-start flex-wrap gap-x-8 gap-y-12"
              "w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-16"
            }
          >
            {favoriteList &&
              favoriteList.length > 0 &&
              favoriteList.map((element, index) => {
                if (element !== null) {
                  return (
                    <ArticleCard
                      key={index}
                      like={false}
                      // @ts-ignore
                      info={element.article}
                    />
                  );
                }
              })}
          </div>
        </div>
      )}

      {/*{true ? (*/}
      {/*  <EmptyList*/}
      {/*    imageFileName={"empty_book_list"}*/}
      {/*    comment={"좋아하는 서평이 없어요"}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <div className={"mt-12"}>*/}
      {/*    <div className={"flex flex-col"}>*/}
      {/*      /!* Article List Row *!/*/}
      {/*      <MyFavoriteRow />*/}
      {/*      <div className={"mt-28"} />*/}
      {/*      <MyFavoriteRow />*/}
      {/*      <div className={"mt-28"} />*/}
      {/*      <MyFavoriteRow />*/}
      {/*      <div className={"mt-28"} />*/}
      {/*      <MyFavoriteRow />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default MyFavoriteList;
