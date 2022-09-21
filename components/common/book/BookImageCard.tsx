const BookImageCard = () => {
  return (
    // book Simple Info Card
    <div className={"w-[212px] h-[252px] flex flex-col flex-1"}>
      {/* book Image */}
      <div className={"w-[130px] h-[200px] place-self-center "}>
        <img className={"w-full h-full"} src={"/image/book_sample.png"} />
      </div>
      {/* book Simple Info Center */}
      <div className={"flex-1 flex flex-col"}>
        <div className={"w-full h-8 flex flex-row justify-center"}>
          {/* book Title */}
          <div className={"py-1 text-white text-center"}>여기에는여덟글자</div>
          <div className={"w-0 h-4 border border-white m-2"} />
          {/* book Writer */}
          <div className={"py-1 text-white "}>다섯글자로</div>
        </div>
        {/* book Score */}
        <div className={"flex-1 text-white text-center"}>4.7</div>
      </div>
    </div>
  );
};

export default BookImageCard;
