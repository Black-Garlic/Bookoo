import ModalLayout from "../modal/ModalLayout";
import { useRecoilState } from "recoil";
import { popupState } from "../../../states/states";
import { RecoilUtils } from "../../../utils/RecoilUtils";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";

const LoginModal = () => {
  useDisableBodyScroll();
  const [popup, setPopup] = useRecoilState(popupState);

  return (
    <ModalLayout>
      <div className={"w-full h-auto flex flex-row"}>
        <div className={"w-full h-full flex-1 title-3 text-text-1"}>
          안녕하세요! 북쿠입니다.
        </div>

        <button
          className={"w-6 h-6 flex flex-row"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // setLoginOpen(false);
            RecoilUtils.toggleModal("login", popup, setPopup);
          }}
        >
          <img className={"w-6 h-6 mr-2"} src={"/svg/x-outline.svg"} alt="x" />
        </button>
      </div>
      <div className={"w-full h-auto flex-1 body-3 text-text-1 mt-2 mb-8"}>
        로그인 하시겠어요?
        <br />
        회원 정보가 없는 경우 자동으로 회원가입으로 넘어갑니다.
      </div>
      <div
        className={"w-full h-auto body-1 text-text-1 flex flex-row text-center"}
      >
        <a
          className={"flex-1 bg-primary rounded-lg py-2"}
          href={`${process.env.LOGIN_URL}/oauth2/authorization/naver?redirect_uri=${process.env.LOGIN_REDIRECT_URL}`}
          rel={"noreferrer"}
          role={"button"}
          // onClick={() => {
          //
          //   setCookie("login", "true", { path: "/", secure: true });
          //   RecoilUtils.toggleModal("login", popup, setPopup);
          // }}
        >
          네이버 로그인 하러가기
        </a>
      </div>
    </ModalLayout>
  );
};

export default LoginModal;
