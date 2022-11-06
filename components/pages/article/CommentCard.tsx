import React, { useState } from "react";
import CommentUpdate from "./CommentUpdate";
import CommentInfo from "./CommentInfo";

interface CommentItemProps {
  info: any;
  level: number;
  setRefresh: Function;
}

const CommentCard = ({ info, level, setRefresh }: CommentItemProps) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const toggleUpdateMode = () => {
    if (isUpdateMode) {
      setIsUpdateMode(false);
    } else {
      setIsUpdateMode(true);
    }
  };

  return isUpdateMode ? (
    <CommentUpdate info={info} toggleUpdateMode={toggleUpdateMode} />
  ) : (
    <CommentInfo
      info={info}
      level={level}
      setRefresh={setRefresh}
      toggleUpdateMode={toggleUpdateMode}
    />
  );
};

export default CommentCard;
