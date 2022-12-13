import { NextPage } from "next";
import BookArticleCol from "../../components/pages/book/BookArticleCol";
import BookDetailInfo from "../../components/common/book/BookDetailInfo";
import StarCount from "../../components/common/star/StarCount";
import CommentCol from "../../components/pages/article/CommentCol";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArticleService } from "../../services/ArticleService";
import {
  getArticleDetailRequestData,
  likeRequest,
} from "../../typings/Article";
import {
  CreateReplyRequestData,
  ReplyUnitResponseData,
} from "../../typings/Reply";
import { ReplyService } from "../../services/ReplyService";
import CommentCard from "../../components/pages/article/CommentCard";
import { getCookie } from "../../utils/cookies";
import { RecoilUtils } from "../../utils/RecoilUtils";
import { useRecoilState } from "recoil";
import { popupState } from "../../states/states";
import { userInfoState } from "../../states/userInfoState";

const Article: NextPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [popup, setPopup] = useRecoilState(popupState);
  const [loginCookie, setLoginCookie] = useState();
  const [articleDetail, setArticleDetail] = useState({
    articleId: 0,
    bookArticleId: 0,
    content: "",
    title: "",
    createdAt: [],
    updatedAt: [],
    userId: "",
    likeCount: 0,
    liked: false,
    reply: [],
  });
  const [replyList, setReplyList] = useState<ReplyUnitResponseData[]>([]);
  const [bookInfo, setBookInfo] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [replyText, setReplyText] = useState("");
  const [refresh, setRefresh] = useState(new Date());

  useEffect(() => {
    setLoginCookie(getCookie("accessToken"));
  }, [getCookie, setLoginCookie]);

  useEffect(() => {
    if (id) getArticleDetail();
  }, [id, refresh]);

  const toggleLike = async () => {
    const request = new likeRequest();
    request.userId = userInfo.id;
    request.articleId = Number(id);
    const res = await ArticleService.likeArticle(request);
    getArticleDetail();
  };

  const getArticleDetail = async () => {
    const getArticleDetailRequest = new getArticleDetailRequestData();
    getArticleDetailRequest.articleId = Number(id);
    getArticleDetailRequest.userId = userInfo.id;
    getArticleDetailRequest.bookId = 9788960213180;
    const res = await ArticleService.getArticleDetail(getArticleDetailRequest);
    setArticleDetail(res);
    setReplyList(res.reply);
    setBookInfo(res.book);
  };

  const updateArticle = async () => {};

  const deleteArticle = async (articleId: number) => {
    try {
      if (id) {
        const res = await ArticleService.deleteArticle(Number(articleId));
        router.push("/search");
        RecoilUtils.toggleModal("mypage", popup, setPopup);
      }
    } catch {}
  };

  const createReply = async () => {
    if (id) {
      if (replyText === "") {
        alert("댓글 내용이 비어있습니다.");
      } else {
        const createReplyRequest = new CreateReplyRequestData();
        createReplyRequest.articleId = Number(id);
        createReplyRequest.userId = 0;
        createReplyRequest.content = replyText;
        const res = await ReplyService.createReply(createReplyRequest);
        setReplyText("");
        setRefresh(new Date());
      }
    }
  };
  return (
    <div className={"w-screen h-full flex flex-row px-40 pt-20"}>
      <div className={"w-72 h-auto"}>
        <BookDetailInfo bookInfo={bookInfo} loginCookie={loginCookie} />
        <div className={"my-10"} />
        <div className={"w-full h-auto"}>
          <div className={"body-1 text-text-3 mb-1 px-3"}>서평 리스트</div>
          <BookArticleCol />
        </div>
      </div>
      <div className={"w-full h-auto flex-1 ml-32"}>
        <div className={"flex flex-1 flex-col px-6 mb-4"}>
          <div
            className={"w-full h-auto body-3 text-text-1 flex flex-row mb-2"}
          >
            <div className={"flex flex-row"}>
              <div>2022/08/22</div>
              <div className={"mx-2.5"}>*</div>
              <div>1회차</div>
            </div>
            <div className={"flex-1"} />
            {loginCookie && articleDetail.userId === "0" && (
              <div className={"flex flex-row caption-1"}>
                <button
                  className={
                    "px-2 py-1 border border-primary rounded-lg bg-primary"
                  }
                >
                  수정
                </button>
                <div className={"mx-1.5"} />
                <button
                  className={
                    "px-2 py-1 border border-text-2 rounded-lg bg-text-2"
                  }
                  onClick={() => deleteArticle(Number(id))}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
          <div className={"w-full h-auto flex flex-row mb-6"}>
            <div className={"title-3 text-text-1 mr-1"}>닉네임</div>
            <div className={"h-5 my-1.5"}>
              <StarCount />
            </div>
          </div>
          <div className={"w-full h-auto body-3 text-text-1"}>
            {articleDetail?.content}
          </div>
          <div className={"w-full h-auto flex flex-row"}>
            <div
              className={
                "flex flex-1 flex-row-reverse gap-2 text-text-1 body-2"
              }
            >
              <div className={"w-6 flex flex-row items-center"}>
                <div className={"w-6 h-6 my-1"}>
                  <img src={"/svg/uil_share-alt.svg"} alt={"share"} />
                </div>
              </div>
              {/* Comment */}
              <div
                className={"min-w-16 w-auto mr-2 flex flex-row items-center"}
              >
                <div className={"w-6 h-6 my-1 mr-2"}>
                  <img src={"/svg/uil_comment-alt-lines.svg"} alt={"comment"} />
                </div>
                <div className={"w-auto "}>{articleDetail?.reply?.length}</div>
              </div>
              {/* Like */}
              <button
                className={
                  "min-w-16 w-auto mr-2 flex flex-row items-center cursor-pointer"
                }
                onClick={toggleLike}
                disabled={!loginCookie}
              >
                <div className={"w-6 h-6 my-1 mr-2"}>
                  {articleDetail.liked ? (
                    <img
                      src={"/svg/uil_heart-fill.svg"}
                      className={"w-6 h-6"}
                      alt={"heart"}
                    />
                  ) : (
                    <img
                      src={"/svg/uil_heart.svg"}
                      className={"w-6 h-6"}
                      alt={"heart"}
                    />
                  )}
                </div>
                <div className={"w-auto"}>{articleDetail?.likeCount}</div>
              </button>
            </div>
          </div>
        </div>

        {/* 댓글 */}
        <div className={"flex flex-1 flex-col mb-16"}>
          {/*<div*/}
          {/*  className={*/}
          {/*    "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"*/}
          {/*  }*/}
          {/*>*/}
          {/*  <div className={"w-full h-auto body-1 text-text-1 opacity-100"}>*/}
          {/*    닉네임*/}
          {/*  </div>*/}
          {/*  <textarea*/}
          {/*    className={*/}
          {/*      "w-full h-full body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"*/}
          {/*    }*/}
          {/*    placeholder={"댓글을 남겨보세요!"}*/}
          {/*    value={replyText}*/}
          {/*    onChange={(e) => setReplyText(e.target.value)}*/}
          {/*  />*/}
          {/*  <div className={"w-full h-auto flex flex-row-reverse"}>*/}
          {/*    <button*/}
          {/*      className={"caption-1 text-primary"}*/}
          {/*      onClick={createReply}*/}
          {/*    >*/}
          {/*      제출*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className={"w-full h-auto"}>
            {replyList &&
              replyList.length > 0 &&
              replyList.map((element, index) => {
                if (element.level === 0)
                  return (
                    <CommentCard
                      key={index}
                      info={element}
                      level={1}
                      setRefresh={setRefresh}
                      replyList={replyList}
                      loginCookie={loginCookie}
                    />
                  );
              })}
          </div>
          {loginCookie && (
            <div
              className={
                "w-full h-auto flex flex-col px-6 py-4 rounded-lg bg-text-3/50 border-text-2 border"
              }
            >
              <div className={"w-full h-auto body-1 text-text-1 opacity-100"}>
                닉네임
              </div>
              <textarea
                className={
                  "w-full h-full body-3 text-text-1 placeholder:text-text-3 resize-none bg-transparent outline-0"
                }
                placeholder={"댓글을 남겨보세요!"}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <div className={"w-full h-auto flex flex-row-reverse"}>
                <button
                  className={"caption-1 text-primary"}
                  onClick={createReply}
                >
                  제출
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
