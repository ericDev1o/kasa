import Card from '../Card';
import logements from '../../../data/logements.json';

/**
 * This function displays the home page gallery cards.
 * It maps each logement in logements.json with a Card component having
 *     cover image source path and
 *     title
 * props.
 * @returns the cards with their call to click titled cover
 */
function Gallery() {   
    return (
        <section className = 'gallery'>
            <article className = 'gallery-background'>
                {
                    logements.map(
                        logement => (
                            <Card 
                                key = { logement.id } 
                                cover = { logement.cover } 
                                title = { logement.title } 
                            />
                        )
                    )
                }
            </article>
        </section>
    );
}

export default Gallery;
