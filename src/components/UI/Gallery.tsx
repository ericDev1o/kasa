import { useEffect, useState } from 'react';
import Card from './Card';

interface Logement {
    id: string;
    cover: string;
    title: string;
}

/**
 * This function displays the home page gallery cards.
 * It maps each logement in logements.json with a Card component having
 *     cover image source path and
 *     title
 * props.
 * @returns the cards with their call to click titled cover
 */
function Gallery() {  
    const [logements, setLogements] = useState<Logement[]>([]);

    useEffect(() => {
        const fetchLogements = async () => {
            const response = await fetch("/data/logements.json");
            const data = await response.json();
            setLogements(data);
        };

        fetchLogements();
    }, []);
    
    return (
        <section className = 'gallery'>
            <div className = 'gallery-background'>
                {
                    logements.map(
                        logement => (
                            <Card 
                                key = { logement.id } 
                                id = { logement.id }
                                cover = { logement.cover } 
                                title = { logement.title } 
                            />
                        )
                    )
                }
            </div>
        </section>
    );
}

export default Gallery;
