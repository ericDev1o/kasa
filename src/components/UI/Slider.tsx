import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * This component is meant for possible future reuse of the slider on another page.
 * @param pictures the backend API pictures URLs
 * @returns the slider with in case of multiple pictures
 * the picture counter and previous or next arrows
 * or an error page if there's 
 * -> no picture data for that housing Id or
 * -> an error at component set up and rendering
 */
export default function Slider ({ pictures }: { pictures: string[]})
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