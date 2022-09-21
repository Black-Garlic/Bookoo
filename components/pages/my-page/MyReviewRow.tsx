import ReviewCard from "./ReviewCard";

const MyReviewRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <ReviewCard like={false} />
      <div className={"mx-6"} />
      <ReviewCard like={false} />
      <div className={"mx-6"} />
      <ReviewCard like={false} />
    </div>
  );
};

export default MyReviewRow;
