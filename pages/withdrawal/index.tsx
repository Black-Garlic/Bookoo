import { NextPage } from "next";
import Link from "next/link";

const WithdrawalPage: NextPage = () => {
  return (
    <div className={"w-full h-full flex flex-row px-72 pt-52"}>
      <div className={"w-full h-full flex-1"}>
        <img src={"/svg/book_person.svg"} alt={"book_person"} />
      </div>
      <div className={"w-auto h-full flex flex-col"}>
        <div className={"w-full h-auto flex-1 title-2 text-text-1 mb-3"}>
          내일 읽을 책의 감상을
          <br />
          자유롭게 나누고 싶다면
          <br />
          저희 북쿠로 돌아와주세요!
        </div>
        <div className={"w-full h-auto body-3 text-text-1 mb-5"}>
          지금까지 북쿠와 함께해주셔서 감사합니다.
          <br />
          계정 복구를 원하시는 경우 30일 이내
          <br />
          bookoo.info@gmail.com으로 문의 부탁드립니다.
        </div>
        <Link href={"/main"}>
          <button
            className={
              "w-full h-auto body-1 text-text-1 rounded-lg bg-primary p-2"
            }
          >
            홈으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WithdrawalPage;
