import { useState } from "react";
import MyBookList from "./MyBookList";
import MyCommentList from "./MyCommentList";
import MyArticleList from "./MyArticleList";
import MyFavoriteList from "./MyFavoriteList";
import MenuItem from "./MenuItem";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import cn from "classnames";
import WithdrawalModal from "../../common/auth/WithdrawalModal";
import WithdrawalFailModal from "../../common/auth/WithdrawalFailModal";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { removeCookie } from "../../../utils/cookies";
import { userInfoState } from "../../../states/userInfoState";

interface MyPageProps {}

const menuItemList = [
  { menuTitleKor: "내 책장", menuTitleEng: "MyBook" },
  { menuTitleKor: "내 댓글", menuTitleEng: "MyComment" },
  { menuTitleKor: "내 서평", menuTitleEng: "MyArticle" },
  { menuTitleKor: "내가 좋아하는 서평", menuTitleEng: "MyFavorite" },
];

const MyPage = () => {
  useDisableBodyScroll();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [popup, setPopup] = useRecoilState(popupState);

  const [editNickname, setEditNickname] = useState(false);
  const [nickName, setNickname] = useState(userInfo.name);
  const [selectedMenu, setSelectedMenu] = useState("MyBook");
  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const [withdrawalFailOpen, setWithdrawalFailOpen] = useState(false);

  let view = <MyBookList isEmpty={true} />;

  if (selectedMenu === "MyBook") {
    view = <MyBookList isEmpty={false} />;
  } else if (selectedMenu === "MyComment") {
    view = <MyCommentList />;
  } else if (selectedMenu === "MyArticle") {
    view = <MyArticleList />;
  } else if (selectedMenu === "MyFavorite") {
    view = <MyFavoriteList />;
  }

  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-[#292929]"
      }
    >
      <div
        className={cn(
          "w-screen h-screen flex flex-row",
          (withdrawalOpen || withdrawalFailOpen) && "blur"
        )}
      >
        {/* Left Area */}
        <div
          className={
            "w-[420px] h-full p-14 flex flex-col fixed top-0 right-0 left-0 bg-[#363636] overflow-y-scroll scrollbar-hide"
          }
        >
          {/* 닉네임 Area */}
          <div className={"w-full h-auto mt-4 text-text-1"}>
            {editNickname ? (
              <>
                <div className={"title-2"}>
                  <input
                    type={"text"}
                    className={
                      "w-[190px] text-[32px] bg-transparent placeholder-[#6D6D6D] outline-0 border-b"
                    }
                    value={nickName}
                    onChange={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      setNickname(e.target.value);
                    }}
                  />
                  님,
                  <br />
                  안녕하세요
                </div>
              </>
            ) : (
              <>
                <div className={"title-2 "}>
                  <p className={"break-words"}>
                    {nickName}님,
                    <br />
                    안녕하세요
                  </p>
                </div>
              </>
            )}
            {/*<button*/}
            {/*  onClick={(e) => {*/}
            {/*    e.preventDefault();*/}
            {/*    e.stopPropagation();*/}

            {/*    setEditNickname(!editNickname);*/}
            {/*  }}*/}
            {/*  className={"mt-2 body-2"}*/}
            {/*>*/}
            {/*  닉네임 수정*/}
            {/*</button>*/}
          </div>
          {/* 메뉴 Area */}
          <div
            className={
              "w-full h-auto mt-[50px] flex-1 flex flex-col sub-title-1"
            }
          >
            {menuItemList.map((menuItem, index) => (
              <MenuItem
                key={index}
                menuTitleKor={menuItem.menuTitleKor}
                menuTitleEng={menuItem.menuTitleEng}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
            ))}
          </div>
          {/* Footer */}
          <div className={"w-full h-auto mt-[66px] caption-1 text-text-1"}>
            <div className={"w-full h-auto"}>
              서비스 사용 중 불편한 사항은
              <br />
              book-koo@gmail.com
              <br />
              으로 연락부탁드립니다.
            </div>
            <div className={"w-full h-auto mt-4"}>버전 정보 0.0.1</div>
            <div className={"w-full h-auto mt-4 flex flex-row"}>
              <button
                className={"flex-1 text-start"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  removeCookie("accessToken");
                  removeCookie("refreshToken");
                  window.location.href = "/main";
                }}
              >
                로그아웃
              </button>
              <button
                className={"flex-1 text-start"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setWithdrawalOpen(true);
                }}
              >
                회원 탈퇴
              </button>
            </div>
          </div>
        </div>
        {/* Right Area */}
        <div className={"w-full h-auth ml-[480px] py-8 pl-16 pr-8"}>
          <button
            className={"w-full h-6 flex flex-row"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              RecoilUtils.toggleModal("mypage", popup, setPopup);
            }}
          >
            <div className={"flex-1"} />
            <img
              className={"w-6 h-6 mr-2"}
              src={"/svg/x-outline.svg"}
              alt="x"
            />
          </button>
          {/* Header */}
          <div className={"w-full h-auto mt-24 pb-6"}>
            {
              //   if (selectedMenu === "MyBook") {
              //   view = <MyBookList isEmpty={false} />;
              // } else if (selectedMenu === "MyComment") {
              //   view = <MyCommentList />;
              // } else if (selectedMenu === "MyArticle") {
              //   view = <MyArticleList />;
              // } else if (selectedMenu === "MyFavorite") {
              //   view = <MyFavoriteList />;
              // }
              selectedMenu === "MyBook" && <MyBookList isEmpty={false} />
            }
            {selectedMenu === "MyComment" && <MyCommentList />}
            {selectedMenu === "MyArticle" && <MyArticleList />}
            {selectedMenu === "MyFavorite" && <MyFavoriteList />}
          </div>
        </div>
      </div>
      {withdrawalOpen && (
        <WithdrawalModal
          setWithdrawalOpen={setWithdrawalOpen}
          setWithdrawalFailOpen={setWithdrawalFailOpen}
        />
      )}
      {withdrawalFailOpen && (
        <WithdrawalFailModal
          setWithdrawalOpen={setWithdrawalOpen}
          setWithdrawalFailOpen={setWithdrawalFailOpen}
        />
      )}
    </div>
  );
};

export default MyPage;
