export class likeRequestDTO {
  articleId?: number;
  userId?: number;
}

export class createArticleDTO {
  userId?: number;
  bookId?: number;
  title?: string;
  content?: string;
}
