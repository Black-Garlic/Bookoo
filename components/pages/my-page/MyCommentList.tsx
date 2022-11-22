import EmptyList from "./EmptyList";
import { ReplyService } from "../../../services/ReplyService";
import { useEffect, useState } from "react";
import CommentCard from "../article/CommentCard";
import MyCommentCard from "./MyCommentCard";

const MyCommentList = () => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    getMyCommentList();
    getAllCommentList();
  }, []);

  const getMyCommentList = async () => {
    const res = await ReplyService.getMyReplyList(0);
    console.log("res", res);
    setCommentList(res);
  };

  const getAllCommentList = async () => {
    const res = await ReplyService.getReplyList(10);
    console.log("res", res);
  };

  return (
    <div className={"pr-20"}>
      <div className={"w-full h-9 flex flex-row text-text-1"}>
        <div className={"flex-1 title-3"}>
          {commentList.length === 0
            ? "내 댓글"
            : `총 ${commentList.length}개의 댓글`}
        </div>
      </div>
      {commentList.length === 0 ? (
        <EmptyList
          imageFileName={"empty_comment_list"}
          comment={"작성된 댓글이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div
            className={
              "w-full flex flex-row justify-start flex-wrap gap-x-8 2xl:gap-x-20 gap-y-20"
            }
          >
            {commentList &&
              commentList.length > 0 &&
              commentList.map((element, index) => {
                return (
                  <MyCommentCard
                    key={index}
                    info={element}
                    newComment={false}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCommentList;
