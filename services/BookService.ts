import { getBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
const headers = {
  Accept: "application/json",
};

export const BookService = {
  getBookList: async (param: getBookListRequest) => {
    const query = `display=${param.display}&start=${param.start}&sort=${param.sort}`;
    const { data } = await instance.get(`/aws/api/vi/books/${query}`, {
      headers: headers,
    });
    return data;
  },

  searchBook: async (param: searchBookRequest) => {
    const query = `display=${param.display}&start=${param.start}&sort=${param.sort}`;
    const { data } = await instance.get(`/aws/api/vi/books/total/${query}`, {
      headers: headers,
    });
    return data;
  },
};
