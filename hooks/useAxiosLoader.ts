import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const imageInstance = axios.create({
  headers: {
    "Content-Type": "image/png",
  },
});

export const useAxiosLoader = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [ready, setReady] = useState(false);
  const inc = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  ); // add to counter
  const dec = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  ); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: async (config: any) => {
        // console.log('config: ', config.url);
        config.withCredentials = true;
        config.headers["XSRF-TOKEN"] =
          window.localStorage.getItem("XSRF-TOKEN");

        // 로딩을 숨길 시에만 undefined가 아닌 값을 넣어준다.
        if (config.headers.Loading === undefined) {
          inc();
        }

        return config;
      },
      response: (response: any) => {
        if (response.config.headers.Loading === undefined) {
          dec();
        }

        return response;
      },
      error: (error: any) => {
        dec();

        if (error.response) {
          switch (error.response.status) {
            case 401:
              break;
            case 403:
              router.push(`/error/403`);
              break;
            case 404:
              router.push(`/error/404`);
              break;
            case 500:
              router.push(`/error/500`);
              break;
          }
        }

        return Promise.reject(error);
      },
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = instance.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // add response interceptors
    const resInterceptor = instance.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    setReady(true);
    return () => {
      // remove all intercepts when done
      instance.interceptors.request.eject(reqInterceptor);
      instance.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0, ready];
};
