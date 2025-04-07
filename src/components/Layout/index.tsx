import React from "react";
import type { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;