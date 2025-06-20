import { useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import housingType from '../../types/housingType';
import Collapse from './Collapse';
import starFull from '/images/star-active.svg';
import starEmpty from '/images/star-inactive.svg';
import housingRatingChecker_isOk from '../../helpers/housingChecker';

const numberOfStars = 5;

const Star = ({ imgURI }: { imgURI: string }) => (
    <img
        className = 'star'
        src = { imgURI }
        alt = 'rating star'
    />
);

/**
 * @param numberOfActiveStars: after rating check it is 
 * -> either the rating or 
 * -> an error message
 * @returns 
 * -> 1 or ... or 5
 * -> 'erreur de donnée: la note doit être un chiffre de 1 à 5 inclus'
 * i.e. 'data error: rating must be a digit between 1 and 5 included'
 */
const Stars = (
    { numberOfActiveStars }: { numberOfActiveStars: number | string }
) => 
{
    if(typeof numberOfActiveStars == 'string')
        return <p className='stars-rating-error'>{ numberOfActiveStars }</p>
    else {
        let stars: Array<ReactNode> = new Array<ReactNode>(5);

        for( let j = 0; j < numberOfActiveStars; j++)
        {
            stars.push(<Star key = { j } imgURI = { starFull } />);
        }

        for( let j = 0; j < numberOfStars - numberOfActiveStars; j++)
        {
            stars.push(<Star key = { numberOfStars - j } imgURI = { starEmpty } />);
        }

        return (
            <div className='stars'>{ stars }</div>
        );
    }
}

const Tag = ({ tagElement }: { tagElement: string }) => (
    <article className='tag'>
        <p className='tag__p'>{ tagElement }</p>
    </article>
);

const Tags = ({ tags }: { tags: string[] }) => (
    <>
        { tags.map(tag => (
                <Tag key = { tag } tagElement= { tag } />
        ))
    }
    </>
);

const Equipment = ({ equipmentElement }: { equipmentElement: string }) => (
    <p className='equipment__p'>
        { equipmentElement }
    </p>
);

const Equipments = ({ equipments }: { equipments: string[] }) => (
    <>
        { equipments.map(equipment => (
            <Equipment key= { equipment } equipmentElement = { equipment } />
        ))}
    </>
);

const Slider = ({ pictures }: { pictures: string[]}) => 
{
    const numberOfPictures = { pictures }.pictures.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [slideClass, setSlideClass] = useState('slide-zoom');
    const navigate = useNavigate();

    try
    {
        if(pictures && pictures.length > 0) 
        {                  
            const nextSlide = () => {
                setFadeClass('');
                setSlideClass('');
                setCurrentIndex(previndex => (previndex + 1) % numberOfPictures);
            }

            const prevSlide = () => {
                setFadeClass('');
                setSlideClass('');
                setCurrentIndex(prevIndex => (prevIndex - 1 + numberOfPictures) % numberOfPictures);
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
            );
        }
        else navigate('/error_there_must_be_picture·s)');
    } catch(error) {
        if (error instanceof TypeError)
            navigate('/error_you_must_check_a_type_of_internal_banner_content_or_external_housing_data');
        else
            navigate('/error');
    }
}

/**
 * @param housingElement a type corresponding to backend API housing content
 * @returns a housing page content with newlined equipments content in the Collapse
 */
export default function HousingComponent ({ housingElement }: { housingElement: housingType }) 
    {
        let numberOfActiveStarsAfterCheck;
        if(housingRatingChecker_isOk(housingElement))
            numberOfActiveStarsAfterCheck = Number(housingElement.rating);
        else numberOfActiveStarsAfterCheck = 'erreur de donnée: la note doit être un chiffre de 1 à 5';

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
                    <Stars numberOfActiveStars = { numberOfActiveStarsAfterCheck} />
                    <div className='host'>
                        { <p className='value__p font-red'>{ housingElement.host.name }</p> }
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
}