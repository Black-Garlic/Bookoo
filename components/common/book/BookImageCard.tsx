const BookImageCard = () => {
  return (
    // book Simple Info Card
    <div
      className={"w-full h-[252px] flex justify-center border border-red-500"}
    >
      <div className={"w-[12rem] h-[252px] flex flex-col"}>
        {/* book Image */}
        <div className={"w-[130px] h-[200px] place-self-center "}>
          <img className={"w-full h-full"} src={"/image/book_sample.png"} />
        </div>
        {/* book Simple Info Center */}
        <div className={"flex-1 flex flex-col items-center"}>
          <div
            className={
              "w-auto border border-red-500 h-8 flex flex-row justify-center"
            }
          >
            {/* book Title */}
            <div
              className={
                "w-40 py-1 body-3 text-text-1 text-right self-center truncate"
              }
            >
              여기에는여덟글자
            </div>
            <div className={"w-0 h-5 self-center border border-white mx-1"} />
            {/* book Writer */}
            <div
              className={
                "w-24 py-1 caption-2 self-center text-sm text-text-1 text-left truncate"
              }
            >
              다섯글자로
            </div>
          </div>
          {/* book Score */}
          <div className={"flex-1 sub-title-1 text-text-1 text-center"}>
            4.7
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookImageCard;
