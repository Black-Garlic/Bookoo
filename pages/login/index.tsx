import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setCookie } from "../../utils/cookies";

const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
    if (router.query) {
      console.log(router.query);
      setCookie("accessToken", router.query?.accessToken as string, {
        path: "/",
      }).then(() => {
        console.log(router.query);
        setCookie("refreshToken", router.query?.refreshToken as string, {
          path: "/",
        }).then(() => {
          window.location.replace("/main");
        });
      });
    }
  }, [setCookie, router]);

  return <></>;
};

export default Login;
