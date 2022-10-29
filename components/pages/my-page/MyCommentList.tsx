import MyCommentRow from "./MyCommentRow";
import EmptyList from "./EmptyList";

interface MyCommentListProps {
  isEmpty: boolean;
}

const MyCommentList = ({ isEmpty }: MyCommentListProps) => {
  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {isEmpty ? "내 댓글" : "총 99개의 댓글"}
        </div>
      </div>
      {isEmpty ? (
        <EmptyList
          imageFileName={"empty_comment_list"}
          comment={"작성된 댓글이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div className={"flex flex-col"}>
            {/* Article List Row */}
            <MyCommentRow />
            <div className={"mt-[72px]"} />
            <MyCommentRow />
            <div className={"mt-[72px]"} />
            <MyCommentRow />
            <div className={"mt-[72px]"} />
            <MyCommentRow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCommentList;
