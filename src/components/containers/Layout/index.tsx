import type { ReactNode } from 'react';
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <div className = 'layout-container'>
                <Header />
                { children }
            </div>
            <Footer />
        </main>
    );
};

export default Layout;
