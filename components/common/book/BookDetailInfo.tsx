const BookDetailInfo = () => {
  return (
    <div className={"flex flex-col"}>
      <div className={"w-[130px] h-[200px] mb-8 place-self-center"}>
        <img className={"w-full h-full"} src={"/image/book_sample.png"} />
      </div>
      <div className={"title-3 text-text-1 flex-1 mb-1"}>
        하얼빈 도서 제목은 쭉 길어질 수 있게
      </div>
      <div className={"w-full h-auto flex flex-col mb-10"}>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>저자</div>
          <div className={"w-auto body-3 text-text-1"}>김훈</div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>평점</div>
          <div className={"w-auto body-3 text-text-1"}>4.5</div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>출판사</div>
          <div className={"w-auto body-3 text-text-1"}>창비</div>
        </div>
        <div className={"flex-1 flex flex-row"}>
          <div className={"w-20 body-1 text-text-2"}>출판일</div>
          <div className={"w-auto body-3 text-text-1"}>2022.08.02</div>
        </div>
      </div>
      <button
        className={"w-full h-12 mb-3 body-1 text-text-2 bg-text-3 rounded-lg"}
      >
        내 책장에 저장하기
      </button>
      <button
        className={"w-full h-12 body-1 text-text-1 bg-primary rounded-lg"}
      >
        내 서평 보러가기
      </button>
    </div>
  );
};

export default BookDetailInfo;
