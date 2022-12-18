import {
  createArticleRequestData,
  getArticleDetailRequestData,
  likeRequest,
  updateArticleRequestData,
} from "../typings/Article";
import axios from "axios";
import { axiosHeader } from "../constant/axiosHeader";

const domain = `${process.env.ARTICLE_API_DOMAIN}/api/v1`;

export const ArticleService = {
  /**
   * 서평 좋아요 클릭 api
   */
  likeArticle: async (param: likeRequest) => {
    const { data } = await axios.post(
      `${domain}/articles/likes?articleId=${param.articleId}&userId=${param.userId}`,
      axiosHeader
    );
    return data;
  },

  /**
   * 서평 좋아요 개수 api
   */
  getLikesCount: async (param: number) => {
    const url = `${domain}/articles/likes/${param}`;
    const { data } = await axios.get(url, axiosHeader);
    return data;
  },

  /**
   * 좋아요 한 리스트
   */
  getLikeArticles: async (userId: number) => {
    const { data } = await axios.get(
      `${domain}/articles/likes/list/${userId}`,
      axiosHeader
    );
    return data;
  },

  /**
   * 서평 작성하기 api
   */
  createArticle: async (param: createArticleRequestData) => {
    const { data } = await axios.post(`${domain}/articles`, param);
    return data;
  },

  /**
   * 서평 삭제하기 api
   */
  deleteArticle: async (param: number) => {
    const { data } = await axios.delete(
      `${domain}/articles/${param}`,
      axiosHeader
    );
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
      },
      axiosHeader
    );
    return data;
  },

  /**
   * 서평 리스트 가져오기 api
   */
  getArticleList: async (param: number) => {
    const url = `${domain}/articles/${param}?sortBy=createdAt,asc`;
    const { data } = await axios.get(url, axiosHeader);
    return data;
  },

  /**
   * 실시간 서평 리스트 가져오기
   */
  getMainArticle: async () => {
    const url = `${domain}/articles`;
    const { data } = await axios.get(url, axiosHeader);
    return data;
  },

  getPopularArticles: async (flag: boolean = false) => {
    const { data } = await axios.post(
      `${domain}/articles/list`,
      {
        more: flag,
      },
      axiosHeader
    );
    return data;
  },

  getOtherArticles: async (bookId: number) => {
    const { data } = await axios.get(
      `${domain}/articles/other/${bookId}?sortBy=createdAt`,
      axiosHeader
    );
    return data;
  },

  /**
   * 서평 상세보기 api
   */
  // TODO param이 config에 들어감
  // axiosHeader 추가 필요
  getArticleDetail: async (param: getArticleDetailRequestData) => {
    const url = `${domain}/articles/article/${param.articleId}`;
    const { data } = await axios.get(url, {
      params: { userId: param.userId },
    });
    return data;
  },
};
