import NotificationRow from "./NotificationRow";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";
import { alarmState } from "../../../states/alarm";

interface NotificationListProps {
  notiList: any[];
}

const NotificationList = ({ notiList }: NotificationListProps) => {
  return (
    <div>
      {notiList && notiList.length ? (
        notiList.map((element, index) => {
          return (
            <>
              <NotificationRow notiInfo={element} />
              <div />
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotificationList;
