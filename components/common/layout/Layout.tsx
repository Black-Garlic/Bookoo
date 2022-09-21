import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useState } from "react";
import MyPage from "../../pages/my-page/MyPage";

const Layout = ({ children }: { children: ReactNode }) => {
  const [myPageOpen, setMyPageOpen] = useState(false);

  return (
    <div className={"bg-[#292929] bg-cover"}>
      <Header setMyPageOpen={setMyPageOpen} />
      <div className={"pt-[80px] w-screen min-h-screen"}>{children}</div>
      <Footer />

      {myPageOpen && <MyPage setMyPageOpen={setMyPageOpen} />}
    </div>
  );
};

export default Layout;
