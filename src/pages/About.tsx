import Layout from '../components/containers/Layout';
import Banner from '../components/UI/Banner';
import Collapse from '../components/UI/Collapse';
import bannerBackground from '/images/ba_bckgrd.jpg';

export default function About() {
    const title = '';
    const page = 'about';
    const bannerContent = { bannerBackground , title ,  page };
    const values = [
        {
            id: 1, 
            title: "Fiabilité", 
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: 2, 
            title: "Respect", 
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturabation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 3, 
            title: "Service", 
            content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            id: 4, 
            title: "Sécurité", 
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ];
    
    return (
        <Layout page = { page }>
            <Banner banner = { bannerContent } />
            <h1 className='headings-map-compliance'>À propos</h1>
            <section className='collapse-container'>
                {values.map(value => (
                    <Collapse 
                        key = { value.id } 
                        titleArgument = { value.title } 
                        content = { value.content }
                        description = { false } 
                    />
                ))}
            </section>
        </Layout>
    );
}