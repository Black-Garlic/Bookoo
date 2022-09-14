import { getBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";

export const BookService = {
  getBookList: async (param: getBookListRequest) => {
    const query = `display=${param.display}&start=${param.start}&sort=${param.sort}`;
    await axios
      .get(`/aws/api/vi/books/${query}`)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {})
      .then(function () {});
  },

  searchBook: async (param: searchBookRequest) => {
    const query = `display=${param.display}&start=${param.start}&sort=${param.sort}`;
    await axios
      .get(`/aws/api/vi/books/total/${query}`)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {})
      .then(function () {});
  },
};
