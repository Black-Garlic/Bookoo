import { GetBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
import API from "../utils/api";
// const domain = `http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1/books/`;
axios.defaults.baseURL =
  "http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1";

export const BookService = {
  /**
   * 도서 목록 조회
   */

  getBookList: async (param: GetBookListRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url = `/books/` + query;
    const res = await axios.get(url);
    return res;
  },

  /**
   * 검색 관련 종합 데이터까지 필요한 경우
   */
  searchBook: async (param: searchBookRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url = `/total/` + query;
    const res = await axios.post(url);
    return res;
  },

  /**
   * 도서 세부 정보 조회
   */
  getBookDetail: async (param: number) => {
    const { data } = await axios.get(`/book/${param}`);
    return data;
  },
};
