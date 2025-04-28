import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
            <ScrollRestoration />
            <Scripts />
        </main>
    );
}

export default Layout;
