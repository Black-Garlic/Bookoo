import { likeRequest } from "../typings/Article";
import API from "../utils/api";
import {
  AddReplyRequestData,
  CreateReplyRequestData,
  UpdateReplyRequestData,
} from "../typings/Reply";

export const ReplyService = {
  /**
   * 댓글 작성하기 api
   */
  createReply: async (param: CreateReplyRequestData) => {
    const { data } = await API.post(`/api/vi/replies`, param);
    return data;
  },
  /**
   * 댓글 개별 가져오기 api
   */
  getReplyDetail: async (param: number) => {
    const { data } = await API.get(`/api/vi/replies/${param}`);
    return data;
  },

  /**
   * 대댓글 작성하기 api
   */
  addReply: async (param: AddReplyRequestData) => {
    const { data } = await API.post(`/api/vi/replies/${param.replyId}`, {
      articleId: param.articleId,
      userId: param.userId,
      content: param.content,
      level: param.level,
    });
    return data;
  },

  /**
   * 댓글 삭제하기 / 대댓글 삭제하기 api
   */
  deleteReply: async (param: number) => {
    const { data } = await API.delete(`/api/vi/replies/${param}`);
    return data;
  },

  /**
   * 댓글 수정하기 / 대댓글 삭제하기 api
   */
  updateReply: async (param: UpdateReplyRequestData) => {
    const { data } = await API.patch(`/api/vi/replies/${param.replyId}`, {
      content: param.content,
    });
    return data;
  },

  /**
   * 댓글 전체 가져오기 api
   */
  getReplyList: async (param: number) => {
    const { data } = await API.get(`/api/vi/replies/${param}`);
    return data;
  },
};
