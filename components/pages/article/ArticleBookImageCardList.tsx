import { BookUnitResponseData } from "../../../typings/Books";
import BookImageCard from "../../common/book/BookImageCard";

interface BookImageCardListProps {
  searchList: BookUnitResponseData[];
}

const ArticleBookImageCardList = ({ searchList }: BookImageCardListProps) => {
  return (
    <div
      className={
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-[72px] gap-x-10"
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

export default ArticleBookImageCardList;
