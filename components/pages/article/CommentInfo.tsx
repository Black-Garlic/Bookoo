import React, { useRef, useState } from "react";
import {
  AddReplyRequestData,
  ReplyUnitResponseData,
} from "../../../typings/Reply";
import { ReplyService } from "../../../services/ReplyService";
import CommentCard from "./CommentCard";
import CommentCard2 from "./CommentCard2";

interface CommentInfoProps {
  info: any;
  level: number;
  setRefresh: Function;
  toggleUpdateMode: Function;
  replyList: ReplyUnitResponseData[];
  loginCookie: any;
}

const CommentInfo = ({
  info,
  level,
  setRefresh,
  toggleUpdateMode,
  replyList,
  loginCookie,
}: CommentInfoProps) => {
  const [replyText, setReplyText] = useState("");
  const [isOpenReply, setIsOpenReply] = useState(false);

  const createReReply = async () => {
    const addReplyRequest = new AddReplyRequestData();
    addReplyRequest.replyId = info.replyId;
    addReplyRequest.content = replyText;
    addReplyRequest.level = level + 1;
    addReplyRequest.userId = 0;
    addReplyRequest.articleId = info.articleIdOfReply;

    const res = await ReplyService.addReply(addReplyRequest);
    setReplyText("");
    setIsOpenReply(false);
  };

  const deleteReply = async () => {
    const res = await ReplyService.deleteReply(info.replyId);
    setRefresh(new Date());
  };

  return (
    <div
      className={
        "w-full h-auto px-6 py-8 mt-4 border-t border-text-2 flex flex-col"
      }
    >
      <div className={"w-full h-auto sub-title-1 text-text-1 mb-1"}>닉네임</div>
      <div className={"flex-1 body-3 text-text-1 mb-1"}>{info?.content}</div>
      <div className={"w-full h-auto flex flex-row caption-1 text-text-2 mb-4"}>
        <div className={"flex flex-row"}>
          <div className={"mr-3"}>
            {info?.createdAt[0] +
              "/" +
              info?.createdAt[1] +
              "/" +
              info?.createdAt[2]}{" "}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsOpenReply(!isOpenReply)}
          >
            답글 쓰기
          </div>
        </div>
        <div className={"flex-1"} />
        <div className={"flex flex-row"}>
          {loginCookie && (
            <>
              <div
                className={"mr-3 cursor-pointer"}
                onClick={() => toggleUpdateMode()}
              >
                수정
              </div>
              <div className={"cursor-pointer"} onClick={() => deleteReply()}>
                삭제
              </div>
            </>
          )}
        </div>
      </div>
      <div className={"w-full h-auto "}>
        {replyList &&
          replyList.length > 0 &&
          replyList.map((element, index) => {
            if (element.level === 1 && element.reReplyId === info.replyId)
              return (
                <CommentCard2
                  key={index}
                  info={element}
                  level={1}
                  setRefresh={setRefresh}
                  replyList={replyList}
                  loginCookie={loginCookie}
                />
              );
          })}
      </div>

      {isOpenReply && (
        <div
          className={
            "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"
          }
        >
          <div className={"w-full h-auto body-1 text-text-1 opacity-100"}>
            닉네임
          </div>
          <textarea
            className={
              "w-full h-full body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"
            }
            placeholder={"댓글을 남겨보세요!"}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className={"w-full h-auto flex flex-row-reverse"}>
            <button
              className={"caption-1 text-primary"}
              onClick={createReReply}
            >
              제출
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentInfo;
