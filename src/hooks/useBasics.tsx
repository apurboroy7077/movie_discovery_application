import { create } from "zustand";
export type screenSizeType =
  | "NOT_INITIALIZED"
  | "SMALL_SCREEN"
  | "MEDIUM_SCREEN"
  | "LARGE_SCREEN";
type loadingStatusType = "LOADING" | "COMPLETE";
type ImageViewerStatusType = "OPENED" | "CLOSED";
type useBasicType = {
  screenSizeInPx: number;
  setScreenSizeInPx: (screenSizeInPx: number) => void;
  screenSize: screenSizeType;
  setScreenSize: (screenSize: screenSizeType) => void;
  loadingStatus: loadingStatusType;
  setLoadingStatus: (loadingStatus: loadingStatusType) => void;
  scrollHeight: number;
  setScrollHeight: (scrollHeight: number) => void;
  imageViewerStatus: ImageViewerStatusType;
  setImageViewerStatus: (status: ImageViewerStatusType) => void;
  srcOfImageViewerImage: string;
  setSrcOfImageViewerImage: (src: string) => void;
};

const useBasic = create<useBasicType>((set) => ({
  screenSizeInPx: 0,
  setScreenSizeInPx: (screenSizeInPx) => {
    set((state) => {
      return { ...state, screenSizeInPx: screenSizeInPx };
    });
  },
  screenSize: "NOT_INITIALIZED",
  setScreenSize: (screenWidth) => {
    set((state) => {
      return { ...state, screenSize: screenWidth };
    });
  },
  loadingStatus: "LOADING",
  setLoadingStatus: (loadingStatusAr7) => {
    set((state) => {
      return { ...state, loadingStatus: loadingStatusAr7 };
    });
  },
  scrollHeight: 0,
  setScrollHeight: (scrollHeight) => {
    set((state) => {
      return { ...state, scrollHeight: scrollHeight };
    });
  },
  imageViewerStatus: "CLOSED",

  setImageViewerStatus: (status) => {
    set((state) => {
      return { ...state, imageViewerStatus: status };
    });
  },
  srcOfImageViewerImage: "",
  setSrcOfImageViewerImage: (src) => {
    set((state) => {
      return { ...state, srcOfImageViewerImage: src };
    });
  },
}));

export default useBasic;
