import Layout from '../../components/containers/Layout';
import Banner from '../../components/UI/Banner';
import Gallery from '../../components/UI/Gallery';
import bannerBackground from '../../assets/images/bh_bckgrd.jpg';

const Home = () => {
    const title = "Chez vous, partout et ailleurs";
    const bannerContent = {...{ bannerBackground }, ...{ title }};
    return (
        <Layout>
            <Banner banner = {bannerContent} />
            <Gallery />
        </Layout>
    );
};

export default Home;
