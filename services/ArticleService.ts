import { GetBookListRequest, searchBookRequest } from "../typings/Books";
import axios from "axios";
import { instance } from "../hooks/useAxiosLoader";
import { createArticleDTO, likeRequestDTO } from "../typings/Article";
const headers = {
  Accept: "application/json",
};

const domain = `http://ec2-34-194-74-124.compute-1.amazonaws.com/api/v1/articles/`;

export const ArticleService = {
  likeArticle: async (param: likeRequestDTO) => {
    const url = domain + "articles/likes";
    const res = await axios
      .post(url, param)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log("실패");
      });
    return res;
  },

  getLikesCount: async (param: number) => {
    const url = domain + `articles/likes/${param}`;
    const res = await axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log("실패");
      });
    return res;
  },
  createArticle: async (param: createArticleDTO) => {
    const url = domain + `articles`;
    const res = await axios
      .post(url, param)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log("실패");
      });
    return res;
  },
};
