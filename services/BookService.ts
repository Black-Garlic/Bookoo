import { GetBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
import API from "../utils/api";
import { axiosHeader } from "../constant/axiosHeader";
const domain = `http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1`;
// axios.defaults.baseURL =
//   "http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1";

export const BookService = {
  /**
   * 도서 목록 조회
   */

  getBookList: async (param: GetBookListRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url = `${domain}/books/` + query;
    const res = await axios.get(url, axiosHeader);
    return res;
  },

  /**
   * 검색 관련 종합 데이터까지 필요한 경우
   */
  searchBook: async (param: searchBookRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url = `${domain}/total/` + query;
    const res = await axios.post(url, axiosHeader);
    return res;
  },

  /**
   * 도서 세부 정보 조회
   */
  getBookDetail: async (param: number) => {
    const { data } = await axios.get(`${domain}/book/${param}`, axiosHeader);
    return data;
  },
};
