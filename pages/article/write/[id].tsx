import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import ArticleBookSearchModal from "../../../components/pages/article/ArticleBookSearchModal";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { ArticleService } from "../../../services/ArticleService";
import { createArticleRequestData } from "../../../typings/Article";
import { useRouter } from "next/router";
import { CreateReplyRequestData } from "../../../typings/Reply";
import { BookService } from "../../../services/BookService";
import { userInfoState } from "../../../states/userInfoState";
import { UserService } from "../../../services/UserService";
import { checkShelfRequest } from "../../../typings/User";

const scoreMessage = [
  '1 - "너무 재밌었어요!"',
  '2 - "너무 재밌었어요!"',
  '3 - "너무 재밌었어요!"',
  '4 - "너무 재밌었어요!"',
  '5 - "너무 재밌었어요!"',
];

const ArticleWrite: NextPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const { id } = router.query;
  const [bookId, setBookId] = useState("");
  const [selectedBookData, setSelectedBookData] = useState<any>();
  const [starCount, setStarCount] = useState<number>(3);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [popup, setPopup] = useRecoilState(popupState);

  useEffect(() => {
    getBookInfo();
  }, [id]);

  const getBookInfo = async () => {
    const res = await BookService.getBookDetail(Number(id));
    setSelectedBookData(res);
  };

  const writeArticle = async () => {
    try {
      if (!selectedBookData?.isbn) {
        alert("책을 골라주세요.");
      } else if (title.length === 0) {
        alert("제목을 적어주세요.");
      } else if (content.length === 0) {
        alert("내용을 적어주세요.");
      } else {
        const checkRequest = new checkShelfRequest();
        checkRequest.userId = userInfo.id;
        checkRequest.bookId = selectedBookData.isbn;

        await UserService.checkShelf(checkRequest).then(async (res) => {
          if (res.data === "DEFAULT") {
            await UserService.addShelf({
              userId: userInfo.id,
              bookId: selectedBookData.isbn,
            });
          }
        });
        const createArticleRequest = new createArticleRequestData();
        createArticleRequest.userId = userInfo.id;
        createArticleRequest.bookId = selectedBookData.isbn;
        createArticleRequest.title = title;
        createArticleRequest.content = content;

        createArticleRequest.rating = starCount;

        await ArticleService.createArticle(createArticleRequest).then(() => {
          router.push(`/search/${id}`);
        });
      }
    } catch {
      alert("작성에 오류가 있습니다.");
      router.push(`/search/${id}`);
    }
  };

  return (
    <div className={"w-screen h-full flex flex-col  relative"}>
      <div
        className={
          "w-full h-28 flex flex-row-reverse pr-20 items-center fixed top-0 overflow-hidden z-40 bg-[#292929]"
        }
      >
        <button
          className={
            "w-auto h-14 body-1 text-text-1 px-6 py-2 rounded-lg bg-text-2 flex justify-center items-center"
          }
          onClick={() => router.back()}
        >
          취소
        </button>
        <button
          className={
            "w-auto h-14 body-1 text-text-1 mr-8 px-6 py-2 rounded-lg bg-primary flex justify-center items-center"
          }
          onClick={writeArticle}
        >
          저장
        </button>
      </div>
      <div
        className={
          "w-full h-auto px-20 lg:px-32 xl:px-72 mb-16 flex flex-col mt-28 z-20 gap-16"
        }
      >
        <div className={"w-full h-auto flex flex-row py-8 relative "}>
          <div className={"w-32 h-44 mr-8 "}>
            {selectedBookData && selectedBookData.image ? (
              <img
                className={"w-32 h-44 object-fill"}
                src={
                  selectedBookData?.image
                    ? selectedBookData.image
                    : "./svg/empty_book.svg"
                }
              />
            ) : (
              <div className={"w-32 h-full py-4 pl-6"}>
                <div className={"w-full h-full bg-[#E8E8E8]"} />
              </div>
            )}
          </div>
          <div className={"w-full h-auto flex flex-col "}>
            <div className={"w-full title-3 text-text-1 mb-1"}>
              {selectedBookData?.title ? selectedBookData?.title : "도서 제목"}
            </div>
            <div className={"flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>저자</div>
              <div className={"w-auto body-3 text-text-1"}>
                {selectedBookData?.author}
              </div>
            </div>
            <div className={"flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>출판사</div>
              <div className={"w-auto body-3 text-text-1"}>
                {selectedBookData?.publisher}
              </div>
            </div>
            <div className={"flex flex-row"}>
              <div className={"w-20 body-1 text-text-2"}>출판일</div>
              <div className={"w-auto body-3 text-text-1"}>
                {selectedBookData &&
                  String(selectedBookData?.pubdate)?.slice(0, 4) +
                    "." +
                    String(selectedBookData?.pubdate)?.slice(4, 6) +
                    "." +
                    String(selectedBookData?.pubdate)?.slice(6, 8)}
              </div>
            </div>
          </div>
        </div>
        <div className={"w-96 h-auto flex flex-col "}>
          <div className={"flex-1 mb-2 sub-title-1 text-text-1"}>평점</div>
          <div
            className={
              "w-full h-auto title-3 text-text-1 placeholder-text-2 outline-0 px-4 pb-4 rounded-lg flex flex-col"
            }
          >
            <div className={"w-auto h-auto flex flex-row mb-1 justify-center"}>
              <div className={"w-16 h-16 p-3 cursor-pointer"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 1
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onClick={() => setStarCount(1)}
                />
              </div>
              <div className={"mx-2"} />
              <div className={"w-16 h-16 p-3 cursor-pointer"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 2
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onClick={() => setStarCount(2)}
                />
              </div>
              <div className={"mx-2"} />
              <div className={"w-16 h-16 p-3 cursor-pointer"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 3
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onClick={() => setStarCount(3)}
                />
              </div>
              <div className={"mx-2"} />
              <div className={"w-16 h-16 p-3 cursor-pointer"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 4
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onClick={() => setStarCount(4)}
                />
              </div>
              <div className={"mx-2"} />
              <div className={"w-16 h-16 p-3 cursor-pointer"}>
                <img
                  className={"w-full h-full"}
                  src={
                    starCount >= 5
                      ? "/svg/star_big.svg"
                      : "/svg/star_big_dark.svg"
                  }
                  alt={"star"}
                  onClick={() => setStarCount(5)}
                />
              </div>
            </div>
            <div className={"w-full h-auto text-center"}>
              {scoreMessage[starCount - 1]}
            </div>
          </div>
        </div>
        <div className={"w-full h-auto flex flex-col gap-4"}>
          <div className={"flex-1 mb-2 sub-title-1 text-text-1"}>제목</div>
          <div
            className={
              "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"
            }
          >
            <input
              type={"text"}
              className={
                "w-full h-full min-h-[40px] body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"
              }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"제목을 입력해주세요"}
            />
          </div>
        </div>

        <div className={"w-full h-auto flex flex-col gap-4"}>
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
              placeholder={"서평을 작성해주세요"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleWrite;
