import Layout from '../../components/containers/Layout';
import Banner from '../../components/UI/Banner';
import bannerBackground from '../../assets/images/ba_bckgrd.jpg';

function About() {
    const title = '';
    const bannerContent = {...{ bannerBackground }, ...{ title }}
    return (
        <Layout>
            <Banner banner = { bannerContent } page = 'about' />
            <h1>À propos</h1>
            <h2>Fiabilité</h2>
            <h2>Respect</h2>
            <h2>Service</h2>
            <h2>Sécurité</h2>
        </Layout>
    );
}

export default About;
