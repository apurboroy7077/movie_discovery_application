import { useEffect } from "react";
import useBasic, { screenSizeType } from "./useBasics";

export const useSetBasics = () => {
  const setScreenSizeInPx = useBasic((state) => state.setScreenSizeInPx);
  const setScreenSize = useBasic((state) => state.setScreenSize);
  const setWidth = () => {
    const widthOfDisplayInPx = window.innerWidth;
    setScreenSizeInPx(widthOfDisplayInPx);
    let myScreenSize = "NOT_INITIALIZED" as screenSizeType;
    if (widthOfDisplayInPx < 768) {
      myScreenSize = "SMALL_SCREEN";
    } else if (widthOfDisplayInPx > 768 && widthOfDisplayInPx < 1024) {
      myScreenSize = "MEDIUM_SCREEN";
    } else if (widthOfDisplayInPx > 1023) {
      myScreenSize = "LARGE_SCREEN";
    }
    setScreenSize(myScreenSize);
  };
  const setScrollHeight = useBasic((state) => state.setScrollHeight);
  const setScrollHeight2 = () => {
    const scrollHeight = window.scrollY;
    setScrollHeight(scrollHeight);
  };

  useEffect(() => {
    setWidth();
    window.addEventListener("resize", setWidth);
    setScrollHeight2();
    window.addEventListener("scroll", setScrollHeight2);

    return () => {
      window.removeEventListener("resize", setWidth);
      window.removeEventListener("scroll", setScrollHeight2);
    };
  }, []);
  return {};
};
