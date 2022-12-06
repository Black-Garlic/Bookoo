import axios from "axios";
import {
  AddReplyRequestData,
  CreateReplyRequestData,
  UpdateReplyRequestData,
} from "../typings/Reply";
import { axiosHeader } from "../constant/axiosHeader";
const domain = "http://ec2-54-204-214-164.compute-1.amazonaws.com/api/v1";

export const ReplyService = {
  /**
   * 댓글 작성하기 api
   */
  createReply: async (param: CreateReplyRequestData) => {
    const { data } = await axios.post(
      `${domain}/replies?articleId=${param.articleId}&userId=${param.userId}&content=${param.content}`,
      axiosHeader
    );
    return data;
  },
  /**
   * 댓글 개별 가져오기 api
   */
  getReplyDetail: async (param: number) => {
    const { data } = await axios.get(`${domain}/replies/${param}`, axiosHeader);
    return data;
  },

  /**
   * 대댓글 작성하기 api
   */
  addReply: async (param: AddReplyRequestData) => {
    const { data } = await axios.post(
      `${domain}/replies/${param.replyId}?articleId=${param.articleId}&userId=${param.userId}&content=${param.content}&level=${param.level}`,
      axiosHeader
    );
    return data;
  },

  /**
   * 댓글 삭제하기 / 대댓글 삭제하기 api
   */
  deleteReply: async (param: number) => {
    const { data } = await axios.delete(
      `${domain}/replies/${param}`,
      axiosHeader
    );
    return data;
  },

  /**
   * 댓글 수정하기 / 대댓글 삭제하기 api
   */
  updateReply: async (param: UpdateReplyRequestData) => {
    const { data } = await axios.patch(
      `${domain}/replies/${param.replyId}&content=${param.content}`,
      axiosHeader
    );
    return data;
  },

  /**
   * 댓글 전체 가져오기 api
   */
  getReplyList: async (param: number) => {
    const { data } = await axios.get(`${domain}/replies/${param}`, axiosHeader);
    return data;
  },

  /**
   * 유저의 댓글 전체 가져오기
   */
  getMyReplyList: async (param: number) => {
    const { data } = await axios.get(
      `${domain}/replies/list/user/${param}`,
      axiosHeader
    );
    return data;
  },
};
