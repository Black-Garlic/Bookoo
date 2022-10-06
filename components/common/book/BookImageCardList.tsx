import BookImageCardRow from "./BookImageCardRow";
import BookImageCard from "./BookImageCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BookService } from "../../../services/BookService";
import {
  BookUnitResponseData,
  GetBookListRequest,
} from "../../../typings/Books";
import { debounce } from "lodash";

interface BookImageCardListProps {
  extension: boolean;
  keyword: string;
}

const BookImageCardList = ({ extension, keyword }: BookImageCardListProps) => {
  const [searchList, setSearchList] = useState<BookUnitResponseData[]>([]);

  useEffect(() => {
    if (keyword !== "") searchBookList().then();
  }, [keyword]);

  const searchBookList = async () => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.display = 10;
    getBookListRequest.start = 1;
    getBookListRequest.keyword = keyword;

    // @ts-ignore
    const { data } = await BookService.getBookList(getBookListRequest);
    console.log("result", data);
    setSearchList(data);
  };

  return (
    // Book List Area
    <div className={"flex flex-col w-full h-full"}>
      <div
        className={"grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16"}
      >
        {searchList.length > 0 &&
          searchList.map((element, index) => {
            return <BookImageCard key={index} unit={element} />;
          })}
      </div>
      {searchList.length === 0 && (
        <div
          className={
            "w-full flex-1 text-white font-bold text-5xl justify-center flex "
          }
        >
          데이터가 없습니다.
        </div>
      )}
      {/* book List Row */}
      {/*<BookImageCardRow />*/}
      {/*{extension && (*/}
      {/*  <>*/}
      {/*    <div className={"h-20"} />*/}
      {/*    <BookImageCardRow />*/}
      {/*    <div className={"h-20"} />*/}
      {/*    <BookImageCardRow />*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  );
};

export default BookImageCardList;
