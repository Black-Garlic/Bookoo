import StarCount from "../../common/star/StarCount";
import { ArticleService } from "../../../services/ArticleService";
import { useEffect, useState } from "react";

interface BookArticleCardProps {
  articleInfo: any;
  type: string;
}

const BookArticleCard = ({ articleInfo, type }: BookArticleCardProps) => {
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    getArticleLikeCount();
  }, []);

  const getArticleLikeCount = async () => {
    const res = await ArticleService.getLikesCount(Number(articleInfo?.id));
    setLikeCount(res);
  };

  return type === "book" ? (
    <div
      className={
        "w-full xl:w-1/2 h-full p-3 rounded-lg hover:bg-text-3 transition delay-100 duration-150 cursor-pointer"
      }
    >
      <div className={"flex flex-row"}>
        <div className={"body-1 text-text-1 mr-2"}>by 닉네임</div>
        <div className={"h-5 my-1.5 flex flex-row"}>
          {[0, 1, 2, 3, 4].map((element, index) => {
            return (
              <div className={"w-7 h-7"} key={index}>
                <img src={"/svg/star.svg"} alt={"star"} className={"w-7 h-7"} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={"flex-1 caption-2 text-text-1 mb-2"}>
        {articleInfo?.content}
      </div>
      <div className={"w-full h-auto flex flex-row justify-between"}>
        <div className={"w-auto h-auto flex flex-row items-center"}>
          <div
            className={
              "flex flex-1 flex-row text-text-2 caption-3 gap-4 items-center"
            }
          >
            <div className={"w-14 h-auto mr-2"}>
              {" "}
              {articleInfo?.createdAt[0]}/{articleInfo?.createdAt[1]}/
              {articleInfo?.createdAt[2]}
            </div>
            {/* Like */}
            <div
              className={
                "w-auto h-5 flex flex-row items-center text-text-2 gap-2"
              }
            >
              <div className={"w-3 h-3"}>
                <img src={"/svg/uil_heart.svg"} alt={"heart"} />
              </div>
              <div className={"flex-1"}>{likeCount}</div>
            </div>
            {/* Comment */}
            <div className={"w-auto h-5 flex flex-row gap-2 items-center"}>
              <div className={"w-3 h-3"}>
                <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
              </div>
              <div className={"flex-1"}>{articleInfo?.replyCount}</div>
            </div>
          </div>
        </div>
        <button
          className={"flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className={"caption-1 text-primary text-center"}>
            서평 보러가기
          </div>
          <div className={"w-6 h-6 ml-1 self-center"}>
            <img src={"/svg/uil_arrow-right.svg"} alt={"arrow-right"} />
          </div>
        </button>
      </div>
    </div>
  ) : (
    <div
      className={
        " w-full h-full p-3 rounded-lg hover:bg-text-3 transition delay-100 duration-150 cursor-pointer flex flex-col"
      }
    >
      <div className={"flex flex-row mb-2 -ml-1"}>
        {[0, 1, 2, 3, 4].map((element, index) => {
          return (
            <div className={"w-7 h-7"} key={index}>
              <img src={"/svg/star.svg"} alt={"star"} className={"w-7 h-7"} />
            </div>
          );
        })}
      </div>
      <div className={"flex flex-row items-center mb-2"}>
        <div className={"body-1 text-text-1 mr-1"}>{articleInfo?.title}</div>
      </div>
      <div className={"flex flex-col lg:flex-row"}>
        <div className={"flex-1 text-text-1 caption-3 mb-2 lg:mb-0"}>
          by 닉네임
        </div>
        <div className={"w-auto h-auto flex flex-row items-center"}>
          <div
            className={
              "flex flex-1 flex-row text-text-2 caption-3 gap-4 items-center"
            }
          >
            <div className={"w-14 h-auto mr-2"}>
              {" "}
              {articleInfo?.createdAt[0]}/{articleInfo?.createdAt[1]}/
              {articleInfo?.createdAt[2]}
            </div>
            {/* Like */}
            <div
              className={
                "w-auto h-5 flex flex-row items-center text-text-2 gap-2"
              }
            >
              <div className={"w-3 h-3"}>
                <img src={"/svg/uil_heart.svg"} alt={"heart"} />
              </div>
              <div className={"flex-1"}>{likeCount}</div>
            </div>
            {/* Comment */}
            <div className={"w-auto h-5 flex flex-row gap-2 items-center"}>
              <div className={"w-3 h-3"}>
                <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
              </div>
              <div className={"flex-1"}>{articleInfo?.replyCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookArticleCard;
