import BookImageCardRow from "./BookImageCardRow";

interface BookImageCardListProps {
  extension: boolean;
  searchList: any[];
}

const BookImageCardList = ({
  extension,
  searchList,
}: BookImageCardListProps) => {
  return (
    // Book List Area
    <div className={"flex flex-col"}>
      {/* book List Row */}
      <BookImageCardRow />
      {extension && (
        <>
          <div className={"h-20"} />
          <BookImageCardRow />
          <div className={"h-20"} />
          <BookImageCardRow />
        </>
      )}
    </div>
  );
};

export default BookImageCardList;
