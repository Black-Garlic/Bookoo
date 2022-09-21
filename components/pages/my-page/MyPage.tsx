import { useState } from "react";
import MyBookList from "./MyBookList";
import MyCommentList from "./MyCommentList";
import MyReviewList from "./MyReviewList";
import MyFavoriteList from "./MyFavoriteList";
import MenuItem from "./MenuItem";

interface MyPageProps {
  setMyPageOpen: any;
}

const menuItemList = [
  { menuTitleKor: "내 책장", menuTitleEng: "MyBook" },
  { menuTitleKor: "내 댓글", menuTitleEng: "MyComment" },
  { menuTitleKor: "내 서평", menuTitleEng: "MyReview" },
  { menuTitleKor: "내가 좋아하는 서평", menuTitleEng: "MyFavorite" },
  { menuTitleKor: "내 책장 Empty", menuTitleEng: "MyBook-Empty" },
  { menuTitleKor: "내 댓글 Empty", menuTitleEng: "MyComment-Empty" },
  { menuTitleKor: "내 서평 Empty", menuTitleEng: "MyReview-Empty" },
  {
    menuTitleKor: "내가 좋아하는 서평 Empty",
    menuTitleEng: "MyFavorite-Empty",
  },
];

const MyPage = ({ setMyPageOpen }: MyPageProps) => {
  const [editNickname, setEditNickname] = useState(false);
  const [nickName, setNickname] = useState("닉네임");
  const [selectedMenu, setSelectedMenu] = useState("MyBook");

  let view = <MyBookList isEmpty={true} />;

  if (selectedMenu === "MyBook") {
    view = <MyBookList isEmpty={false} />;
  } else if (selectedMenu === "MyComment") {
    view = <MyCommentList isEmpty={false} />;
  } else if (selectedMenu === "MyReview") {
    view = <MyReviewList isEmpty={false} />;
  } else if (selectedMenu === "MyFavorite") {
    view = <MyFavoriteList isEmpty={false} />;
  } else if (selectedMenu === "MyBook-Empty") {
    view = <MyBookList isEmpty={true} />;
  } else if (selectedMenu === "MyComment-Empty") {
    view = <MyCommentList isEmpty={true} />;
  } else if (selectedMenu === "MyReview-Empty") {
    view = <MyReviewList isEmpty={true} />;
  } else if (selectedMenu === "MyFavorite-Empty") {
    view = <MyFavoriteList isEmpty={true} />;
  }

  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-[#292929]"
      }
    >
      <div className={"w-screen h-screen flex flex-row"}>
        {/* Left Area */}
        <div
          className={
            "w-[340px] h-full p-14 flex flex-col fixed top-0 right-0 left-0 bg-[#363636]"
          }
        >
          {/* 닉네임 Area */}
          <div className={"w-full h-[122px] mt-4 text-white "}>
            {editNickname ? (
              <>
                <div className={"text-[32px]"}>
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
                <div className={"text-[32px]"}>
                  {nickName}님,
                  <br />
                  안녕하세요
                </div>
              </>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setEditNickname(!editNickname);
              }}
              className={"mt-2"}
            >
              닉네임 수정
            </button>
          </div>
          {/* 메뉴 Area */}
          <div className={"w-full h-auto mt-[66px] flex-1 flex flex-col"}>
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
          <div className={"w-full h-auto mt-[66px] text-white"}>
            <div className={"w-full h-auto"}>
              서비스 사용 중 불편한 사항은
              <br />
              book-koo@gmail.com
              <br />
              으로 연락부탁드립니다.
            </div>
            <div className={"w-full h-auto mt-4"}>버전 정보 0.0.1</div>
            <div className={"w-full h-auto mt-4 flex flex-row"}>
              <button className={"flex-1 text-start"}>로그아웃</button>
              <button className={"flex-1 text-start"}>회원 탈퇴</button>
            </div>
          </div>
        </div>
        {/* Right Area */}
        <div className={"w-full h-auth ml-[340px] py-8 pl-28 pr-8"}>
          <button
            className={"w-full h-6 flex flex-row"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setMyPageOpen(false);
            }}
          >
            <div className={"flex-1"} />
            <img className={"w-6 h-6 mr-2"} src={"svg/x-outline.svg"} alt="x" />
          </button>
          {/* Header */}
          <div className={"w-full h-auto mt-24 pb-6"}>{view}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
