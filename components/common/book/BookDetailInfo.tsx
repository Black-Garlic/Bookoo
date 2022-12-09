import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { UserService } from "../../../services/UserService";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useDidMountEffect from "../../../hooks/useDidMountEffect";

interface BookDetailInfoProps {
  bookInfo: any;
  loginCookie: any;
}

const BookDetailInfo = ({ bookInfo, loginCookie }: BookDetailInfoProps) => {
  const router = useRouter();
  const [popup, setPopup] = useRecoilState(popupState);
  const [inMyShelf, setInMyShelf] = useState("DEFAULT"); // DEFAULT(기본), SAVE(내 책장에 저장한 상태), WRITTEN(저장하고 서평까지 쓴 상태)
  const [isSave, setIsSave] = useState(false); // DEFAULT 상태에서 저장했을 떄 (SAVE는 아닌 상태 - UI 변경을 위함)

  useDidMountEffect(() => {
    checkMyShelf();
  }, [bookInfo]);

  const checkMyShelf = async () => {
    console.log("bookInfo", bookInfo);
    // checkShelf 결과에 따라 DEFAULT, SAVE, WRITTEN으로 분류하기
    // if (bookInfo?.isbn) {
    const { data } = await UserService.checkShelf({
      userId: "0",
      bookId: Number(bookInfo.isbn),
    });
    // 경엽님께서 API 수정 (책장 저장 여부, 서평 작성 여부까지 같이 주시면 가능)
    setInMyShelf(data);
    // } else {
    //   alert("책 정보가 없습니다. (API 수정 필요)");
    // }
  };

  const addInMyShelf = async () => {
    await UserService.addShelf({
      userId: "0",
      bookId: Number(bookInfo.isbn),
    }).then((res) => {
      setIsSave(true);
    });
  };

  const deleteInMyShelf = async () => {
    await UserService.deleteShelf({
      userId: "0",
      bookId: Number(bookInfo.isbn),
    }).then((res) => {
      setIsSave(false);
    });
  };

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
      {inMyShelf === "DEFAULT" && (
        <div className={"flex flex-col gap-4"}>
          <button
            className={"w-full h-14 body-1 text-text-1 bg-primary rounded-lg"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              //  서평 팝업이면 사용하고, 페이지 이동이면 Link 사용
              // RecoilUtils.toggleModal("bookStar", popup, setPopup);
              router.push(`/article/write/${bookInfo.isbn}`);
            }}
          >
            서평 쓰기
          </button>
          {isSave ? (
            <button
              className={
                "w-full h-14 body-1 text-text-2 bg-[#75E086] rounded-lg text-white flex flex-row items-center justify-center"
              }
              disabled={true}
            >
              <span className={"flex flex-row items-center gap-2"}>
                <img
                  src={"/image/icon/white_check.png"}
                  className={"h-8 object-cover"}
                />
                책 저장 완료
              </span>
            </button>
          ) : (
            <button
              className={
                "w-full h-14 body-1 text-text-2 bg-text-2 rounded-lg text-white"
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addInMyShelf();
              }}
            >
              내 책장에 저장하기
            </button>
          )}
        </div>
      )}
      {inMyShelf === "SAVE" && (
        <div className={"flex flex-col gap-4"}>
          <button
            className={"w-full h-14 body-1 text-text-1 bg-primary rounded-lg"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              //  서평 팝업이면 사용하고, 페이지 이동이면 Link 사용
              router.push(`/article/write/${bookInfo.isbn}`);
            }}
          >
            서평 쓰기
          </button>

          <button
            className={
              "w-full h-14 body-1 text-text-2 bg-text-2 rounded-lg text-white"
            }
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteInMyShelf();
            }}
          >
            내 책장에서 삭제하기
          </button>
        </div>
      )}
      {inMyShelf === "WRITTEN" && (
        <div className={"flex flex-col gap-4"}>
          <button
            className={
              "w-full h-14 body-1 text-text-2 bg-text-2 rounded-lg text-white"
            }
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteInMyShelf();
            }}
          >
            내 책장에서 삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetailInfo;
