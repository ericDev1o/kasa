import { createContext } from "react";

type IsHomeBannerContextType = {
    page: string;
    toggleBanner: () => void;
};

export const IsHomeBannerContext = createContext<
    IsHomeBannerContextType | undefined
>(undefined);
