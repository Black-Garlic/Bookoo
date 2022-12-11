import { getCookie } from "../utils/cookies";

export const axiosHeader = {
  headers: {
    Authorization: `${getCookie("accessToken")}`,
  },
};
