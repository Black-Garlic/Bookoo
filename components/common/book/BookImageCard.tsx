import { BookUnitResponseData } from "../../../typings/Books";

interface BookImageCardProps {
  unit: BookUnitResponseData;
}

const BookImageCard = ({ unit }: BookImageCardProps) => {
  return (
    // book Simple Info Card
    <div className={"w-full flex justify-center items-center"}>
      <div
        className={
          "w-[212px] h-[252px] flex flex-col justify-center items-center flex-1 cursor-pointer"
        }
      >
        {/* book Image */}
        <div className={"w-[130px] h-[200px] place-self-center"}>
          <img className={"w-full h-full"} src={unit.image} />
        </div>
        {/* book Simple Info Center */}
        <div className={"w-auto flex flex-col items-center"}>
          <div className={"w-[240px] h-8 flex flex-row justify-center"}>
            {/* book Title */}
            <p className={"w-full py-1 text-white text-center truncate"}>
              {unit.title}
            </p>
            <div className={"w-0 h-4 border border-white m-2 "} />
            {/* book Writer */}
            <div className={"w-[150px] py-1 text-white truncate"}>
              다섯글자로
            </div>
          </div>
          {/* book Score */}
          <div className={"flex-1 text-white text-center"}>4.7</div>
        </div>
      </div>
    </div>
  );
};

export default BookImageCard;
