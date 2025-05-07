import type { ReactNode } from 'react';
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
