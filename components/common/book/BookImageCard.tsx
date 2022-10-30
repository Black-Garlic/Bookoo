import { BookUnitResponseData } from "../../../typings/Books";
import Link from "next/link";
import { useRouter } from "next/router";

interface BookInfo {
  bookInfo: BookUnitResponseData;
  select?: boolean;
  selectBook?: Function;
}

const BookImageCard = ({ bookInfo, select, selectBook }: BookInfo) => {
  const router = useRouter();

  const clickBookData = () => {
    if (select && selectBook) {
      selectBook(bookInfo);
    } else {
      router.push(`/search/${bookInfo?.isbn}`);
    }
  };
  return (
    // book Simple Info Card
    <div onClick={clickBookData}>
      <div className={"w-full h-[252px] flex justify-center items-center"}>
        <div className={"w-[12rem] h-[252px] flex flex-col gap-2 items-center"}>
          {/* book Image */}
          <div className={"w-[130px] h-[200px] place-self-center"}>
            <img
              className={"w-[130px] h-[200px] object-fill"}
              src={bookInfo?.image}
            />
          </div>
          {/* book Simple Info Center */}
          <div
            className={
              "w-[230px] flex-1 flex flex-col items-center justify-center "
            }
          >
            <div className={"w-auto flex flex-row"}>
              {/* book Title */}
              <div
                className={
                  "max-w-[150px] text-sm body-3 text-text-1 text-right self-center truncate"
                }
              >
                {bookInfo?.title}
              </div>
              <div className={"w-0 h-5 self-center border border-white mx-1"} />
              {/* book Writer */}
              <div
                className={
                  "max-w-[75px] caption-2 self-center text-sm text-text-1 text-left truncate"
                }
              >
                {bookInfo?.author}
              </div>
            </div>
            {/* book Score */}
            <div className={"flex-1 sub-title-1 text-text-1 text-center"}>
              4.7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookImageCard;
