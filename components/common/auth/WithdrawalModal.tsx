import ModalLayout from "../modal/ModalLayout";
import { useState } from "react";
import { UserService } from "../../../services/UserService";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/userInfoState";
import { getCookie } from "../../../utils/cookies";
import { logout } from "../../../utils/user";

interface WithdrawalModalProps {
  setWithdrawalOpen: any;
  setWithdrawalFailOpen: any;
}

const WithdrawalModal = ({
  setWithdrawalOpen,
  setWithdrawalFailOpen,
}: WithdrawalModalProps) => {
  const [withdrawalText, setWithdrawalText] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const withdrawalUser = async () => {
    await UserService.withdrawalUser({
      userId: userInfo.id,
      accessToken: userInfo.accessToken,
    }).then((data) => {
      return data;
    });
  };

  return (
    <ModalLayout>
      <div className={"w-full h-auto flex flex-row"}>
        <div className={"w-full h-full flex-1 title-3 text-text-1"}>
          정말 탈퇴하시겠어요?
        </div>
        <button
          className={"w-6 h-6 flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setWithdrawalOpen(false);
          }}
        >
          <img className={"w-6 h-6 mr-2"} src={"svg/x-outline.svg"} alt="x" />
        </button>
      </div>
      <div className={"w-full h-auto flex-1 body-3 text-text-1 mt-2 mb-8"}>
        탈퇴를 진행하실 경우 기존에 작성하신 서평과 댓글이 영구적으로
        삭제됩니다. 탈퇴를 희망하시는 경우 아래 입력창에
        &ldquo;탈퇴하겠습니다&rdquo;를 입력해주세요.
      </div>
      <input
        className={
          "w-full h-auto title-3 text-text-1 bg-text-3 placeholder-text-2 outline-0 mb-8 px-4 py-2 rounded-lg"
        }
        placeholder={"탈퇴하겠습니다"}
        defaultValue={withdrawalText}
        onChange={(e) => {
          setWithdrawalText(e.target.value);
        }}
      />
      <div className={"w-full h-auto body-1 text-text-1 flex flex-row"}>
        <button
          className={"flex-1 bg-text-2 rounded-lg py-2 disabled:opacity-40"}
          disabled={withdrawalText !== "탈퇴하겠습니다"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            withdrawalUser().then(() => {
              logout(setUserInfo, "/withdrawal");
            });
          }}
        >
          확인
        </button>
        <div className={"mx-1"} />
        <button
          className={"flex-1 bg-primary rounded-lg py-2"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setWithdrawalOpen(false);
          }}
        >
          취소
        </button>
      </div>
    </ModalLayout>
  );
};

export default WithdrawalModal;
