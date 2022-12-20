import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const alarmState = atom({
  key: "alarm",
  default: {
    refresh: new Date(),
    receiver: "",
  },
  effects_UNSTABLE: [persistAtom], // 이거 해놓으면 새로고침해도 유지되는 지속성 추가
});
