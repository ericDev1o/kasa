/**
 * The card is a housing picture.
 * It is a call to click on it to rent.
 * @returns the housing cover.
 */
function Card({ cover, title }: { cover: string; title: string }) {
    return (
        <div className = 'card'>
            <img src = { cover } alt = 'card' className = 'card-picture' />
            <h2 className = 'card-title__h2'>{ title }</h2>
        </div>
    );
}

export default Card;
