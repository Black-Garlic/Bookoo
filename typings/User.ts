export interface UserInfo {
  userId: number;
  nickName: string;
}

export class checkShelfRequest {
  userId?: number;
  bookId?: number;
}

export class addShelfRequest {
  userId?: string;
  bookId?: number;
}
export class deleteShelfRequest {
  userId?: string;
  bookId?: number;
}
