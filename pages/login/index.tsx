import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setCookie } from "../../utils/cookies";

const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      console.log(router.query);
      setCookie("accessToken", router.query?.accessToken as string, {
        path: "/",
        secure: true,
      });
      setCookie("refreshToken", router.query?.refreshToken as string, {
        path: "/",
        secure: true,
      });
      router.push("/main", undefined, { shallow: true }).then();
    }
  }, [setCookie, router]);

  return <></>;
};

export default Login;
