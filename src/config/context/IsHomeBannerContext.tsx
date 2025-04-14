import { createContext } from "react";

type IsHomeBannerContextType = {
    isHome: string;
    toggleBanner: () => void;
};

export const IsHomeBannerContext = createContext<
    IsHomeBannerContextType | undefined
>(undefined);
