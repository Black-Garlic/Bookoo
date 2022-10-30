interface CommentItemProps {
  info: any;
}

const CommentCard = ({ info }: CommentItemProps) => {
  return (
    <div
      className={
        "w-full h-auto px-6 py-8 mt-4 border-t border-text-2 flex flex-col"
      }
    >
      <div className={"w-full h-auto sub-title-1 text-text-1 mb-1"}>닉네임</div>
      <div className={"flex-1 body-3 text-text-1 mb-1"}>
        얼마나 따뜻한 물방아 부패뿐이다. 따뜻한 두손을 수 관현악이며, 사막이다.
        수 때에, 얼음에 되려니와, 피는 것은 못할 사는가 칼이다. 우는 심장은
        이상의 것이다. 보내는 대고, 광야에서 밥을 이것이다. 얼마나 이상은 그들의
        인간이 때에, 만물은 사막이다. 청춘의 찬미를 노년에게서 우는 그와 되는
        뿐이다. 기쁘며, 힘차게 그들의 이는 소금이라 것이다.보라, 사막이다.
        우리의 못할 무한한 든 굳세게 많이 눈이 인간의 꾸며 이것이다.
      </div>
      <div className={"w-full h-auto flex flex-row caption-1 text-text-2"}>
        <div className={"flex flex-row"}>
          <div className={"mr-3"}>2022/08/26</div>
          <div>답글 쓰기</div>
        </div>
        <div className={"flex-1"} />
        <div className={"flex flex-row"}>
          <div className={"mr-3"}>수정</div>
          <div>삭제</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
