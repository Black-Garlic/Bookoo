import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setCookie } from "../../utils/cookies";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { UserService } from "../../services/UserService";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/userInfoState";

const Login: NextPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useDidMountEffect(async () => {
    if (router.query?.accessToken && router.query?.refreshToken) {
      await setCookie("accessToken", router.query?.accessToken as string, {
        path: "/",
      });
      await setCookie("refreshToken", router.query?.refreshToken as string, {
        path: "/",
      });
      await saveUserInfo().then(() => {
        window.location.replace("/main");
      });
    }
  }, [setCookie, router]);

  const saveUserInfo = async () => {
    if (router.query?.accessToken)
      await UserService.getUserInfo({
        accessToken: router.query?.accessToken as string,
      }).then((data) => {
        setUserInfo(data.data);
      });
  };

  return <></>;
};

export default Login;
