import EmptyList from "./EmptyList";
import { ReplyService } from "../../../services/ReplyService";
import React, { useEffect, useState } from "react";
import MyCommentCard from "./MyCommentCard";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";

interface MyCommentListProps {}

const MyCommentList = ({}: MyCommentListProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyCommentList();
  }, []);

  const getMyCommentList = async () => {
    setLoading(false);
    await ReplyService.getMyReplyList(userInfo.id).then((res) => {
      setCommentList(res);
      setLoading(true);
    });
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
      {!loading ? (
        <div
          className={
            "w-full h-[650px] flex flex-row justify-center title-2 items-center text-white"
          }
        >
          <img
            className={"loading"}
            src={"./svg/loading_circle.svg"}
            alt={"loading"}
          />
        </div>
      ) : commentList.length === 0 ? (
        <EmptyList
          imageFileName={"empty_comment_list"}
          comment={"작성된 댓글이 없어요"}
        />
      ) : (
        <div className={"mt-12"}>
          <div
            className={
              "w-full flex flex-row justify-start flex-wrap gap-x-8 2xl:gap-x-20 gap-y-10"
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
