import StarCount from "../../common/star/StarCount";
import { useRouter } from "next/router";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";

interface ArticleItemProps {
  like: boolean;
  info: any;
}

const ArticleCard = ({ like, info }: ArticleItemProps) => {
  const [popup, setPopup] = useRecoilState(popupState);

  const router = useRouter();

  const goDetailPage = () => {
    router.push(`/article/${info?.articleId}`);
    RecoilUtils.toggleModal("mypage", popup, setPopup);
  };

  return (
    <div
      className={
        "w-full max-w-screen h-[200px] flex flex-row cursor-pointer gap-[30px]"
      }
      onClick={() => goDetailPage()}
    >
      {/* Left : Book Info */}
      {info?.book ? (
        <div
          className={
            "flex flex-col h-[200px] w-[100px] justify-start items-center"
          }
        >
          <div className={"h-[130px]"}>
            <img
              src={info?.book?.image}
              alt={"book"}
              className={"h-full object-cover"}
            />
          </div>
          <div
            className={
              "max-w-[100px] truncate caption-1 text-text-1 text-center"
            }
          >
            {info?.book?.title}
          </div>
          <div
            className={
              "max-w-[75px] truncate caption-3 text-text-2 flex items-center"
            }
          >
            {info?.book?.author}
          </div>
          <StarCount />
        </div>
      ) : (
        <div
          className={
            "flex flex-col h-[200px] w-[100px] justify-start items-center"
          }
        >
          <div className={"h-[130px]"}>
            <img
              src={"/image/book_sample.png"}
              alt={"book"}
              className={"h-full object-cover"}
            />
          </div>
          <div
            className={
              "max-w-[100px] truncate caption-1 text-text-1 text-center"
            }
          >
            책 제목입니다.
          </div>
          <div
            className={
              "max-w-[75px] truncate caption-3 text-text-2 flex items-center"
            }
          >
            책 저자입니다.
          </div>
          <StarCount />
        </div>
      )}

      {/* 서평 내용 */}
      <div
        className={
          "flex flex-col h-[200px] w-auto justify-between items-center py-1"
        }
      >
        <div className={"h-[65px] w-full"}>
          <div className={"w-full h-[65px] text-text-1 text-lg"}>
            <p className={"h-[65px] box-truncate-2 "}>
              {/*{info?.content}*/}
              {info?.title}
            </p>
          </div>
        </div>
        <div className={"w-full h-[95px]"}>
          <div className={"w-full h-[95px] text-text-2 text-sm"}>
            <p className={" h-[95px] box-truncate-3 "}>{info?.content}</p>
          </div>
        </div>
        <div
          className={
            "w-full flex flex-row caption-3 text-text-2 gap-2 items-center"
          }
        >
          <div className={"w-16 h-5 mr-2 items-center flex flex-row"}>
            {info?.createdAt[0]}/{info?.createdAt[1]}/{info?.createdAt[2]}
          </div>
          {/* Like */}
          <div
            className={
              "w-auto max-w-20 h-5 mr-2 flex flex-row items-center gap-1"
            }
          >
            <div className={"w-3 h-3 my-1 mr-1"}>
              {like ? (
                <img src={"/svg/uil_heart-fill.svg"} alt={"heart"} />
              ) : (
                <img src={"/svg/uil_heart.svg"} alt={"heart"} />
              )}
            </div>
            <div className={"flex-1"}>{info?.likesList?.length}</div>
          </div>
          {/* Comment */}
          <div
            className={
              "w-auto max-w-20 h-5 mr-2 flex flex-row items-center gap-1"
            }
          >
            <div className={"w-3 h-3 my-1 mr-1"}>
              <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
            </div>
            <div className={"flex-1"}>{info?.replyList?.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
