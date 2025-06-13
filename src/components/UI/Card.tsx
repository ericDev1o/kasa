/**
 * The card is a housing picture.
 * It is a call to click on it to rent.
 * @returns the housing cover.
 */
export default function Card(
    { 
        id,
        cover, 
        title
    }
    : { 
        id: string,
        cover: string,
        title: string,
     }) {
        const housingURL = '/housing/' + id;
        
        return (
            <a href={housingURL}>
                <article className = 'card'>
                    <img src = { cover } alt = 'card' className = 'card-picture' />
                    <h2 className = 'card-title__h2'>{ title }</h2>
                </article>
            </a>
        );
}