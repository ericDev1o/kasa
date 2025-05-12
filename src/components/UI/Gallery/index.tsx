import Card from '../Card';
import logements from '../../../data/logements.json';
import card from '../../../assets/images/card.jpg';

/**
 * This function displays the home page gallery cards.
 * Foreach cover in the logements.json file create a card with the cover image source path.
 * Use map. 
 * @returns the cards with their call to click cover
 */
function Gallery() {
    let covers = [
        logements.forEach(logement => logement.cover)
    ];
    /*const cards = covers.map(coverCTA => 
        <Card cover= {coverCTA}/>
        );
    */
    return (
        <section className = 'gallery'>
            <article className = 'gallery-background'>
                <Card cover={card}/>
                <Card cover={card}/>
                <Card cover={card}/>
                <Card cover={card}/>
                <Card cover={card}/>
                <Card cover={card}/>            
            </article>
        </section>
    );
}

export default Gallery;
