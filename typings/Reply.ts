export class CreateReplyRequestData {
  articleId?: number;
  userId?: number;
  content?: string;
}

export class AddReplyRequestData {
  replyId?: number;
  articleId?: number;
  userId?: number;
  content?: string;
  level?: number;
}

export class UpdateReplyRequestData {
  replyId?: number;
  content?: string;
}

export class ReplyUnitResponseData {
  createdAt?: string;
  updatedAt?: string;
  replyId?: number;
  userId?: number;
  articleIdOfReply?: number;
  content?: string;
  // rePlyId?: number;
  level?: number;
}
