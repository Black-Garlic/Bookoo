import { NextPage } from "next";
import { useState } from "react";
import StarCount from "../../components/common/star/StarCount";
import { useRecoilState } from "recoil";
import { popupState } from "../../states/states";
import ArticleBookSearchModal from "../../components/pages/article/ArticleBookSearchModal";
import { RecoilUtils } from "../../utils/RecoilUtils";

const scoreMessage = [
  '1 - "너무 재밌었어요!"',
  '2 - "너무 재밌었어요!"',
  '3 - "너무 재밌었어요!"',
  '4 - "너무 재밌었어요!"',
  '5 - "너무 재밌었어요!"',
];

const ArticleWrite: NextPage = () => {
  const [selectedBookData, setSelectedBookData] = useState<any>();
  const [starCount, setStarCount] = useState<number>(3);

  const [popup, setPopup] = useRecoilState(popupState);

  return (
    <div className={"w-screen h-full flex flex-col"}>
      <div className={"w-full h-auto flex flex-row-reverse pr-20 mb-16"}>
        <button
          className={
            "w-auto h-full body-1 text-text-1 px-6 py-2 rounded-lg bg-text-2"
          }
        >
          취소
        </button>
        <button
          className={
            "w-auto h-full body-1 text-text-1 mr-8 px-6 py-2 rounded-lg bg-primary"
          }
        >
          저장
        </button>
      </div>
      <div className={"w-full h-auto px-72 mb-16 flex flex-col"}>
        <div className={"w-full h-auto flex flex-row mb-16 px-10 py-8"}>
          <div className={"w-32 h-44 mr-8"}>
            <img
              className={"w-32 h-44 object-fill"}
              src={"/image/book_sample.png"}
            />
          </div>
          <div className={"w-full h-auto flex-1 flex flex-col"}>
            <div className={"flex-1 title-3 text-text-1 mb-1"}>
              하얼빈 도서 제목은 쭉 길어질 수 있게
            </div>
            <div className={"flex-1 flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>저자</div>
              <div className={"w-auto body-3 text-text-1"}>김훈</div>
            </div>
            <div className={"flex-1 flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>출판사</div>
              <div className={"w-auto body-3 text-text-1"}>창비</div>
            </div>
            <div className={"flex-1 flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>출판일</div>
              <div className={"w-auto body-3 text-text-1"}>2000.00.00</div>
            </div>
          </div>
          {!selectedBookData && (
            <div
              className={
                "w-[1234px] h-44 title-3 text-text-1 pt-[86px] absolute z-50 rounded-2xl bg-text-2/50 text-center"
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                // setSelectedBookData("data");
                RecoilUtils.toggleModal("bookSearch", popup, setPopup);
              }}
            >
              서평을 작성할 도서를 골라주세요
            </div>
          )}
        </div>
        <div className={"w-96 h-auto flex flex-col mb-16"}>
          <div className={"flex-1 mb-2 sub-title-1 text-text-1"}>평점</div>
          <div
            className={
              "w-full h-auto title-3 text-text-1 placeholder-text-2 outline-0 mb-8 px-4 pb-4 rounded-lg flex flex-col"
            }
          >
            <div className={"w-auto h-auto flex flex-row mb-1 justify-center"}>
              <div className={"w-16 h-16 p-3"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 1
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
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
                    starCount >= 2
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
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
                    starCount >= 3
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
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
                    starCount >= 4
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
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
                    starCount >= 5
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onMouseOver={() => setStarCount(5)}
                />
              </div>
            </div>
            <div className={"w-full h-auto text-center"}>
              {scoreMessage[starCount - 1]}
            </div>
          </div>
        </div>
        <div className={"w-full h-auto flex flex-col"}>
          <div className={"flex-1 mb-2 sub-title-1 text-text-1"}>서평 작성</div>
          <div
            className={
              "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"
            }
          >
            <textarea
              className={
                "w-full h-full min-h-[200px] body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"
              }
              placeholder={"댓글을 남겨보세요!"}
            />
          </div>
        </div>
      </div>
      {popup.bookSearch && <ArticleBookSearchModal />}
    </div>
  );
};

export default ArticleWrite;
