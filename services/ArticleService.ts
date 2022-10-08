import {
  createArticleRequestData,
  getArticleDetailRequestData,
  likeRequest,
  updateArticleRequestData,
} from "../typings/Article";
import API from "../utils/api";

export const ArticleService = {
  /**
   * 서평 좋아요 클릭 api
   */
  likeArticle: async (param: likeRequest) => {
    const { data } = await API.post(`/api/vi/articles/likes`, param);
    return data;
  },

  /**
   * 서평 좋아요 개수 api
   */
  getLikesCount: async (param: number) => {
    const { data } = await API.get(`/api/vi/articles/likes/${param}`);
    return data;
  },

  /**
   * 서평 작성하기 api
   */
  createArticle: async (param: createArticleRequestData) => {
    const { data } = await API.post(`/api/vi/articles`, param);
    return data;
  },

  /**
   * 서평 삭제하기 api
   */
  deleteArticle: async (param: number) => {
    const { data } = await API.delete(`/api/vi/articles/${param}`);
    return data;
  },

  /**
   * 서평 수정하기 api
   */
  updateArticle: async (param: updateArticleRequestData) => {
    const { data } = await API.patch(`/api/vi/articles/${param.articleId}`, {
      title: param.title,
      content: param.content,
    });
    return data;
  },

  /**
   * 서평 리스트 가져오기 api
   */
  getArticleList: async (param: number) => {
    const { data } = await API.get(`/api/vi/articles/${param}`);
    return data;
  },

  /**
   * 서평 상세보기 api
   */
  getArticleDetail: async (param: getArticleDetailRequestData) => {
    const { data } = await API.get(
      `/api/vi/articles/article/${param.articleId}`,
      {
        params: { userId: param.userId, bookId: param.bookId },
      }
    );
    return data;
  },
};
