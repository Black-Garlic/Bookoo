import { NextPage } from "next";
import BookDetailInfo from "../../components/common/book/BookDetailInfo";
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
import BookArticleCard from "../../components/pages/book/BookArticleCard";
import SockJs from "sockjs-client";
import Stomp from "@stomp/stompjs";
import { alarmState } from "../../states/alarm";
import useDidMountEffect from "../../hooks/useDidMountEffect";

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
  const [bookInfo, setBookInfo] = useState({
    isbn: 0,
  });
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [replyText, setReplyText] = useState("");
  const [refresh, setRefresh] = useState(new Date());
  const [likeCount, setLikeCount] = useState(0);
  const [otherArticles, setOtherArticles] = useState([]);
  const [alarm, setAlarm] = useRecoilState(alarmState);

  useEffect(() => {
    setLoginCookie(getCookie("accessToken"));
  }, [getCookie, setLoginCookie]);

  useEffect(() => {
    if (id) {
      getArticleDetail().then(() => {
        getArticleLikeCount();
      });
    }
  }, [id, refresh]);

  useDidMountEffect(() => {
    const sockJs = new SockJs(
      "http://ec2-34-237-181-231.compute-1.amazonaws.com/ws"
    );
    // console.log(sockJs);
    const stomp = Stomp.over(sockJs);
    //console.log(stomp.subscribe)
    //console.log(stomp.send)
    stomp.connect({}, function () {
      if (alarm.receiver !== "")
        stomp.send(
          "/pub/alarm",
          {
            Authorization: `${getCookie("accessToken")}`,
          },
          JSON.stringify({ userId: alarm.receiver })
        );
    });
  }, [alarm.refresh]);

  const toggleLike = async () => {
    const request = new likeRequest();
    request.userId = userInfo.id;
    request.articleId = Number(id);
    const res = await ArticleService.likeArticle(request);
    if (res.liked) {
      setAlarm({
        ...alarm,
        receiver: articleDetail.userId,
        refresh: new Date(),
      });
    }
    getArticleDetail();
    getArticleLikeCount();
  };

  const getArticleDetail = async () => {
    const getArticleDetailRequest = new getArticleDetailRequestData();
    getArticleDetailRequest.articleId = Number(id);
    getArticleDetailRequest.userId = userInfo.id;
    // getArticleDetailRequest.bookId = 9788960213180;
    const res = await ArticleService.getArticleDetail(getArticleDetailRequest);
    setArticleDetail(res);
    setReplyList(res.reply);
    setBookInfo(res.book);
    getOtherArticle(res.book.isbn);
  };

  const getArticleLikeCount = async () => {
    const res = await ArticleService.getLikesCount(Number(id));
    setLikeCount(res);
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
        createReplyRequest.userId = userInfo.id;
        createReplyRequest.content = replyText;
        const res = await ReplyService.createReply(createReplyRequest);
        setReplyText("");
        setRefresh(new Date());
        setAlarm({
          ...alarm,
          receiver: articleDetail.userId,
          refresh: new Date(),
        });
      }
    }
  };
  const getOtherArticle = async (bookId: number) => {
    const res = await ArticleService.getOtherArticles(bookId);
    setOtherArticles(res);
  };

  return (
    <div className={"w-screen h-full flex flex-row px-40 pt-20"}>
      <div className={"w-72 h-auto"}>
        <BookDetailInfo bookInfo={bookInfo} loginCookie={loginCookie} />
        <div className={"my-10"} />
        {otherArticles && otherArticles.length > 0 && (
          <div className={"w-full h-auto mb-12"}>
            <div className={"body-1 text-text-3 mb-1 px-3"}>서평 리스트</div>
            <div className={"flex flex-col gap-2"}>
              {/*<BookArticleCol />*/}
              {otherArticles.map((element: any, index) => {
                return (
                  <BookArticleCard
                    type={"article"}
                    key={element.articleId}
                    articleInfo={element}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className={"w-full h-auto flex-1 ml-32"}>
        <div className={"flex flex-1 flex-col px-6 mb-4"}>
          <div
            className={
              "w-full h-auto body-3 text-text-1 flex flex-col lg:flex-row mb-2"
            }
          >
            <div className={"flex flex-row"}>
              <div>
                {articleDetail?.createdAt[0]}/{articleDetail?.createdAt[1]}/
                {articleDetail?.createdAt[2]}
              </div>
              {/*<div className={"mx-2.5"}>*</div>*/}
              {/*<div>1회차</div>*/}
            </div>
            <div className={"flex-1"} />
            {Number(articleDetail.userId) === userInfo.id && (
              <div className={"flex flex-row caption-1"}>
                <button
                  className={
                    "px-2 py-1 border border-primary rounded-lg bg-primary"
                  }
                >
                  수정{}
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
          <div
            className={
              "w-full h-auto flex flex-col-reverse lg:flex-row mb-6 items-start lg:items-center"
            }
          >
            <div className={"title-3 text-text-1 mr-1"}>닉네임</div>
            <div
              className={
                "h-10 flex flex-row items-center pl-0 lg:pl-2 mb-2 lg:mb-0"
              }
            >
              {/*<StarCount />*/}
              {[0, 1, 2, 3, 4].map((element, index) => {
                return (
                  <div className={"w-10 h-10 -ml-1.5"} key={index}>
                    <img
                      src={"/svg/star.svg"}
                      alt={"star"}
                      className={"w-10 h-10"}
                    />
                  </div>
                );
              })}
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
                <div className={"w-auto"}>{likeCount}</div>
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
                      articleId={articleDetail.articleId}
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
                {userInfo.name}
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
