interface EmptyListProps {
  comment: string;
}

const EmptyList = ({ comment }: EmptyListProps) => {
  return (
    <div className={"w-full h-full flex flex-col"}>
      <div className={"w-[172px] h-[172px] self-center mt-56"}>
        <img src={"svg/circle.svg"} alt={"circle"} />
      </div>
      <div className={"w-full h-auto text-white text-center mt-5"}>
        {comment}
      </div>
    </div>
  );
};

export default EmptyList;
