import axios from "axios";
import {
  addShelfRequest,
  checkShelfRequest,
  deleteShelfRequest,
} from "../typings/User";
import { axiosHeader } from "../constant/axiosHeader";

const domain = `${process.env.USER_API_DOMAIN}/api/v1`;

export const UserService = {
  getUserInfo: async (param: { accessToken: string }) => {
    const { data } = await axios.get(
      `http://ec2-34-237-181-231.compute-1.amazonaws.com/user/me`,
      {
        headers: {
          Authorization: `${param.accessToken}`,
        },
      }
    );
    return { data };
  },
  updateNickname: async (param: {
    userId: string;
    nickname: string;
    accessToken: string;
  }) => {
    const { data } = await axios.patch(
      `${domain}/myPage/nickname/${param.userId}/${param.nickname}`,
      {
        headers: {
          Authorization: `${param.accessToken}`,
        },
      }
    );
    return { data };
  },
  withdrawalUser: async (param: { userId: string; accessToken: string }) => {
    const { data } = await axios.delete(`${domain}/myPage/${param.userId}`, {
      headers: {
        Authorization: `${param.accessToken}`,
      },
    });
    return { data };
  },
  /**
   * 내 책장에 책이 있는지 확인하기
   */
  checkShelf: async (param: checkShelfRequest) => {
    const { data } = await axios.get(
      `${domain}/shelf/${param.userId}/${param.bookId}`,
      axiosHeader
    );
    return { data };
  },

  /**
   * 내 책장에 책 추가하기
   */
  addShelf: async (param: addShelfRequest) => {
    const { data } = await axios.post(
      `${domain}/shelf/${param.userId}/${param.bookId}`,
      axiosHeader
    );
    return data;
  },

  deleteShelf: async (param: deleteShelfRequest) => {
    const { data } = await axios.delete(
      `${domain}/shelf/${param.userId}/${param.bookId}`,
      axiosHeader
    );
    return data;
  },

  getMyReplies: async () => {
    const { data } = await axios.get(`${domain}/myPage/replies/0`, axiosHeader);
    return data;
  },

  /**
   * 내 책장에서 서평 미작성 도서 리스트 보기
   */
  checkUnwritten: async () => {
    // const { data } = await axios.post(
    //     `${domain}/shelf/${param.userId}/${param.bookId}`
    // );
    // return data;
  },
  /**
   * 내 책장 모아보기
   */
  getMyShelfBook: async (userId: number) => {
    const { data } = await axios.get(`${domain}/shelf/${userId}`, axiosHeader);
    return data;
  },
};
