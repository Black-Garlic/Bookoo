import React, { useState } from "react";
import CommentUpdate from "./CommentUpdate";
import CommentInfo from "./CommentInfo";
import { ReplyUnitResponseData } from "../../../typings/Reply";

interface CommentItemProps {
  info: any;
  level: number;
  setRefresh: Function;
  replyList: ReplyUnitResponseData[];
  loginCookie: any;
}

const CommentCard = ({
  info,
  level,
  setRefresh,
  replyList,
  loginCookie,
}: CommentItemProps) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const toggleUpdateMode = () => {
    if (isUpdateMode) {
      setIsUpdateMode(false);
    } else {
      setIsUpdateMode(true);
    }
  };

  return isUpdateMode ? (
    <CommentUpdate
      info={info}
      toggleUpdateMode={toggleUpdateMode}
      setRefresh={setRefresh}
    />
  ) : (
    <CommentInfo
      info={info}
      level={level}
      setRefresh={setRefresh}
      toggleUpdateMode={toggleUpdateMode}
      replyList={replyList}
      loginCookie={loginCookie}
    />
  );
};

export default CommentCard;
