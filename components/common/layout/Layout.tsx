import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import MyPage from "../../pages/my-page/MyPage";
import NotificationPage from "../../pages/notification/NotificationPage";
import LoginModal from "../auth/LoginModal";
import cn from "classnames";
import { useRecoilState, useRecoilValue } from "recoil";
import { popupState } from "../../../states/states";
import { useRouter } from "next/router";
import { userInfoState } from "../../../states/userInfoState";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import { getCookie } from "../../../utils/cookies";
import { UserService } from "../../../services/UserService";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useDidMountEffect(async () => {
    if (!router.pathname.includes("/login")) {
      const authorization = getCookie("accessToken");

      if (authorization !== undefined) {
        await UserService.getUserInfo({ accessToken: authorization }).then(
          (data) => {
            setUserInfo(data.data);
          }
        );
      }
    }
  }, [router, getCookie, setUserInfo]);

  const popup = useRecoilValue(popupState);

  const includeHeader = () => {
    return (
      !router.pathname.includes("write") && !router.pathname.includes("update")
    );
  };

  return (
    <div className={"bg-[#292929] bg-cover overflow-hidden relative"}>
      {includeHeader() && <Header />}
      <div className={cn("book-koo", popup.login && "blur")}>
        <div
          className={
            " w-screen min-h-screen " + (includeHeader() ? "pt-[80px]" : "")
          }
        >
          {children}
        </div>
      </div>
      <Footer />

      {popup.login && <LoginModal />}
      {popup.notification && <NotificationPage />}
      {popup.mypage && <MyPage />}
    </div>
  );
};

export default Layout;
