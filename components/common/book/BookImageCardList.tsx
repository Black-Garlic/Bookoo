import BookImageCardRow from "./BookImageCardRow";
import BookImageCard from "./BookImageCard";

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
    // <div className={"flex flex-col"}>
    //   {/* book List Row */}
    //   <BookImageCardRow />
    //   {extension && (
    //     <>
    //       <div className={"h-20"} />
    //       <BookImageCardRow />
    //       <div className={"h-20"} />
    //       <BookImageCardRow />
    //     </>
    //   )}
    // </div>
    <div
      className={
        "w-full border border-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-24 "
      }
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map((element, index) => {
        return <BookImageCard key={index} />;
      })}
    </div>
  );
};

export default BookImageCardList;
