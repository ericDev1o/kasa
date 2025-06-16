import HousingType from '../../types/HousingType';
import Collapse from './Collapse';
import starFull from'/images/star-active.svg';
import starEmpty from '/images/star-inactive.svg';
import { useEffect, useState } from 'react';

const Star = ({ isActive }: { isActive: boolean }) => {
    let starImgURL;
    if(isActive)
        starImgURL = starFull;
    else starImgURL = starEmpty;
    return (
        <img
            className = 'star'
            src = { starImgURL }
            alt = 'rating star'
        />
    );
}

const Stars = ({ numberOfStars }: { numberOfStars: number}) => {
    const starsActive = Array.from({ length: numberOfStars },
        (_, i: number) => <Star key = { i } isActive = { true } />
    );
    const starsInactive = Array.from({ length: 5 - numberOfStars },
        (_, i: number) => <Star key = { 5 - i } isActive = { false } />
    );
    const allStars = starsActive.concat(starsInactive);

    return (
        <div className='stars'>
            { allStars }
        </div>
    );
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
const HousingComponent = ({ housingElement }: { housingElement: HousingType }) => (
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
                <Stars numberOfStars = { Number(housingElement.rating) } />
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
);
export default HousingComponent;