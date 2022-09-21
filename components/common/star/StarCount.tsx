const StarCount = () => {
  return (
    <div className={"w-[90px] h-5 flex flex-row"}>
      {/* Fill Star */}
      <div className={"w-5 h-5"}>
        <img src={"/svg/star.svg"} alt={"star"} />
      </div>
      <div className={"w-5 h-5"}>
        <img src={"/svg/star.svg"} alt={"star"} />
      </div>
      <div className={"w-5 h-5"}>
        <img src={"/svg/star.svg"} alt={"star"} />
      </div>
      <div className={"w-5 h-5"}>
        <img src={"/svg/star.svg"} alt={"star"} />
      </div>
      <div className={"w-5 h-5"}>
        <img src={"/svg/star.svg"} alt={"star"} />
      </div>
    </div>
  );
};

export default StarCount;
