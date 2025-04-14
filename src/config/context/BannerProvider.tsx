import { useState, ReactNode } from "react";
import { IsHomeBannerContext } from "./IsHomeBannerContext";

interface BannerProviderProps {
    children: ReactNode;
}

const IsHomeBannerProvider = ({ children }: BannerProviderProps) => {
    const [isHome, setIsHome] = useState("home");
    const toggleBanner = () => {
        setIsHome(isHome === "home" ? "about" : "home");
    };

    return (
        <IsHomeBannerContext.Provider value={{ isHome, toggleBanner }}>
            {children}
        </IsHomeBannerContext.Provider>
    );
};

export default IsHomeBannerProvider;
