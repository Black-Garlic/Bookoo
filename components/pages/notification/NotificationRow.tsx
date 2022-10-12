import cn from "classnames";

interface NotificationRowProps {
  read: boolean;
  extendRow: boolean;
  isChild: boolean;
  hasText: boolean;
}

const NotificationRow = ({
  read,
  extendRow,
  isChild,
  hasText,
}: NotificationRowProps) => {
  console.log(extendRow);

  return (
    <>
      <div className={"w-full h-auto flex flex-row "}>
        <div className={"w-32 h-auto"}>
          <div className={"w-full h-full"}>
            <div className={"w-[50px] h-full ml-3 mr-16 flex flex-col"}>
              {!isChild && <img src={"/image/book_sample.png"} />}
              {extendRow && (
                <>
                  {isChild ? (
                    <div className={"w-0 h-6 border ml-6"} />
                  ) : (
                    <div className={"w-0 h-full border ml-6"} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={"w-full h-full flex-1 mb-12"}>
          <div className={"w-full h-auto flex-1 flex flex-col"}>
            <div
              className={cn(
                "w-full h-auto title-2",
                read ? "text-text-2" : "text-text-1"
              )}
            >
              000 님이 회원님의 글을 좋아합니다
            </div>
            {hasText && (
              <div className={"w-full h-auto flex-1 body-3 text-text-1"}>
                댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
                댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
              </div>
            )}
            <div className={"w-full h-auto caption-1 text-text-2"}>
              책 제목 / 책 저자
            </div>
            <div className={"w-full h-auto caption-1 text-text-2"}>
              2022-08-22
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationRow;
