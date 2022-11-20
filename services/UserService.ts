import axios from "axios";
import {
  AddReplyRequestData,
  CreateReplyRequestData,
  UpdateReplyRequestData,
} from "../typings/Reply";
import { addShelfRequest, checkShelfRequest } from "../typings/User";
const domain = "http://ec2-34-237-181-231.compute-1.amazonaws.com/api/vi";

export const UserService = {
  /**
   * 내 책장에 책이 있는지 확인하기
   */
  checkShelf: async (param: checkShelfRequest) => {
    const { data } = await axios.get(
      `${domain}/shelf/${param.userId}/${param.bookId}`
    );
    return data;
  },

  /**
   * 내 책장에 책 추가하기
   */
  addShelf: async (param: addShelfRequest) => {
    const { data } = await axios.post(
      `${domain}/shelf/${param.userId}/${param.bookId}`
    );
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
  getMyShelfBook: async (param: string) => {
    const { data } = await axios.post(`${domain}/shelf/${param}`);
    return data;
  },
};
