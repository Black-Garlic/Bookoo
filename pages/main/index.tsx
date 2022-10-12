import type { NextPage } from "next";
import ReviewImageCardList from "../../components/common/review/ReviewImageCardList";
import { useState } from "react";
import BookImageCardList from "../../components/common/book/BookImageCardList";

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const [extension, setExtension] = useState(false);

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
          placeholder={"도서 검색"}
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
          {!extension && (
            <div className={"w-full h-5 mb-6 body-1 text-text-2"}>
              실시간 서평
            </div>
          )}
          {/* Review List Area*/}
          <div className={"w-full"}>
            <ReviewImageCardList extension={extension} />
          </div>
          {!extension && (
            <div
              className={"w-full h-5 mt-14 mb-12 flex flex-row justify-center"}
            >
              <button
                className={"flex flex-row"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExtension(true);
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
      ) : (
        <div className={"mt-36 mb-12"}>
          <div className={"w-full"}>
            <BookImageCardList extension={true} />
          </div>
        </div>
      )}
      {/*<BookImageCardList />*/}
    </div>
  );
};

export default Home;
