import ReviewImageCardRow from "./ReviewImageCardRow";

interface ReviewImageCardListProps {
  extension: boolean;
  bookData: any[];
}

const ReviewImageCardList = ({
  extension,
  bookData,
}: ReviewImageCardListProps) => {
  return (
    // Review List
    <div className={"flex flex-col"}>
      {/* Review List Row */}
      <ReviewImageCardRow />
      {extension && (
        <>
          <div className={"mt-28"} />
          <ReviewImageCardRow />
          <div className={"mt-28"} />
          <ReviewImageCardRow />
          <div className={"mt-28"} />
          <ReviewImageCardRow />
        </>
      )}
      {/*<div className={"w-full flex flex-row"}>*/}
      {/*  <ReviewImageCard />*/}
      {/*  <div className={"mx-6"} />*/}
      {/*  <ReviewImageCard />*/}
      {/*  <div className={"mx-6"} />*/}
      {/*  <ReviewImageCard />*/}
      {/*</div>*/}
    </div>
  );
};

export default ReviewImageCardList;
