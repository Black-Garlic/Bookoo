import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = async (name: string, value: string, option?: any) => {
  await cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};
