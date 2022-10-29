import MyFavoriteRow from "./MyFavoriteRow";
import EmptyList from "./EmptyList";

interface MyFavoriteListProps {
  isEmpty: boolean;
}

const MyFavoriteList = ({ isEmpty }: MyFavoriteListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {isEmpty ? "내가 좋아하는 서평" : "총 99개의 서평"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList
          imageFileName={"empty_book_list"}
          comment={"좋아하는 서평이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div className={"flex flex-col"}>
            {/* Article List Row */}
            <MyFavoriteRow />
            <div className={"mt-28"} />
            <MyFavoriteRow />
            <div className={"mt-28"} />
            <MyFavoriteRow />
            <div className={"mt-28"} />
            <MyFavoriteRow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFavoriteList;
