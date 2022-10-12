interface MyCommentCardProps {
  newComment: boolean;
}

const MyCommentCard = ({ newComment }: MyCommentCardProps) => {
  return (
    <div className={"w-full h-full flex flex-col"}>
      <div className={"w-full h-5 flex flex-row"}>
        <div className={"flex-1 caption-3 text-text-2"}>2022/07/26</div>
        {newComment && (
          <div className={"caption-3 text-text-1"}>
            새로운 대댓글이 달렸어요!
          </div>
        )}
      </div>
      <div className={"flex-1"}>
        <div className={"caption-2 text-text-1 h-[72px]"}>섞어야 한다</div>
      </div>
      <div
        className={"w-full h-14 flex flex-row px-2 py-1 mt-[14px] bg-[#363636]"}
      >
        <div className={"w-[30px] h-[46px] self-center"}>
          <img src={"/image/book_sample.png"} alt={"book"} />
        </div>
        <div className={"flex-1 flex flex-col caption-1 text-text-1 ml-2"}>
          <div className={"flex-1"}>책 제목</div>
          <div className={"flex-1"}>닉네임님의 글</div>
        </div>
      </div>
    </div>
  );
};

export default MyCommentCard;
