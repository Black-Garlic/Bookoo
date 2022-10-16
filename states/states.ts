import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
/**
 * 사용 방법
 *  const [test, setTest] = useRecoilState(testState);
 *  get : console.log(test.isTest); => false
 *  set : setTest({...isTest : true}); => true
 */
// 예시 state
export const testState = atom({
  key: "test",
  default: {
    isTest: false,
  },
  effects_UNSTABLE: [persistAtom], // 이거 해놓으면 새로고침해도 유지되는 지속성 추가
});

/**
 * 팝업을 위한 Recoil State
 * 사용 시에 세 군데에서 사용하면 됨. (팝업 여는 open, 팝업 창 내 close, 팝업 컴포넌트 뷰)
 */
export const popupState = atom({
  key: "popup",
  default: {
    mypage: false,
    notification: false,
    login: false,
    bookScore: false,
    withdrawal: false,
    widthdrwalFail: false,
  },
});
