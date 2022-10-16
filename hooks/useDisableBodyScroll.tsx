import { useLayoutEffect } from "react";
import {
  BodyScrollOptions,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

export const useDisableBodyScroll = () => {
  const body = document.querySelector(".book-koo") as HTMLElement;
  const options: BodyScrollOptions = {
    reserveScrollBarGap: true,
  };

  useLayoutEffect(() => {
    disableBodyScroll(body, options);
    return () => {
      enableBodyScroll(body);
    };
  }, []);
};
