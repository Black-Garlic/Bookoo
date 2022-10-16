import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";
import { GetBookListRequest } from "../../typings/Books";
import { BookService } from "../../services/BookService";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    setSearchList([]);
  }, [searchText]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter~", searchText);
      getBookList();
    }
  };

  const getBookList = async () => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.keyword = searchText;
    getBookListRequest.display = 10;
    const { data } = await BookService.getBookList(getBookListRequest);
    console.log("data", data);
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
            "w-full h-24 title-1 text-text-1 border-white border-l-2 pl-6  bg-transparent placeholder-text-2 outline-0"
          }
          onKeyPress={(e) => onKeyPress(e)}
          placeholder={"도서 검색"}
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
            <div className={"w-full h-full text-center"}>
              <div className={"text-white font-bold text-4xl"}>
                데이터가 없습니다. (임시)
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
