import { GetBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
import API from "../utils/api";
// const domain = `http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1/books/`;

export const BookService = {
  /**
   * 도서 목록 조회
   */
  getBookList: async (param: GetBookListRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const { data } = await API.get(`/api/vi/books/${query}`);
    return data;
  },

  // getBookList: async (param: GetBookListRequest) => {
  //   const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
  //     param.display
  //   }&start=${param.start}`;
  //
  //   const url = domain + query;
  //   const res = await axios
  //     .get(url)
  //     .then(function (response) {
  //       console.log("성공", response);
  //       return response;
  //     })
  //     .catch(function (error) {
  //       console.log("실패");
  //     });
  //   return res;
  // },

  /**
   * 검색 관련 종합 데이터까지 필요한 경우
   */
  searchBook: async (param: searchBookRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;
    const { data } = await API.post(`/api/vi/books/total/${query}`);
    return data;
  },

  /**
   * 도서 세부 정보 조회
   */
  getBookDetail: async (param: number) => {
    const { data } = await API.post(`/api/vi/books/${param}`);
    return data;
  },
};
