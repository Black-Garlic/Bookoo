import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useState } from "react";
import MyPage from "../../pages/my-page/MyPage";
import NotificationPage from "../../pages/notification/NotificationPage";
import LoginModal from "../auth/LoginModal";
import cn from "classnames";
import { useRecoilValue } from "recoil";
import { popupState } from "../../../states/states";

const Layout = ({ children }: { children: ReactNode }) => {
  const popup = useRecoilValue(popupState);

  return (
    <div className={"bg-[#292929] bg-cover overflow-hidden"}>
      <Header />
      <div className={cn("book-koo", popup.login && "blur")}>
        <div className={"pt-[80px] w-screen min-h-screen"}>{children}</div>
      </div>
      <Footer />

      {popup.login && <LoginModal />}
      {popup.notification && <NotificationPage />}
      {popup.mypage && <MyPage />}
    </div>
  );
};

export default Layout;
