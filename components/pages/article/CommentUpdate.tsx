import React, { useEffect, useRef, useState } from "react";
import { AddReplyRequestData } from "../../../typings/Reply";
import { ReplyService } from "../../../services/ReplyService";

interface CommentInfoProps {
  info: any;
  toggleUpdateMode: Function;
  setRefresh: Function;
}

const CommentUpdate = ({
  info,
  toggleUpdateMode,
  setRefresh,
}: CommentInfoProps) => {
  const textareaRef = useRef(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    if (!info?.content) return;

    setReplyText(info.content);
  }, [info?.content, setReplyText]);

  const updateReply = async () => {
    const updateReplyRequest = new AddReplyRequestData();
    updateReplyRequest.replyId = info?.replyId;
    updateReplyRequest.content = replyText;

    const res = await ReplyService.updateReply(updateReplyRequest);

    toggleUpdateMode();
    setRefresh(new Date());
  };

  return (
    <>
      <div
        className={
          "w-full h-auto py-4 mt-4 border-t border-text-2 flex flex-col"
        }
      >
        <div
          className={
            "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"
          }
        >
          <div className={"w-full h-auto sub-title-1 text-text-1 mb-1"}>
            닉네임
          </div>
          <textarea
            className={
              "w-full h-full body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"
            }
            placeholder={"댓글을 남겨보세요!"}
            value={replyText}
            ref={textareaRef}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className={"w-full h-auto flex flex-row-reverse"}>
            <button
              className={"caption-1 text-primary"}
              onClick={() => updateReply()}
            >
              수정
            </button>
            <div
              className={"mr-3 cursor-pointer caption-1 text-text-2"}
              onClick={() => toggleUpdateMode()}
            >
              취소
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentUpdate;
