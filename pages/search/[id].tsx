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
import { UserService } from "../../services/UserService";
import { getCookie } from "../../utils/cookies";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const Search: NextPage = () => {
  const [loginCookie, setLoginCookie] = useState();
  const [bookScoreOpen, setBookScoreOpen] = useState(false);
  const [loading, setLoading] = useState(true);
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
    setLoginCookie(getCookie("login"));
  }, [getCookie, setLoginCookie]);

  useDidMountEffect(() => {
    if (id) getBookDetail();
  }, [id]);

  // 예시 : 9791158511432
  // 예시 : 9788955866117 (안되는 예시)
  const getBookDetail = async () => {
    await BookService.getBookDetail(Number(id)).then((res) => {
      setBookInfo(res);
      setLoading(false);
    });
  };

  return (
    <div className={"w-screen h-full flex flex-row px-40 pt-20"}>
      <div className={cn("w-72 h-auto", bookScoreOpen && "blur")}>
        <BookDetailInfo bookInfo={bookInfo} loginCookie={loginCookie} />
      </div>
      <div
        className={cn("w-full h-auto flex-1 ml-32", bookScoreOpen && "blur")}
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
