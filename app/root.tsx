import React from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" type="image/svg+xml" href="KasaIcon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="./style/css/main.css"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2/family=Montserrat:wght@400:500:700&subset=latin&display=swap"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <title>Kasa</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
