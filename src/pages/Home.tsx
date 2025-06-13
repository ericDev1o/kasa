import Layout from '../components/containers/Layout';
import Banner from '../components/UI/Banner';
import Gallery from '../components/UI/Gallery';
import bannerBackground from '/images/bh_bckgrd.jpg';

const Home = () => {
    const title = 'Chez vous, partout et ailleurs';
    const page = 'home';
    const bannerContent = { bannerBackground ,  title ,  page  };
    return (
        <Layout page = { page }>
            <Banner banner = { bannerContent } />
            <Gallery />
        </Layout>
    );
};

export default Home;
