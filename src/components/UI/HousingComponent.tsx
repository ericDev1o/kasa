import housingType from '../../types/HousingType';
import Collapse from './Collapse';
import starFull from'/images/star-active.svg';
import starEmpty from '/images/star-inactive.svg';
import { useEffect, useState } from 'react';

const numberOfStars = 5;

const stars = (numberOfActiveStars: number, numberOfInactiveStars: number) => 
{
    let stars: Array<string> = Array.prototype;

    for( let j = 0; j < numberOfActiveStars; j++)
    {
        stars.push(starFull);
    }

    for( let j = 5 - numberOfInactiveStars; j += 1; j++)
    {
        stars.push(starEmpty);
    }

    return <div className='stars'> { stars }</div>;
}

const Tag = ({ tagElement }: { tagElement: string }) => {
    return (
        <article className='tag'>
            <p className='tag__p'>{ tagElement }</p>
        </article>
    )
}

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <>
            { tags.map(tag => (
                 <Tag key = { tag } tagElement= { tag } />
            ))
        }
        </>
    );
}

const Equipment = ({ equipmentElement }: { equipmentElement: string }) => {
    return (
        <p className='equipment__p'>
            { equipmentElement }
        </p>
    )
}

const Equipments = ({ equipments }: { equipments: string[] }) => {
    return (
        <>
            { equipments.map(equipment => (
                <Equipment key= { equipment } equipmentElement = { equipment } />
            ))}
        </>
    )
}

const Slider = ({ pictures }: { pictures: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [slideClass, setSlideClass] = useState('slide-zoom');
    const numberOfPictures = pictures.length;

    const nextSlide = () => {
        setFadeClass('');
        setSlideClass('');
        setCurrentIndex((previndex) => (previndex + 1) % numberOfPictures);
    }

    const prevSlide = () => {
        setFadeClass('');
        setSlideClass('');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfPictures) % numberOfPictures);
    }

    useEffect(() => {
        setFadeClass('fade-in');
        setSlideClass('slide-zoom');
    }, [currentIndex]);

    return (
        <div className='cover-container slider'>
        { 
            numberOfPictures === 1 
            ? 
            <img src = { pictures[0] } alt = 'logement' />
            : (
                <div className='slider-container'>
                    <button className = 'arrow left' onClick = { prevSlide }>
                        <span className = 'material-symbols-outlined'>arrow_back_ios</span>
                    </button>
                    <img
                        src = { pictures[currentIndex] } 
                        alt = 'logement' 
                        className = { `cover ${ fadeClass } ${ slideClass }` }
                    />
                    <div 
                        className='counter'
                    >
                        { currentIndex + 1 } / { numberOfPictures }
                    </div>
                    <button className='arrow right' onClick = { nextSlide }>
                        <span className = 'material-symbols-outlined'>arrow_forward_ios</span>
                    </button>
                </div>
            )
        }
        </div>
    )
}

/**
 * 
 * @param housingElement a type corresponding to backend API housing content
 * @returns a housing page content with newlined equipments content in the Collapse
 */
export default HousingComponent (housingElement: housingType) => {
    const numberOfActiveStars = Number(housingElement.rating);

    return (
    <>
        <Slider pictures = { housingElement.pictures } /> 
        <div className='titles-tags-stars-host'>
            <div>
                <h1 className='error-title__h2 housing-title__h1'>{ housingElement.title }</h1>
                <h2 className='housing__h2'>{ housingElement.location }</h2>
                <section className='tags'>
                    <Tags tags = { housingElement.tags } />
                </section>
            </div>
            <div className='stars-host'>
                { stars(numberOfActiveStars) }
                <div className='host'>
                    <p className='value__p font-red'>{ housingElement.host.name }</p>
                    <img 
                        src = { housingElement.host.picture } 
                        className='host-picture' 
                        alt = 'host picture' />
                </div>
            </div>
        </div>
        <section className='collapse-container collapse-container-housing'>
            <Collapse 
                titleArgument = 'Description' 
                children = { housingElement.description } 
                description = { true }
             />
            <Collapse
                titleArgument = 'Équipements' 
                children = { <Equipments equipments = { housingElement.equipments } /> }
                description = { false }
             />
        </section>
    </>
    )
}