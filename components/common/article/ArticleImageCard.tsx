import StarCount from "../star/StarCount";
import { useRouter } from "next/router";

const ArticleImageCard = ({ info }: any) => {
  const router = useRouter();

  const goDetailPage = () => {
    router.push(`/article/${info?.articleId}`);
  };

  return (
    // Article Info Card
    <div
      className={"w-[357px] h-40 flex flex-row flex-1 cursor-pointer"}
      onClick={() => goDetailPage()}
    >
      {/* book Image */}
      <div className={"w-[110px] h-[150px] h-full"}>
        <img
          src={info?.book?.image ? info.book.image : "/image/book_sample.png"}
          className={"w-full h-full object-fit"}
        />
      </div>
      {/* Article Info Area */}
      <div className={"w-[247px] mt-1 ml-4 flex flex-col"}>
        {/* Article info Top */}
        <div className={"w-[247px] h-[60px] flex flex-row mb-2"}>
          <div className={"h-[60px] pr-1 body-4 text-text-1 box-truncate-2"}>
            {info?.title}
          </div>
        </div>
        <div>
          <StarCount />
        </div>
        <div>
          <div className={"caption-2 text-text-1"}>닉네임</div>
        </div>
        {/* Article Info Bottom */}
        <div className={"w-full flex flex-row text-text-2 caption-3"}>
          <div className={"w-16 h-5 mr-2"}>
            {info?.createdAt[0]}/{info?.createdAt[1]}/{info?.createdAt[2]}
          </div>
          {/* Like */}
          <div
            className={"w-auto h-5 ml-2 mr-4 flex flex-row items-center gap-2"}
          >
            <div className={"w-3 h-3 my-1"}>
              <img src={"/svg/uil_heart.svg"} alt={"heart"} />
            </div>
            <div className={"w-auto"}>{info?.likeCount}</div>
          </div>
          {/* Comment */}
          <div className={"w-auto h-5 mr-2 flex flex-row items-center gap-2"}>
            <div className={"w-3 h-3 my-1"}>
              <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
            </div>
            <div className={"w-auto"}>{info?.replyCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleImageCard;
