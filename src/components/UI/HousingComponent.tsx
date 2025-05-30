import HousingType from "../../types/HousingType";
import Collapse from "./Collapse";
import starFull from'../../assets/images/star-active.svg';
import starEmpty from '../../assets/images/star-inactive.svg';

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
        <>
            { allStars }
        </>
    );
}

/**
 * 
 * @param housingElement a type corresponding to backend API housing content
 * @returns a housing page content with newlined equipments content in the Collapse
 */
const HousingComponent = ({ housingElement }: { housingElement: HousingType }) => {
    let equipmentsString: string = '';
    if(housingElement.equipments !== undefined && Array.isArray(housingElement.equipments)) {
        if (housingElement.equipments.length > 1) {
            housingElement.equipments.map(
                equipment => (
                    equipmentsString = equipmentsString.concat(equipment, '\n')
                )
            );
        } else if(housingElement.equipments.length == 1)
            equipmentsString = equipmentsString.concat(housingElement.equipments[0]);
    }

    return(
        <>
            <img src = { housingElement.cover } alt='housing cover picture' />
            <div>
                <h1 className='error-title__h2 housing-title__h1'>{ housingElement.title }</h1>
                <h2 className='housing__h2'>{ housingElement.location }</h2>
                { housingElement.tags }
            </div>
            <div>
                <Stars numberOfStars = { Number(housingElement.rating) } />
                <p className='value__p font-red'>{ housingElement.host.name }</p>
                <img src = { housingElement.host.picture } alt = 'host picture' />
            </div>
            <section className='collapse-container'>
                <Collapse title='Description' content = { housingElement.description } />
                <Collapse title='Équipements' content = { equipmentsString } />
            </section>
        </>
    );
};

export default HousingComponent;