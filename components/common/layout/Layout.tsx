import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useState } from "react";
import MyPage from "../../pages/my-page/MyPage";
import NotificationPage from "../../pages/notification/NotificationPage";

const Layout = ({ children }: { children: ReactNode }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false);

  return (
    <div className={"bg-[#292929] bg-cover"}>
      <Header
        setNotificationOpen={setNotificationOpen}
        setMyPageOpen={setMyPageOpen}
      />
      <div className={"book-koo"}>
        <div className={"pt-[80px] w-screen min-h-screen"}>{children}</div>
      </div>
      <Footer />

      {notificationOpen && (
        <NotificationPage setNotificationOpen={setNotificationOpen} />
      )}
      {myPageOpen && <MyPage setMyPageOpen={setMyPageOpen} />}
    </div>
  );
};

export default Layout;
