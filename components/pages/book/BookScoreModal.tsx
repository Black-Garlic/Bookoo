import ModalLayout from "../../common/modal/ModalLayout";
import { useState } from "react";

interface BookScoreProps {
  setBookScoreOpen: any;
}

const BookScore = ({ setBookScoreOpen }: BookScoreProps) => {
  const [starCount, setStarCount] = useState<number>(3);

  return (
    <ModalLayout>
      <div className={"w-full h-auto flex flex-row"}>
        <div className={"w-full h-full flex-1 title-3 text-text-1"}>
          [책 제목]을 다 읽으셨군요!
        </div>
        <button
          className={"w-6 h-6 flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setBookScoreOpen(false);
          }}
        >
          <img className={"w-6 h-6 mr-2"} src={"svg/x-outline.svg"} alt="x" />
        </button>
      </div>
      <div className={"w-full h-auto flex-1 body-3 text-text-1 mt-2 mb-8"}>
        책에 대해서 평점을 정해주세요!
      </div>
      <div
        className={
          "w-full h-auto title-3 text-text-1 placeholder-text-2 outline-0 mb-8 px-4 pb-4 rounded-lg flex flex-col"
        }
      >
        <div className={"w-full h-auto flex flex-row mb-1 justify-center"}>
          <div className={"w-16 h-16 p-3"}>
            <img
              className={"w-full h-full"}
              src={
                starCount >= 1 ? "/svg/star_big.svg" : "/svg/star_big_dark.svg"
              }
              alt={"star"}
              onMouseOver={() => setStarCount(1)}
            />
          </div>
          <div className={"mx-2"} />
          <div className={"w-16 h-16 p-3"}>
            <img
              className={"w-full h-full"}
              src={
                starCount >= 2 ? "/svg/star_big.svg" : "/svg/star_big_dark.svg"
              }
              alt={"star"}
              onMouseOver={() => setStarCount(2)}
            />
          </div>
          <div className={"mx-2"} />
          <div className={"w-16 h-16 p-3"}>
            <img
              className={"w-full h-full"}
              src={
                starCount >= 3 ? "/svg/star_big.svg" : "/svg/star_big_dark.svg"
              }
              alt={"star"}
              onMouseOver={() => setStarCount(3)}
            />
          </div>
          <div className={"mx-2"} />
          <div className={"w-16 h-16 p-3"}>
            <img
              className={"w-full h-full"}
              src={
                starCount >= 4 ? "/svg/star_big.svg" : "/svg/star_big_dark.svg"
              }
              alt={"star"}
              onMouseOver={() => setStarCount(4)}
            />
          </div>
          <div className={"mx-2"} />
          <div className={"w-16 h-16 p-3"}>
            <img
              className={"w-full h-full"}
              src={
                starCount >= 5 ? "/svg/star_big.svg" : "/svg/star_big_dark.svg"
              }
              alt={"star"}
              onMouseOver={() => setStarCount(5)}
            />
          </div>
        </div>
        <div className={"w-full h-auto text-center"}>
          &ldquo;너무 재미있었요!&rdquo;
        </div>
      </div>
      <div className={"w-full h-auto body-1 text-text-1 flex flex-row"}>
        <button
          className={"flex-1 bg-text-2 rounded-lg py-2 disabled:opacity-40"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setBookScoreOpen(false);
          }}
        >
          내 책장에 저장하기
        </button>
        <div className={"mx-1"} />
        <button
          className={"flex-1 bg-primary rounded-lg py-2 disabled:opacity-40"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setBookScoreOpen(false);
          }}
        >
          취소
        </button>
      </div>
    </ModalLayout>
  );
};

export default BookScore;
