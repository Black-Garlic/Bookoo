import { removeCookie } from "./cookies";

export const logout = (setUserInfo: any, redirectUrl: string) => {
  removeCookie("accessToken");
  removeCookie("refreshToken");

  setUserInfo({
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
  });

  window.location.href = redirectUrl;
};
