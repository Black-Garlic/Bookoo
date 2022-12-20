import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";

interface MyCommentCardProps {
  newComment: boolean;
  info: any;
}

const MyCommentCard = ({ newComment, info }: MyCommentCardProps) => {
  const router = useRouter();
  const [popup, setPopup] = useRecoilState(popupState);

  const clickBookData = () => {
    router.push(`/article/${info?.article?.articleId}`);
    RecoilUtils.toggleModal("mypage", popup, setPopup);
  };

  return (
    <div
      className={
        "w-[280px] xl:w-[357px] h-[200px] flex flex-col cursor-pointer gap-2"
      }
      onClick={() => clickBookData()}
    >
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
          "w-[280px] xl:w-[357px] h-16 flex flex-row px-2 py-1 mt-[14px] bg-[#363636] rounded-xl"
        }
      >
        <div
          className={
            "w-[30px] h-[46px] self-center justify-center items-center"
          }
        >
          <img
            src={
              info?.article?.book?.image
                ? info.article.book.image
                : "/image/book_sample.png"
            }
            alt={"book"}
            className={"h-full w-full object-cover"}
          />
        </div>
        <div
          className={
            "w-[220px] xl:w-[290px] flex flex-col justify-around text-text-1 ml-4"
          }
        >
          <p className={"w-[220px] xl:w-[290px] truncate caption-1"}>
            {info.article.title ? info.article.title : "서평 제목"}
          </p>
          <div className={"leading-4 caption-3"}>닉네임님의 글</div>
        </div>
      </div>
    </div>
  );
};

export default MyCommentCard;
