interface MyCommentCardProps {
  newComment: boolean;
  info: any;
}

const MyCommentCard = ({ newComment, info }: MyCommentCardProps) => {
  return (
    <div className={"w-[357px] h-[200px] flex flex-col cursor-pointer gap-2"}>
      <div className={"w-full h-5 flex flex-row"}>
        <div className={"flex-1 caption-3 text-text-2"}>
          {info?.createdAt[0]}/{info?.createdAt[1]}/{info?.createdAt[2]}
        </div>
        {newComment && (
          <>
            <div className={"w-1 h-1 mt-0.5 bg-[#FF0000] rounded"} />
            <div className={"caption-3 text-text-1"}>
              새로운 대댓글이 달렸어요!
            </div>
          </>
        )}
      </div>
      <div className={"flex-1"}>
        {/*<div className={"caption-2 text-text-1 h-[72px]"}>{info?.content}</div>*/}
        <div className={"caption-2 text-text-1 h-[72px]"}>
          <p className={" box-truncate"}>
            {info?.content}
            {/*섞어야 한다. 사람들이 좋아하도록 섞어야 한다. 그러면 히트한다. 그래.*/}
            {/*쉬운 이야기지만 처음 이야기하기는 쉽지 않은 신선힌말이다. 책을*/}
            {/*읽는다는 것은 지혜를 가지기 위함이고, 이 지혜는 지식의 통합과*/}
            {/*통섭에서 일어나는 힘이다. 이것도 섞음 일런지 모른다. 객관적인*/}
            {/*사실이라도 다른 관*/}
          </p>
        </div>
      </div>
      <div
        className={
          "w-full h-16 flex flex-row px-2 py-1 mt-[14px] bg-[#363636] rounded-xl"
        }
      >
        <div className={"w-[30px] h-[46px] self-center"}>
          <img src={"/image/book_sample.png"} alt={"book"} />
        </div>
        <div
          className={"flex flex-col justify-around caption-1 text-text-1 ml-4"}
        >
          <div className={"leading-4"}>책 제목</div>
          <div className={"leading-4"}>닉네임님의 글</div>
        </div>
      </div>
    </div>
  );
};

export default MyCommentCard;
