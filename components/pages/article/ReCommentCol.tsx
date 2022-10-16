import ReCommentCard from "./ReCommentCard";

const ReCommentCol = () => {
  return (
    <div className={"w-full h-auto"}>
      <ReCommentCard />
      <div className={"my-4"} />
      <ReCommentCard />
    </div>
  );
};

export default ReCommentCol;
