import { GetBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
const headers = {
  Accept: "application/json",
};

export const BookService = {
  getBookList: async (param: GetBookListRequest) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url =
      `http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1/books/` + query;
    const res = await axios
      .get(url)
      .then(function (response) {
        console.log("성공", response);
        return response;
      })
      .catch(function (error) {
        console.log("실패");
      });
    return res;
  },

  searchBook: async (param: searchBookRequest) => {
    const query = `display=${param.display}&start=${param.start}&sort=${param.sort}`;
    const { data } = await instance.get(`/aws/api/vi/books/total/${query}`, {
      headers: headers,
    });
    return data;
  },
};
