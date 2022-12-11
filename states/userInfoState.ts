import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: {
    id: 0,
    email: "",
    name: "",
    role: "",
    picture: "",
    refreshToken: "",
    authProvider: "",
    createdDate: "",
    modifiedDate: "",
  },
});
