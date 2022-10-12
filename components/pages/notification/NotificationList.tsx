import NotificationRow from "./NotificationRow";

const NotificationList = () => {
  return (
    <div>
      <NotificationRow
        extendRow={true}
        read={true}
        isChild={false}
        hasText={false}
      />
      <div />
      <NotificationRow
        extendRow={true}
        read={false}
        isChild={true}
        hasText={false}
      />
      <div />
      <NotificationRow
        extendRow={false}
        read={true}
        isChild={false}
        hasText={true}
      />
      <div />
      <NotificationRow
        extendRow={false}
        read={false}
        isChild={false}
        hasText={false}
      />
      <div />
      <NotificationRow
        extendRow={false}
        read={false}
        isChild={false}
        hasText={true}
      />
    </div>
  );
};

export default NotificationList;
