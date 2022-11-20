import type { NextPage } from "next";
import ArticleImageCardList from "../../components/common/article/ArticleImageCardList";
import React, { useEffect, useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";
import { BookUnitResponseData, GetBookListRequest } from "../../typings/Books";
import { BookService } from "../../services/BookService";
import ArticleImageCard from "../../components/common/article/ArticleImageCard";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState<BookUnitResponseData[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setSearchList([]);
  }, [searchText]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter~", searchText);
      getBookList();
    }
  };

  /**
   * progess 필요
   */
  const getBookList = async () => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.keyword = searchText;
    getBookListRequest.display = 10;
    const { data } = await BookService.getBookList(getBookListRequest);
    setSearchList(data);
  };

  return (
    <div className={"flex flex-col px-40 w-full h-full"}>
      {/* book Search Area */}
      <div className={"w-full h-36 mt-24"}>
        <div className={"w-8 h-8 mb-5"}>
          <img src={"svg/uil_search-alt.svg"} alt={"search"} />
        </div>
        {/* book Search Bar */}

        <input
          type={"text"}
          className={
            "w-full h-24 title-1 text-text-1 border-white  bg-transparent placeholder-text-2 outline-0 " +
            (isFocus ? "pl-6" : "border-l-2 ml-6")
          }
          onKeyPress={(e) => onKeyPress(e)}
          placeholder={" 도서 검색"}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setSearchText(e.target.value);
          }}
        />
      </div>

      {searchText === "" ? (
        <div className={"mt-52 mb-12"}>
          {/* Default Component*/}
          {
            <div className={"w-full h-5 mb-6 body-1 text-text-2"}>
              실시간 서평
            </div>
          }
          {/* Article List Area*/}
          <div className={"w-full"}>
            <div
              className={
                "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1 h-40 overflow-hidden"
              }
            >
              {[0, 1, 3].map((element, index) => {
                return <ArticleImageCard key={index} />;
              })}
            </div>
            {/*<ArticleImageCardList extension={extension} />*/}
          </div>
          {
            <div
              className={"w-full h-5 mt-14 mb-12 flex flex-row justify-center"}
            >
              <button
                className={"flex flex-row"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <div className={"body-1 text-text-2 text-center"}>더보기</div>
                <div className={"w-6 h-6 ml-1"}>
                  <img src={"/svg/uil_arrow-down.svg"} alt={"arrow-down"} />
                </div>
              </button>
            </div>
          }
        </div>
      ) : (
        <div className={"mt-36 mb-12"}>
          {searchList && searchList.length > 0 ? (
            <div className={"w-full"}>
              <BookImageCardList extension={true} searchList={searchList} />
            </div>
          ) : (
            <div
              className={
                "w-full text-center h-96 flex flex-col justify-center items-center"
              }
            >
              {/*<div className={"text-white font-bold text-4xl"}>*/}
              {/*  데이터가 없습니다. (임시)*/}
              {/*</div>*/}
              <div className={"flex flex-col items-center"}>
                <img
                  src={"/image/noResult.png"}
                  className={"w-[182px] h-[191.45px] object-fill"}
                />
                <p className={"text-white title-3"}>찾으시는 책이 없어요.</p>
              </div>
            </div>
          )}
        </div>
      )}
      {/*<BookImageCardList />*/}
    </div>
  );
};

export default Home;
