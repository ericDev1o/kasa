import Layout from '../../components/containers/Layout';
import Banner from '../../components/UI/Banner';
import Gallery from '../../components/UI/Gallery';
import bannerBackground from '../../assets/images/bh_bckgrd.jpg';

const Home = () => {
    return (
        <Layout>
            <Banner bannerBackgrnd = { bannerBackground } />
            <Gallery />
        </Layout>
    );
};

export default Home;
