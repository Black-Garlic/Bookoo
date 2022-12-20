import NotificationList from "./NotificationList";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useEffect, useState } from "react";
import SockJs from "sockjs-client";
import Stomp from "@stomp/stompjs";
import { userInfoState } from "../../../states/userInfoState";
import { getCookie } from "../../../utils/cookies";
import { UserService } from "../../../services/UserService";

interface NotificationProps {}

const Notification = () => {
  // useDisableBodyScroll();
  const [popup, setPopup] = useRecoilState(popupState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [notiList, setNotiList] = useState([]);

  useEffect(() => {
    getMyNoti();
  }, []);

  const getMyNoti = async () => {
    const res = await UserService.getMyAlarm(userInfo.id);
    console.log("res", res.alarms);
    setNotiList(res && res?.alarms && res.alarms.length > 0 ? res.alarms : []);
  };

  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed w-full h-full right-0 h-modal left-0 z-50 bg-[#292929] transition delay-50 duration-150 ease-in-out " +
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
            <NotificationList notiList={notiList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
