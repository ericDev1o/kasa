import HousingType from '../../types/HousingType';
import Collapse from './Collapse';
import starFull from'../../assets/images/star-active.svg';
import starEmpty from '../../assets/images/star-inactive.svg';
import { CollapseContentNode } from '../UI/Collapse';

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
    //const numberOfPictures = pictures.length;
    return (
        <>
            { pictures.map(picture => (
                <img src = { picture } alt = 'logement' />
            ))}
        </>
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
            <div className='cover-container'>
                <img src = { housingElement.cover } alt = { housingElement.title } className = 'cover' />
            </div>
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
            <section className='collapse-container'>
                <Collapse title='Description' content = { housingElement.description } description = { true } />
                <CollapseContentNode 
                    title = 'Équipements' 
                    children = { <Equipments equipments = { housingElement.equipments } /> } />
            </section>
        </>
    );
};

export default HousingComponent;