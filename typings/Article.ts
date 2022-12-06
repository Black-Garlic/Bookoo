import { BookUnitResponseData } from "./Books";
import { ReplyUnitResponseData } from "./Reply";

export class likeRequest {
  articleId?: number;
  userId?: number;
}

export class createArticleRequestData {
  userId?: number;
  bookId?: number;
  title?: string;
  content?: string;
  rating?: number;
}

export class updateArticleRequestData {
  articleId?: number;
  title?: string;
  content?: string;
}

export class articleUnitRequestData {
  articleId?: number;
  userId?: number;
  book?: BookUnitResponseData;
  createdAt?: string;
  updatedAt?: string;
  title?: string;
  content?: string;
  reply?: ReplyUnitResponseData;
  likeCount?: number;
  liked?: boolean;
}

export class getArticleDetailRequestData {
  articleId?: number;
  userId: number = 0;
  bookId?: number;
}

export class Article {
  articleId?: number;
  book?: {};
  content?: string;
  createdAt?: [];
  likeCount?: number;
  liked?: boolean;
  reply?: any;
  replyCount?: number;
  title?: string;
  updatedAt?: [];
  userId?: string;
}
