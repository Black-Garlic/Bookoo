import { BookUnitResponseData } from "../../../typings/Books";
import Link from "next/link";
import { useRouter } from "next/router";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";

interface BookInfo {
  bookInfo: BookUnitResponseData;
  select?: boolean;
  selectBook?: Function;
}

const MyBookUnit = ({ bookInfo, select, selectBook }: BookInfo) => {
  const router = useRouter();
  const [popup, setPopup] = useRecoilState(popupState);

  const clickBookData = () => {
    if (select && selectBook) {
      selectBook(bookInfo);
    } else {
      router.push(`/search/${bookInfo?.isbn}`);
      RecoilUtils.toggleModal("mypage", popup, setPopup);
    }
  };

  return (
    // book Simple Info Card
    <div onClick={clickBookData} className={"cursor-pointer h-auto"}>
      <div className={"w-full h-auto flex justify-center items-center"}>
        <div className={"w-[12rem] h-auto flex flex-col gap-2 items-center"}>
          {/*{bookInfo?.article == undefined && (*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "w-auto h-auto px-4 py-0 body-1 text-text-1 absolute bg-primary -rotate-[24.57deg] -translate-x-7"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    서평 미작성*/}
          {/*  </div>*/}
          {/*)}*/}
          {/* book Image */}
          <div className={"w-[130px] h-[200px] place-self-center"}>
            <img
              className={"w-[130px] h-[200px] object-fill"}
              src={bookInfo?.image ? bookInfo.image : "./svg/empty_book.svg"}
            />
          </div>
          {/* book Simple Info Center */}
          <div
            className={
              "w-[230px] flex-1 flex flex-col items-center justify-center "
            }
          >
            <div className={"w-auto flex flex-col"}>
              {/* book Title */}
              <div
                className={
                  "max-w-[150px] body-4 text-text-1 text-right self-center truncate"
                }
              >
                {bookInfo?.title}
              </div>
              {/* book Writer */}
              <div
                className={
                  "max-w-[75px] caption-3 self-center text-sm text-text-1 text-left truncate"
                }
              >
                {bookInfo?.author}
              </div>
              <div className={"flex-1 caption-3 text-text-1 text-center"}>
                4.7
              </div>
            </div>
            {/* book Score */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookUnit;
