import { getCookie } from "../utils/cookies";

export const axiosHeader = {
  headers: {
    accessToken: `${getCookie("accessToken")}`,
    refreshToken: `${getCookie("refreshToken")}`,
  },
};
