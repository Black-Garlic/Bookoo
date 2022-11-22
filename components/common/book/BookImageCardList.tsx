import BookImageCard from "./BookImageCard";
import { BookUnitResponseData } from "../../../typings/Books";

interface BookImageCardListProps {
  extension: boolean;
  searchList: BookUnitResponseData[];
}

const BookImageCardList = ({
  extension,
  searchList,
}: BookImageCardListProps) => {
  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-24 "
      }
    >
      {searchList &&
        searchList.length > 0 &&
        searchList.map((element, index) => {
          return <BookImageCard key={index} bookInfo={element} />;
        })}
    </div>
  );
};

export default BookImageCardList;
