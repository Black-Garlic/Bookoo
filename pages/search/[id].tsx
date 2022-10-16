import { NextPage } from "next";
import BookDetailInfo from "../../components/common/book/BookDetailInfo";
import BookArticleList from "../../components/pages/book/BookArticleList";
import { useEffect, useState } from "react";
import BookScoreModal from "../../components/pages/book/BookScoreModal";
import cn from "classnames";
import { useRouter } from "next/router";
import { BookService } from "../../services/BookService";
import { BookUnitResponseData } from "../../typings/Books";
import { useRecoilState, useRecoilValue } from "recoil";
import { popupState } from "../../states/states";

const Search: NextPage = () => {
  const [bookScoreOpen, setBookScoreOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookUnitResponseData>({
    author: "",
    description: "",
    discount: 0,
    image: "",
    isbn: 0,
    link: "",
    pubdate: 0,
    publisher: "",
    title: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const popup = useRecoilValue(popupState);

  useEffect(() => {
    getBookDetail();
  }, [id]);

  // 예시 : 9791158511432
  const getBookDetail = async () => {
    const res = await BookService.getBookDetail(Number(id));
    console.log("res", res);
    if (res) setBookInfo(res);
  };

  return (
    <div className={"w-screen h-full flex flex-row px-40 pt-20"}>
      <div
        className={cn(
          "w-72 h-auto ml-40 fixed top-40 left-0",
          bookScoreOpen && "blur"
        )}
      >
        <BookDetailInfo bookInfo={bookInfo} />
      </div>
      <div
        className={cn(
          "w-full h-auto flex-1 ml-[432px]",
          bookScoreOpen && "blur"
        )}
      >
        <div className={"flex flex-1 flex-col mb-16"}>
          <div className={"w-full h-auto body-1 text-text-3 mb-1 px-3"}>
            줄거리
          </div>
          <div className={"w-full h-auto caption-2 text-text-1 px-3"}>
            {bookInfo.description}
          </div>
        </div>
        <div className={"flex flex-1 flex-col mb-16"}>
          <div className={"w-full h-auto body-1 text-text-3 mb-1 px-3"}>
            다른 사람 서평
          </div>
          <BookArticleList bookId={Number(id)} />
        </div>
      </div>
      {popup.bookScore && <BookScoreModal />}
    </div>
  );
};

export default Search;
