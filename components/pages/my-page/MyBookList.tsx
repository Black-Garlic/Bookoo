import BookImageCardList from "../../common/book/BookImageCardList";
import EmptyList from "./EmptyList";

interface MyBookListProps {
  isEmpty: boolean;
}

const MyBookList = ({ isEmpty }: MyBookListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {isEmpty ? "내 책장" : "총 99권 읽음"}
        </div>
        <div className={"flex flex-row justify-end"}>
          <button className={"w-6 h-6"}>
            <img src={"/svg/uil_search-alt.svg"} alt={"search"} />
          </button>
          <div className={"w-6 h-6"} />
          <button className={"w-6 h-6"}>
            <img src={"/svg/uil_filter.svg"} alt={"filter"} />
          </button>
        </div>
      </div>
      {isEmpty ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"저장된 책이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <BookImageCardList extension={true} searchList={[]} />
        </div>
      )}
    </div>
  );
};

export default MyBookList;
