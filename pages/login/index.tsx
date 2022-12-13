import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setCookie } from "../../utils/cookies";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/userInfoState";
import { UserService } from "../../services/UserService";

const Login: NextPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    if (router.query && router.query?.accessToken) {
      saveCookie().then(async () => {
        await getUserInfo(router.query?.accessToken);
        await router.push("/main").then();
      });
    }
  }, [router.query]);

  const saveCookie = async () => {
    await setCookie("accessToken", router.query?.accessToken as string, {
      path: "/",
      secure: true,
    });
    await setCookie("refreshToken", router.query?.refreshToken as string, {
      path: "/",
      secure: true,
    });
  };

  const getUserInfo = async (token: any) => {
    await UserService.getUserInfo(token).then((data) => {
      console.log(data.data);

      setUserInfo(data.data);
    });
  };

  return <></>;
};

export default Login;
