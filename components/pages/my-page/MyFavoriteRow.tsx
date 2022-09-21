import ReviewCard from "./ReviewCard";

const MyFavoriteRow = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <ReviewCard like={true} />
      <div className={"mx-6"} />
      <ReviewCard like={true} />
      <div className={"mx-6"} />
      <ReviewCard like={true} />
    </div>
  );
};

export default MyFavoriteRow;
