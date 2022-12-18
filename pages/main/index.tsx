import type { NextPage } from "next";
import ArticleImageCardList from "../../components/common/article/ArticleImageCardList";
import React, { useEffect, useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";
import { BookUnitResponseData, GetBookListRequest } from "../../typings/Books";
import { BookService } from "../../services/BookService";
import ArticleImageCard from "../../components/common/article/ArticleImageCard";
import cn from "classnames";
import { ArticleService } from "../../services/ArticleService";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [popularList, setPopularList] = useState<BookUnitResponseData[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const [mainArticles, setMainArticles] = useState([]);
  const [isMoreArticles, setIsMoreArticles] = useState(false);

  /**
   * progess 필요
   */
  const getBookList = async () => {
    await ArticleService.getPopularArticles().then((res) => {
      setPopularList(res);
    });
  };

  useEffect(() => {
    getBookList();
  }, [isMoreArticles]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getBookList();
    }
  };

  return (
    <div className={"flex flex-col px-40 w-full h-full"}>
      {/* book Search Area */}
      {!isMoreArticles && (
        <div className={"w-full h-36 mt-24"}>
          <div className={"w-8 h-8 mb-5"}>
            <img src={"svg/uil_search-alt.svg"} alt={"search"} />
          </div>
          {/* book Search Bar */}

          <input
            type={"text"}
            className={cn(
              "w-full h-24 title-1 text-text-1 border-white  bg-transparent placeholder-text-2 outline-0 ",
              searchText === "" ? "border-l-2 ml-6" : "pl-12"
            )}
            placeholder={" 도서 검색"}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setSearchText(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                window.location.href = "/search?keyword=" + searchText;
              }
            }}
          />
        </div>
      )}

      <div
        className={
          "transition delay-150 duration-150 " +
          (!isMoreArticles ? "mt-52 mb-12" : "my-12")
        }
      >
        {/* Default Component*/}
        {!isMoreArticles && (
          <div className={"w-full h-5 mb-6 body-1 text-text-2"}>
            실시간 서평
          </div>
        )}
        {/* Article List Area*/}
        <div className={"w-full"}>
          <div
            className={
              "grid gap-y-16 justify-start " +
              (isMoreArticles
                ? "h-auto grid-cols-3"
                : "grid-cols-1 xl:grid-cols-3 h-40 overflow-hidden")
            }
          >
            {popularList.map((element, index) => {
              return <ArticleImageCard key={index} info={element} />;
            })}
          </div>
          {/*<ArticleImageCardList extension={extension} />*/}
        </div>
        {!isMoreArticles && (
          <div
            className={"w-full h-5 mt-14 mb-12 flex flex-row justify-center"}
          >
            <button
              className={"flex flex-row items-center"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMoreArticles(true);
              }}
            >
              <div className={"body-1 text-text-2 text-center"}>더보기</div>
              <div className={"w-6 h-6 ml-1"}>
                <img src={"/svg/uil_arrow-down.svg"} alt={"arrow-down"} />
              </div>
            </button>
          </div>
        )}
      </div>
      {/*<BookImageCardList />*/}
    </div>
  );
};

export default Home;
