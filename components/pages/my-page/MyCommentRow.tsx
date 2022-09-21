import MyCommentCard from "./MyCommentCard";

const MyCommentRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <MyCommentCard newComment={false} />
      <div className={"mx-6"} />
      <MyCommentCard newComment={false} />
      <div className={"mx-6"} />
      <MyCommentCard newComment={true} />
    </div>
  );
};

export default MyCommentRow;
