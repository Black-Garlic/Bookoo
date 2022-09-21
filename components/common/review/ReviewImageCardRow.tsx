import ReviewImageCard from "./ReviewImageCard";

const ReviewImageCardRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <ReviewImageCard />
      <div className={"mx-6"} />
      <ReviewImageCard />
      <div className={"mx-6"} />
      <ReviewImageCard />
    </div>
  );
};

export default ReviewImageCardRow;
