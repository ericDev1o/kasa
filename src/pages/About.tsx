import Layout from '../components/containers/Layout';
import Banner from '../components/UI/Banner';
import Collapse from '../components/UI/Collapse';
import bannerBackground from '/images/ba_bckgrd.jpg';
import { values } from '../assets/data/values'; 

export default function About() {
    const page = 'about';
    const bannerContent = { bannerBackground,  page };
    
    return (
        <Layout page = { page }>
            <Banner banner = { bannerContent } />
            <h1 className='headings-map-compliance'>À propos</h1>
            <section className='collapse-container collapse-container-about'>
                { values.map(value => (
                    <Collapse 
                        key = { value.id } 
                        titleArgument = { value.title } 
                        description = { true } 
                        children = { value.content }
                    />
                )) }
            </section>
        </Layout>
    );
}