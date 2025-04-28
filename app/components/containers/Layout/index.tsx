import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

import Header from "../../UI/Header";
import Main from "../../UI/Main";
import Footer from "../../UI/Footer";

function Layout() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <Main />
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default Layout;
