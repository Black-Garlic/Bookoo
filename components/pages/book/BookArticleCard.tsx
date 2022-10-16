import StarCount from "../../common/star/StarCount";

const BookArticleCard = () => {
  return (
    <div className={"w-full h-full p-3 rounded-lg hover:bg-text-3"}>
      <div className={"flex flex-row"}>
        <div className={"body-1 text-text-1 mr-1"}>닉네임</div>
        <div className={"h-5 my-1.5"}>
          <StarCount />
        </div>
      </div>
      <div className={"flex-1 caption-2 text-text-1 mb-2"}>
        섞어야 한다. 사람들이 좋아하도록 섞어야 한다. 그러면 히트한다. 그래.
        쉬운 이야기지만 처음 이야기하기는 쉽지 않은 신선힌말이다. 책을 읽는다는
        것은 지혜를 가지기 위함이고, 이 지혜는 지식의 통합과 통섭에서 일어나는
        힘이다. 이것도 섞음 일런지 모른다. 객관적인 사실이라도 다른 관
      </div>
      <div className={"w-full h-auto flex flex-row"}>
        <div className={"flex flex-1 flex-row text-text-2 caption-3"}>
          <div className={"w-14 h-5 mr-2"}>2022/08/24</div>
          {/* Like */}
          <div className={"w-8 h-5 mr-2 flex flex-row"}>
            <div className={"w-3 h-3 my-1 mr-1"}>
              <img src={"/svg/uil_heart.svg"} alt={"heart"} />
            </div>
            <div className={"flex-1"}>54</div>
          </div>
          {/* Comment */}
          <div className={"w-8 h-5 mr-2 flex flex-row"}>
            <div className={"w-3 h-3 my-1 mr-1"}>
              <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
            </div>
            <div className={"flex-1"}>54</div>
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
  );
};

export default BookArticleCard;
