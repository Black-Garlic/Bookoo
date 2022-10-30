import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { useState } from "react";
import cn from "classnames";
import ModalLayoutResizeable from "../../common/modal/ModalLayoutResizeable";
import ArticleBookImageCardList from "./ArticleBookImageCardList";

const ArticleBookSearchModal = () => {
  const [searchType, setSearchType] = useState("UnWritten");
  const [popup, setPopup] = useRecoilState(popupState);
  const [searchText, setSearchText] = useState("");
  const [bookDataList, setBookDataList] = useState<any[]>([]);

  return (
    <ModalLayoutResizeable width={"[1060px]"} height={"[700px]"}>
      <div className={"w-[990px] h-auto flex flex-row mb-8"}>
        <div
          className={
            "w-[990px] h-full flex-1 sub-title-1 flex flex-row justify-center"
          }
        >
          <div
            className={cn(
              searchType === "UnWritten" ? "text-text-1" : "text-text-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setSearchType("UnWritten");
            }}
          >
            미작성 도서 보기
          </div>
          <div className={"mx-8"} />
          <div
            className={cn(
              searchType === "SearchAll" ? "text-text-1" : "text-text-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setSearchType("SearchAll");
            }}
          >
            검색하기
          </div>
        </div>
        <button
          className={"w-6 h-6 flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            RecoilUtils.toggleModal("bookSearch", popup, setPopup);
          }}
        >
          <img className={"w-6 h-6 mr-2"} src={"/svg/x-outline.svg"} alt="x" />
        </button>
      </div>
      <div
        className={"w-[990px] h-auto flex flex-row justify-center mb-[72px]"}
      >
        <input
          type={"text"}
          className={
            "w-[404px] h-16 title-3 text-text-1 px-4 bg-text-3 placeholder-text-2 outline-0 rounded-l-lg"
          }
          placeholder={"제목을 입력해보세요"}
          onChange={(e) => {
            const newSearchText = e.target.value;

            setSearchText(newSearchText);

            if (newSearchText.length === 0) {
              setBookDataList([]);
            } else {
              setBookDataList([{ title: "title" }]);
            }
          }}
        />
        <button
          className={
            "w-[70px] h-16 body-1 text-text-1 px-4 rounded-r-lg bg-primary"
          }
        >
          GO
        </button>
      </div>
      <div
        className={
          "w-[990px] h-[500px] flex flex-row overflow-auto overflow-x-hidden"
        }
      >
        {bookDataList.length === 0 ? (
          <div className={"flex-1 flex flex-col justify-center"}>
            <div className={"w-[120px] h-[120px] self-center mb-4"}>
              <img src={"/svg/empty_book_list.svg"} alt={"Empty"} />
            </div>
            <div
              className={"w-full h-auto caption-1 text-text-1 text-center mt-5"}
            >
              저장된 책이 없어요
            </div>
          </div>
        ) : (
          <ArticleBookImageCardList
            searchList={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
          />
        )}
      </div>
    </ModalLayoutResizeable>
  );
};

export default ArticleBookSearchModal;
