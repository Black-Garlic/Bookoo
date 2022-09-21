import MyReviewRow from "./MyReviewRow";
import EmptyList from "./EmptyList";

interface MyReviewListProps {
  isEmpty: boolean;
}

const MyReviewList = ({ isEmpty }: MyReviewListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-white"}>
        <div className={"flex-1 text-2xl"}>
          {isEmpty ? "내 서평" : "총 99개의 서평"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList comment={"작성한 서평이 없어요"} />
      ) : (
        <div className={"mt-12"}>
          <div className={"flex flex-col"}>
            {/* Review List Row */}
            <MyReviewRow />
            <div className={"mt-28"} />
            <MyReviewRow />
            <div className={"mt-28"} />
            <MyReviewRow />
            <div className={"mt-28"} />
            <MyReviewRow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviewList;
