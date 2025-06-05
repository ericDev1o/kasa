import HousingType from '../../types/HousingType';
import Collapse from './Collapse';
import starFull from'../../assets/images/star-active.svg';
import starEmpty from '../../assets/images/star-inactive.svg';
import { CollapseContentNode } from '../UI/Collapse';
import { useEffect, useState, useRef } from 'react';

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
    const imageRef = useRef<HTMLImageElement>(null);
    const [bottomPosition, setBottomPosition] = useState(10);

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

    useEffect(() => {
        const handleResize = () => {
            if(imageRef.current) {
                    const imageHeight = imageRef.current.clientHeight;
                    const imageWidth = imageRef.current.clientWidth;
                    let heightMultiplier = 0;

                    if(imageWidth > 900 && imageWidth < 1024)
                        heightMultiplier = 0.35;
                    else if(
                        imageWidth > 1024
                        ||
                        (imageWidth > 700 && imageWidth < 900)
                    )
                        heightMultiplier = 0.3;
                     else if (imageWidth > 500 && imageWidth < 700)
                        heightMultiplier = 0.25;
                    else if (imageWidth < 500)
                        heightMultiplier = 0.1;
                    setBottomPosition(imageHeight * heightMultiplier);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
             window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='cover-container slider'>
        { 
            numberOfPictures === 1 
            ? 
            <img src = { pictures[0] } alt = 'logement' />
            : (
                <div className='slider-container'>
                    <button onClick = { prevSlide }>
                        <span className = 'arrow left material-symbols-outlined'>arrow_back_ios</span>
                    </button>
                    <img 
                        ref = { imageRef }
                        src = { pictures[currentIndex] } 
                        alt = 'logement' 
                        className = { `cover ${ fadeClass } ${ slideClass }` }
                    />
                    <div 
                        className='counter'
                        style={{ bottom: `${ bottomPosition }px` }}
                    >
                            { currentIndex + 1 } / { numberOfPictures }
                    </div>
                    <button onClick = { nextSlide }>
                        <span className = 'arrow right material-symbols-outlined'>arrow_forward_ios</span>
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
const HousingComponent = ({ housingElement }: { housingElement: HousingType }) => {
    return(
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
                <Collapse title='Description' content = { housingElement.description } description = { true } />
                <CollapseContentNode 
                    title = 'Équipements' 
                    children = { <Equipments equipments = { housingElement.equipments } /> } />
            </section>
        </>
    );
};

export default HousingComponent;