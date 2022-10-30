interface EmptyListProps {
  imageFileName: string;
  comment: string;
}

const EmptyList = ({ imageFileName, comment }: EmptyListProps) => {
  return (
    <div className={"w-full h-full flex flex-col"}>
      <div className={"w-[172px] h-[172px] self-center mt-56"}>
        <img src={"svg/" + imageFileName + ".svg"} alt={"Empty"} />
      </div>
      <div className={"w-full h-auto sub-title-1 text-text-1 text-center mt-5"}>
        {comment}
      </div>
    </div>
  );
};

export default EmptyList;
