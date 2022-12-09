import NotificationList from "./NotificationList";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";

interface NotificationProps {}

const Notification = () => {
  // useDisableBodyScroll();
  const [popup, setPopup] = useRecoilState(popupState);

  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed w-full h-full right-0 left-0 z-50 bg-[#292929] transition delay-50 duration-150 ease-in-out " +
        (popup.notification ? " top-0" : "top-[-100%]")
      }
    >
      <div className={"flex flex-col"}>
        <div className={"w-full h-auth flex flex-row-reverse"}>
          <button
            className={"w-6 h-6 my-8 mr-8"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              RecoilUtils.toggleModal("notification", popup, setPopup);

              // setNotificationOpen(false);
            }}
          >
            <div className={"flex-1"} />
            <img
              className={"w-6 h-6 mr-2"}
              src={"/svg/x-outline.svg"}
              alt="x"
            />
          </button>
        </div>
        <div className={"w-full h-auto mt-6 px-40 pb-6"}>
          <div className={"w-full h-auto title-2 text-text-1 mb-10"}>알림</div>
          <div>
            <NotificationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
