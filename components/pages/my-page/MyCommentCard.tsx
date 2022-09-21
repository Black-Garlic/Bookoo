interface MyCommentCardProps {
  newComment: boolean;
}

const MyCommentCard = ({ newComment }: MyCommentCardProps) => {
  return (
    <div className={"w-full h-full flex flex-col"}>
      <div className={"w-full h-5 flex flex-row"}>
        <div className={"flex-1 text-[#6D6D6D] text-xs"}>2022/07/26</div>
        {newComment && (
          <div className={"text-white"}>새로운 대댓글이 달렸어요!</div>
        )}
      </div>
      <div className={"flex-1"}>
        <div className={"text-white h-[72px]"}>섞어야 한다</div>
      </div>
      <div
        className={"w-full h-14 flex flex-row px-2 py-1 mt-[14px] bg-[#363636]"}
      >
        <div className={"w-[30px] h-[46px] self-center"}>
          <img src={"/image/book_sample.png"} alt={"book"} />
        </div>
        <div className={"flex-1 flex flex-col text-white ml-2"}>
          <div className={"flex-1"}>책 제목</div>
          <div className={"flex-1"}>닉네임님의 글</div>
        </div>
      </div>
    </div>
  );
};

export default MyCommentCard;
