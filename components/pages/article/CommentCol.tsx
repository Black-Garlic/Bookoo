import CommentCard from "./CommentCard";
import ReCommentCol from "./ReCommentCol";

const CommentCol = () => {
  return (
    <div className={"w-full h-auto"}>
      <CommentCard />
      <CommentCard />
      <ReCommentCol />
    </div>
  );
};

export default CommentCol;
