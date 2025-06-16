import type { ReactNode } from 'react';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import { PageContext } from '../../contexts/UI/PageContext';

const Layout = ({ children, page }: { children: ReactNode, page: string }) => (
    <main>
        <div className = 'layout-container'>
            <PageContext.Provider value = { page }>
                <Header/>
                { children }
            </PageContext.Provider>
        </div>
        <Footer />
    </main>
);

export default Layout;