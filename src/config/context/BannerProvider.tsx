import { useState, ReactNode } from "react";
import { IsHomeBannerContext } from "./IsHomeBannerContext";

interface IBannerProviderProps {
    children: ReactNode;
}

const IsHomeBannerProvider = ({ children }: IBannerProviderProps) => {
    const [page, setPage] = useState("home");
    const toggleBanner = () => {
        setPage(page === "home" ? "about" : "home");
    };

    return (
        <IsHomeBannerContext.Provider value={{ page, toggleBanner }}>
            {children}
        </IsHomeBannerContext.Provider>
    );
};

export default IsHomeBannerProvider;
