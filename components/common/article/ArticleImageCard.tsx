import StarCount from "../star/StarCount";

const ArticleImageCard = ({ info }: any) => {
  return (
    // Article Info Card
    <div className={"w-[357px] h-40 flex flex-row flex-1"}>
      {/* book Image */}
      <div className={"w-[110px] h-full"}>
        <img src={"/image/book_sample.png"} />
      </div>
      {/* Article Info Area */}
      <div className={"flex-1 mt-3 ml-2 flex flex-col"}>
        {/* Article info Top */}
        <div className={"w-full h-8 flex flex-row"}>
          <div className={"pr-1 body-1 text-text-1"}>닉네임</div>
          <StarCount />
        </div>
        {/* Article Info Center */}
        <div className={"flex-1"}>
          <div className={"caption-2 text-text-1"}>섞어야 한다</div>
        </div>
        {/* Article Info Bottom */}
        <div className={"w-full flex flex-row text-text-2 caption-3"}>
          <div className={"w-16 h-5 mr-2"}>2022/08/24</div>
          {/* Like */}
          <div className={"w-16 h-5 mr-2 flex flex-row"}>
            <div className={"w-3 h-3 my-1 mr-1"}>
              <img src={"/svg/uil_heart.svg"} alt={"heart"} />
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
    </div>
  );
};

export default ArticleImageCard;
