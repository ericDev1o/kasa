import housingType from '../../types/housingType';
import Collapse from './Collapse';
import Stars from './Stars';
import Slider from './Slider';
import housingRatingChecker_toNumber from '../../helpers/housingChecker';

/**
 * @param housingElement a type corresponding to backend API housing content
 * @returns a housing page content with newlined equipments content in the Collapse
 */
export default function HousingComponent ({ housingElement }: { housingElement: housingType }) 
{
    if(housingElement != undefined) {
        let numberOfActiveStarsAfterCheck = housingRatingChecker_toNumber(housingElement);

        return (
        <>
            <Slider pictures = { housingElement.pictures } /> 
            <div className='titles-tags-stars-host'>
                <div className='titles-tags'>
                    <h1 className='error-title__h2 housing-title__h1'>{ housingElement.title }</h1>
                    <h2 className='housing__h2'>{ housingElement.location }</h2>
                    <section className='tags'>
                        { housingElement.tags.map(tag => (
                                <article className='tag'>
                                    <p className='tag__p'>{ tag }</p>
                                </article>
                            ))
                        }
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
                    children = { housingElement.equipments.map(equipment => (
                        <p className='equipment__p'>
                            { equipment }
                        </p>
                    ))}
                    description = { false }
                />
            </section>
        </>
        );
    }
}