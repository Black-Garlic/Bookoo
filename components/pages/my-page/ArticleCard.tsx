import StarCount from "../../common/star/StarCount";

interface ArticleItemProps {
  like: boolean;
  info: any;
}

const ArticleCard = ({ like, info }: ArticleItemProps) => {
  return (
    <div className={"w-[357px] h-[200px] flex flex-col border border-blue-500"}>
      <div className={"w-full h-12 flex flex-row"}>
        <div className={"w-[30px] h-[46px]"}>
          <img src={"/image/book_sample.png"} alt={"book"} />
        </div>
        <div className={"w-full h-8 flex-1 flex flex-col ml-2"}>
          <div className={"flex-1 flex flex-row"}>
            <div className={"caption-1 text-text-1 text-center"}>
              {info.title}
            </div>
            <div className={"w-0 h-4 border border-white mx-2 self-center"} />
            <div className={"caption-1 text-text-2"}>책 저자</div>
          </div>
          <div className={"w-full h-8 flex flex-row"}>
            {like && <div className={"pr-1 caption-1 text-text-1"}>닉네임</div>}
            <StarCount />
          </div>
        </div>
      </div>
      <div className={"w-[357px] h-[90px]"}>
        <div className={"w-[357px] h-[90px] text-text-1 "}>
          <p className={" h-[90px] box-truncate"}>
            {/*{info.content}*/}
            섞어야 한다. 사람들이 좋아하도록 섞어야 한다. 그러면 히트한다. 그래.
            쉬운 이야기지만 처음 이야기하기는 쉽지 않은 신선힌말이다. 책을
            읽는다는 것은 지혜를 가지기 위함이고, 이 지혜는 지식의 통합과
            통섭에서 일어나는 힘이다. 이것도 섞음 일런지 모른다. 객관적인
            사실이라도 다른 관
          </p>
        </div>
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
export default ArticleCard;
