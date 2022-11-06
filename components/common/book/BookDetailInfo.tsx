import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { BookUnitResponseData } from "../../../typings/Books";

interface BookDetailInfoProps {
  bookInfo: any;
}

const BookDetailInfo = ({ bookInfo }: BookDetailInfoProps) => {
  const [popup, setPopup] = useRecoilState(popupState);

  return (
    <div className={"flex flex-col"}>
      <div className={"w-[130px] h-[200px] mb-8 place-self-center"}>
        <img
          className={"w-full h-full"}
          src={bookInfo?.image ? bookInfo.image : "./svg/empty_book.svg"}
        />
      </div>
      <div className={"title-3 text-text-1 flex-1 mb-1"}>{bookInfo?.title}</div>
      <div className={"w-full h-auto flex flex-col mb-10"}>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>저자</div>
          <div className={"w-auto body-3 text-text-1"}>{bookInfo?.author}</div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>평점</div>
          <div className={"w-auto body-3 text-text-1"}>4.5 (임시)</div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>출판사</div>
          <div className={"w-auto body-3 text-text-1"}>
            {bookInfo?.publisher}
          </div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>출판일</div>
          {bookInfo?.pubdate ? (
            <div className={"w-auto body-3 text-text-1"}>
              {String(bookInfo?.pubdate).slice(0, 4) +
                "." +
                String(bookInfo?.pubdate).slice(4, 6) +
                "." +
                String(bookInfo?.pubdate).slice(6, 8)}
            </div>
          ) : (
            <div className={"w-auto body-3 text-text-1"}>2000.00.00</div>
          )}
        </div>
      </div>
      <button
        className={"w-full h-12 mb-3 body-1 text-text-2 bg-text-3 rounded-lg"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          RecoilUtils.toggleModal("bookScore", popup, setPopup);
        }}
      >
        내 책장에 저장하기
      </button>
      <button
        className={"w-full h-12 body-1 text-text-1 bg-primary rounded-lg"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          //  서평 팝업이면 사용하고, 페이지 이동이면 Link 사용
          // RecoilUtils.toggleModal("bookStar", popup, setPopup);
        }}
      >
        내 서평 보러가기
      </button>
    </div>
  );
};

export default BookDetailInfo;
