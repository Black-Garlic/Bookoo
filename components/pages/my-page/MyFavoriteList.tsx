import MyFavoriteRow from "./MyFavoriteRow";
import EmptyList from "./EmptyList";

interface MyFavoriteListProps {
  isEmpty: boolean;
}

const MyFavoriteList = ({ isEmpty }: MyFavoriteListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-white"}>
        <div className={"flex-1 text-2xl"}>
          {isEmpty ? "내가 좋아하는 서평" : "총 99개의 서평"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList comment={"좋아요를 누른 서평이 없어요"} />
      ) : (
        <div className={"mt-12"}>
          <div className={"flex flex-col"}>
            {/* Review List Row */}
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
