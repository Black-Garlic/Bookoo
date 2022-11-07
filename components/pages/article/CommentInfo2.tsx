import React, { useRef, useState } from "react";
import {
  AddReplyRequestData,
  ReplyUnitResponseData,
} from "../../../typings/Reply";
import { ReplyService } from "../../../services/ReplyService";
import CommentCard from "./CommentCard";

interface CommentInfo2Props {
  info: any;
  level: number;
  setRefresh: Function;
  toggleUpdateMode: Function;
  replyList: ReplyUnitResponseData[];
}

const CommentInfo2 = ({
  info,
  level,
  setRefresh,
  toggleUpdateMode,
  replyList,
}: CommentInfo2Props) => {
  const [replyText, setReplyText] = useState("");

  const deleteReply = async () => {
    const res = await ReplyService.deleteReply(info.replyId);
    setRefresh(new Date());
  };

  return (
    <div className={"w-full h-auto pl-12 py-8 mt-4  flex flex-col"}>
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
        </div>
        <div className={"flex-1"} />
        <div className={"flex flex-row"}>
          <div
            className={"mr-3 cursor-pointer"}
            onClick={() => toggleUpdateMode()}
          >
            수정
          </div>
          <div className={"cursor-pointer"} onClick={() => deleteReply()}>
            삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInfo2;
