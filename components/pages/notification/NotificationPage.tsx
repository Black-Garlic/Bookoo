import NotificationList from "./NotificationList";

interface NotificationProps {
  setNotificationOpen: any;
}

const Notification = ({ setNotificationOpen }: NotificationProps) => {
  return (
    <div
      className={
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-[#292929]"
      }
    >
      <div className={"w-screen h-screen flex flex-col"}>
        <div className={"w-full h-auth flex flex-row-reverse"}>
          <button
            className={"w-6 h-6 my-8 mr-8"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setNotificationOpen(false);
            }}
          >
            <div className={"flex-1"} />
            <img className={"w-6 h-6 mr-2"} src={"svg/x-outline.svg"} alt="x" />
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
