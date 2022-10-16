import ModalLayout from "../modal/ModalLayout";

interface WithdrawalFailModalProps {
  setWithdrawalOpen: any;
  setWithdrawalFailOpen: any;
}

const WithdrawalFailModal = ({
  setWithdrawalOpen,
  setWithdrawalFailOpen,
}: WithdrawalFailModalProps) => {
  return (
    <ModalLayout>
      <div className={"w-full h-auto flex flex-row"}>
        <div className={"w-full h-full flex-1 title-3 text-text-1"}>
          탈퇴에 실패하였습니다.
        </div>
        <button
          className={"w-6 h-6 flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setWithdrawalFailOpen(false);
          }}
        >
          <img className={"w-6 h-6 mr-2"} src={"svg/x-outline.svg"} alt="x" />
        </button>
      </div>
      <div className={"w-full h-auto flex-1 body-3 text-text-1 mt-2 mb-8"}>
        죄송합니다. 오류로 인하여 회원 탈퇴에 실패했습니다.
        <br />
        다시 한번 시도하시겠습니까?
      </div>
      <div className={"w-full h-auto body-1 text-text-1 flex flex-row"}>
        <button
          className={"flex-1 bg-text-2 rounded-lg py-2"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setWithdrawalFailOpen(false);
          }}
        >
          취소
        </button>
        <div className={"mx-1"} />
        <button
          className={"flex-1 bg-primary rounded-lg py-2"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setWithdrawalFailOpen(false);
            setWithdrawalOpen(true);
          }}
        >
          재시도
        </button>
      </div>
    </ModalLayout>
  );
};

export default WithdrawalFailModal;
