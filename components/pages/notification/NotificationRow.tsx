import cn from "classnames";

interface NotificationRowProps {
  notiInfo: any;
}

const NotificationRow = ({ notiInfo }: NotificationRowProps) => {
  const dateString = (date: Date) => {
    const target = new Date(date);
    return (
      target.getFullYear() +
      "-" +
      (Number(target.getMonth()) + 1) +
      "-" +
      (Number(target.getDate()) < 10
        ? "0" + target.getDate()
        : Number(target.getDate()))
    );
  };
  return (
    <>
      {notiInfo.alarmType === "COMMENT" && (
        <div className={"w-full h-auto flex flex-row "}>
          <div className={"w-32 h-auto"}>
            <div className={"w-full h-full"}>
              <div className={"w-[50px] h-full ml-3 mr-16 flex flex-col"}>
                {<img src={notiInfo.image} />}
              </div>
            </div>
          </div>
          <div className={"w-full h-full flex-1 mb-12"}>
            <div className={"w-full h-auto flex-1 flex flex-col"}>
              <div className={cn("w-full h-auto title-2 text-text-1")}>
                000 님이 회원님의 글에 댓글을 남겼습니다.
              </div>
              <div className={"w-full h-auto flex-1 body-3 text-text-1"}>
                글이 참 재밌네요.
              </div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {notiInfo.bookName} / {notiInfo.bookAuthor}
              </div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {dateString(notiInfo.createdDate)}
              </div>
            </div>
          </div>
        </div>
      )}
      {notiInfo.alarmType === "Like" && (
        <div className={"w-full h-auto flex flex-row "}>
          <div className={"w-32 h-auto"}>
            <div className={"w-full h-full"}>
              <div className={"w-[50px] h-full ml-3 mr-16 flex flex-col"}>
                {<img src={notiInfo.image} />}
              </div>
            </div>
          </div>
          <div className={"w-full h-full flex-1 mb-12"}>
            <div className={"w-full h-auto flex-1 flex flex-col"}>
              <div className={cn("w-full h-auto title-2 text-text-1")}>
                000 님이 회원님의 글을 좋아합니다
              </div>
              <div className={"w-full h-auto flex-1 body-3 text-text-1"}></div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {notiInfo.bookName} / {notiInfo.bookAuthor}
              </div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {dateString(notiInfo.createdDate)}
              </div>
            </div>
          </div>
        </div>
      )}
      {notiInfo.alarmType === "REPLY" && (
        <div className={"w-full h-auto flex flex-row "}>
          <div className={"w-32 h-auto"}>
            <div className={"w-full h-full"}>
              <div className={"w-[50px] h-full ml-3 mr-16 flex flex-col"}>
                {<img src={notiInfo.image} />}
                {/*{extendRow && (*/}
                {/*  <>*/}
                {/*    {isChild ? (*/}
                {/*      <div className={"w-0 h-6 border ml-6"} />*/}
                {/*    ) : (*/}
                {/*      <div className={"w-0 h-full border ml-6"} />*/}
                {/*    )}*/}
                {/*  </>*/}
                {/*)}*/}
              </div>
            </div>
          </div>
          <div className={"w-full h-full flex-1 mb-12"}>
            <div className={"w-full h-auto flex-1 flex flex-col"}>
              <div className={cn("w-full h-auto title-2 text-text-1")}>
                000 님이 회원님의 글을 좋아합니다
              </div>
              <div className={"w-full h-auto flex-1 body-3 text-text-1"}></div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {notiInfo.bookName} / {notiInfo.bookAuthor}
              </div>
              <div className={"w-full h-auto caption-1 text-text-2"}>
                {dateString(notiInfo.createdDate)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationRow;
