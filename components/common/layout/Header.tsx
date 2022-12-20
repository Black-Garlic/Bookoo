import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookie } from "../../../utils/cookies";
import { useEffect, useState } from "react";
import SockJs from "sockjs-client";
import Stomp from "@stomp/stompjs";
import { userInfoState } from "../../../states/userInfoState";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const loginCookie = getCookie("accessToken");
  const [popup, setPopup] = useRecoilState(popupState);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const [hasNew, setHasNew] = useState(false);

  useEffect(() => {
    if (loginCookie) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [loginCookie, setLogin]);

  useEffect(() => {
    const sockJs = new SockJs(
      "http://ec2-34-237-181-231.compute-1.amazonaws.com/ws"
    );
    // console.log(sockJs);
    const stomp = Stomp.over(sockJs);
    //console.log(stomp.subscribe)
    //console.log(stomp.send)
    stomp.connect({}, function () {
      stomp.subscribe("/sub/alarm/" + userInfo.id, function (chat) {
        var content = JSON.parse(chat.body);
        var str = "";
        if (chat) setHasNew(true);
      });
      // stomp.send(
      //   "/pub/alarm",
      //   {
      //     Authorization: `${getCookie("accessToken")}`,
      //   },
      //   JSON.stringify({ userId: userInfo.id })
      // );
    });
  }, []);

  return (
    // GNB
    <div
      className={"w-full h-[80px] flex flex-row bg-[#292929] py-8 px-12 fixed"}
    >
      {/* Left Area */}
      <div className={"flex text-text-1 justify-star"}>
        {/* Logo */}
        <div className={"w-40 sub-title-2 font-bold"}>
          <Link href={"/main"}>
            <img
              src={"/image/logo.png"}
              className={"h-[36px] object-contain cursor-pointer"}
            />
          </Link>
        </div>
      </div>
      {/* Search Bar */}
      <div className={"text-text-1 flex-1 ml-40"} />
      {/* Right Area */}
      <div className={"flex flex-row text-text-1 justify-end"}>
        {login ? (
          <>
            {!router.pathname.includes("/search") && (
              <Link href={"/search"}>
                <button className={"w-6 h-6"}>
                  <img src={"/svg/uil_search-alt.svg"} alt={"search"} />
                </button>
              </Link>
            )}
            <div className={"w-6 h-6"} />
            <button
              className={"w-6 h-6"}
              onClick={() => router.push("/article/write")}
            >
              <img src={"/svg/uil_pen.svg"} alt={"pen"} />
            </button>
            <div className={"w-6 h-6"} />
            <div className={"relative h-full"}>
              {hasNew && (
                <div
                  className={
                    "absolute top-0 bg-red-500 -right-1 h-1.5 w-1.5 rounded-full"
                  }
                ></div>
              )}
              <button
                className={"w-6 h-6"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  // setNotificationOpen(true);
                  setHasNew(false);
                  RecoilUtils.toggleModal("notification", popup, setPopup);
                }}
              >
                <img src={"/svg/uil_bell.svg"} alt={"bell"} />
              </button>
            </div>
            <div className={"w-6 h-6"} />
            <button
              className={"w-6 h-6"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                RecoilUtils.toggleModal("mypage", popup, setPopup);
                // setMyPageOpen(true);
              }}
            >
              <img src={"/svg/uil_grin.svg"} alt={"grin"} />
            </button>
          </>
        ) : (
          <button
            className={"w-6 h-6"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              RecoilUtils.toggleModal("login", popup, setPopup);
              // setLoginOpen(true);
            }}
          >
            <img src={"/svg/uil_grin.svg"} alt={"grin"} />
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
