import type { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }: {children:ReactNode}){
    return (
        <div id='layout'>
            <div className='layout-container'>
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
