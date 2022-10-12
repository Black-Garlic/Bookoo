import StarCount from "../../common/star/StarCount";

interface ReviewItemProps {
  like: boolean;
}

const ReviewCard = ({ like }: ReviewItemProps) => {
  return (
    <div className={"w-[357px] h-40 flex flex-col flex-1"}>
      <div className={"w-full h-12 flex flex-row"}>
        <div className={"w-[30px] h-[46px]"}>
          <img src={"/image/book_sample.png"} alt={"book"} />
        </div>
        <div className={"w-full h-8 flex-1 flex flex-col ml-2"}>
          <div className={"flex-1 flex flex-row"}>
            <div className={"caption-1 text-text-1 text-center"}>책 제목</div>
            <div className={"w-0 h-4 border border-white mx-2 self-center"} />
            <div className={"caption-1 text-text-2"}>책 제목</div>
          </div>
          <div className={"w-full h-8 flex flex-row"}>
            {like && <div className={"pr-1 caption-1 text-text-1"}>닉네임</div>}
            <StarCount />
          </div>
        </div>
      </div>
      <div className={"flex-1"}>
        <div className={"caption-2 text-text-1"}>섞어야 한다</div>
      </div>
      <div className={"w-full flex flex-row caption-3 text-text-2"}>
        <div className={"w-16 h-5 mr-2"}>2022/08/24</div>
        {/* Like */}
        <div className={"w-16 h-5 mr-2 flex flex-row"}>
          <div className={"w-3 h-3 my-1 mr-1"}>
            {like ? (
              <img src={"/svg/uil_heart-fill.svg"} alt={"heart"} />
            ) : (
              <img src={"/svg/uil_heart.svg"} alt={"heart"} />
            )}
          </div>
          <div className={"flex-1"}>54</div>
        </div>
        {/* Comment */}
        <div className={"w-16 h-5 mr-2 flex flex-row"}>
          <div className={"w-3 h-3 my-1 mr-1"}>
            <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
          </div>
          <div className={"flex-1"}>54</div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
