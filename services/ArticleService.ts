import {
  createArticleRequestData,
  getArticleDetailRequestData,
  likeRequest,
  updateArticleRequestData,
} from "../typings/Article";
import API from "../utils/api";
import axios from "axios";
const domain = "http://ec2-54-204-214-164.compute-1.amazonaws.com/api/v1";
// axios.defaults.baseURL =
//   "http://ec2-54-204-214-164.compute-1.amazonaws.com/api/v1";
// http://ec2-54-204-214-164.compute-1.amazonaws.com/swagger-ui/index.html
export const ArticleService = {
  /**
   * 서평 좋아요 클릭 api
   */
  likeArticle: async (param: likeRequest) => {
    const { data } = await axios.post(
      `${domain}/articles/likes?articleId=${param.articleId}&userId=${param.userId}`
    );
    return data;
  },

  /**
   * 서평 좋아요 개수 api
   */
  getLikesCount: async (param: number) => {
    const url = `${domain}/articles/likes/${param}`;
    const { data } = await axios.get(url);
    return data;
  },

  /**
   * 서평 작성하기 api
   */
  createArticle: async (param: createArticleRequestData) => {
    const { data } = await axios.post(
      `${domain}/articles?userId=${param.userId}&bookId=${param.bookId}&title=${param.title}&content=${param.content}`
    );
    return data;
  },

  /**
   * 서평 삭제하기 api
   */
  deleteArticle: async (param: number) => {
    const { data } = await axios.delete(`${domain}/articles/${param}`);
    return data;
  },

  /**
   * 서평 수정하기 api
   */
  updateArticle: async (param: updateArticleRequestData) => {
    const { data } = await axios.patch(
      `${domain}/articles/${param.articleId}`,
      {
        title: param.title,
        content: param.content,
      }
    );
    return data;
  },

  /**
   * 서평 리스트 가져오기 api
   */
  getArticleList: async (param: number) => {
    const url = `${domain}/articles/${param}?sortBy=createdAt,asc`;
    const { data } = await axios.get(url);
    return data;
  },

  /**
   * 서평 상세보기 api
   */
  getArticleDetail: async (param: getArticleDetailRequestData) => {
    const url = `${domain}/articles/article/${param.articleId}`;
    const { data } = await axios.get(url, {
      params: { userId: param.userId, bookId: param.bookId },
    });
    return data;
  },
};
