import { ReactNode } from 'react';
import starFull from '/images/star-active.svg';
import starEmpty from '/images/star-inactive.svg';

const numberOfStars = 5;

/**
 * @param numberOfActiveStars: after housing rating check it is 
 * -> either the rating or 
 * -> nothing
 * @returns 
 * -> 1 or ... or 5
 * -> ''
 */
export default function Stars (
    { numberOfActiveStars }: { numberOfActiveStars: number | string }
)
{
    if(typeof numberOfActiveStars == 'string')
        return <p className='stars-rating-error'>{ numberOfActiveStars }</p>
    else {
        let stars: Array<ReactNode> = new Array<ReactNode>(5);

        for( let j = 0; j < numberOfStars; j++)
        {
            stars.push(
                <img
                    className = 'star'
                    src = { j < numberOfActiveStars ? starFull : starEmpty }
                    alt = 'rating star'
                />
            );
        }

        return (
            <div className='stars'>{ stars }</div>
        );
    }
}