import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useState } from "react";
import MyPage from "../../pages/my-page/MyPage";
import NotificationPage from "../../pages/notification/NotificationPage";
import LoginModal from "../auth/LoginModal";
import cn from "classnames";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);

  return (
    <div className={"bg-[#292929] bg-cover"}>
      <Header
        setLoginOpen={setLoginOpen}
        setNotificationOpen={setNotificationOpen}
        setMyPageOpen={setMyPageOpen}
      />
      <div className={cn("book-koo", loginOpen && "blur")}>
        <div className={"pt-[80px] w-screen min-h-screen"}>{children}</div>
      </div>
      <Footer />

      {loginOpen && <LoginModal setLoginOpen={setLoginOpen} />}
      {notificationOpen && (
        <NotificationPage setNotificationOpen={setNotificationOpen} />
      )}
      {myPageOpen && <MyPage setMyPageOpen={setMyPageOpen} />}
    </div>
  );
};

export default Layout;
