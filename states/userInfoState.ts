import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userInfoState = atom({
  key: "userInfo",
  default: {
    id: 0,
    email: "",
    name: "",
    role: "",
    picture: "",
    accessToken: "",
    refreshToken: "",
    authProvider: "",
    createdDate: "",
    modifiedDate: "",
  },
  effects_UNSTABLE: [persistAtom], // 이거 해놓으면 새로고침해도 유지되는 지속성 추가
});
