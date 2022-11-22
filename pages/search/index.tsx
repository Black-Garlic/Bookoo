import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";
import { BookUnitResponseData, GetBookListRequest } from "../../typings/Books";
import { BookService } from "../../services/BookService";
import { useRouter } from "next/router";
import cn from "classnames";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState<BookUnitResponseData[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  const router = useRouter();
  const { keyword } = router.query;

  console.log(keyword);

  useEffect(() => {
    setSearchList([]);
  }, [searchText]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter~", searchText);
      getBookList(searchText);
    }
  };

  /**
   * progess 필요
   */
  const getBookList = async (searchText: string) => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.keyword = searchText;
    getBookListRequest.display = 10;
    const { data } = await BookService.getBookList(getBookListRequest);
    setSearchList(data);
  };

  useEffect(() => {
    if (keyword && typeof keyword === "string") {
      getBookList(keyword);
      setSearchText(keyword);
    }
  }, [keyword, setSearchText]);

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
          onKeyPress={(e) => onKeyPress(e)}
          placeholder={" 도서 검색"}
          value={searchText}
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
        <div className={"mt-52 mb-12"}></div>
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
