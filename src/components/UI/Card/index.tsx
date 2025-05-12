//import card from '../../../assets/images/card.jpg';

/**
 * The card is a housing picture.
 * It is a call to click on it to rent.
 * @returns the housing cover.
 */
function Card({cover}: {cover: string}) {
    return <img src = {cover} alt = 'card' className = 'card' />;
}

export default Card;
