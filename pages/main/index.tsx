import type { NextPage } from "next";
import ArticleImageCardList from "../../components/common/article/ArticleImageCardList";
import React, { useEffect, useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";
import { BookUnitResponseData, GetBookListRequest } from "../../typings/Books";
import { BookService } from "../../services/BookService";
import ArticleImageCard from "../../components/common/article/ArticleImageCard";
import cn from "classnames";

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
      {/*<BookImageCardList />*/}
    </div>
  );
};

export default Home;
