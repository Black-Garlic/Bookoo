import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [popup, setPopup] = useRecoilState(popupState);
  const router = useRouter();

  return (
    // GNB
    <div className={"w-full h-[80px] flex flex-row bg-[#292929] p-7 fixed"}>
      {/* Left Area */}
      <div className={"flex text-text-1 justify-star"}>
        {/* Logo */}
        <div className={"w-40 sub-title-2 font-bold"}>
          <Link href={"/main"}>Book-koo</Link>
        </div>
      </div>
      {/* Search Bar */}
      <div className={"text-text-1 flex-1 ml-40"} />
      {/* Right Area */}
      <div className={"flex flex-row text-text-1 justify-end"}>
        {!router.pathname.includes("/search") && (
          <Link href={"/search"}>
            <button className={"w-6 h-6"}>
              <img src={"/svg/uil_search-alt.svg"} alt={"search"} />
            </button>
          </Link>
        )}
        <div className={"w-6 h-6"} />
        <button className={"w-6 h-6"}>
          <img src={"/svg/uil_pen.svg"} alt={"pen"} />
        </button>
        <div className={"w-6 h-6"} />
        <button
          className={"w-6 h-6"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // setNotificationOpen(true);
            RecoilUtils.toggleModal("notification", popup, setPopup);
          }}
        >
          <img src={"/svg/uil_bell.svg"} alt={"bell"} />
        </button>
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
        <div className={"w-6 h-6"} />
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
      </div>
    </div>
  );
};
export default Header;
