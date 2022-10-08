export class GetBookListRequest {
  display: number = 5; // 검색 결과 출력 건수 지정
  start: number = 1; // 검색 시작 위치
  sort: string = "sort"; // 정렬 옵션
  keyword: string = "";
}

export class searchBookRequest {
  display: string = ""; // 검색 결과 출력 건수 지정
  start: string = ""; // 검색 시작 위치
  sort: string = ""; // 정렬 옵션
  keyword: string = "";
}

export class BookUnitResponseData {
  author?: string;
  description?: string;
  discount?: number;
  image?: string;
  isbn?: number;
  link?: string;
  pubdate?: number;
  publisher?: string;
  title?: string;
}
