import HousingType from "../../types/HousingType";
import Collapse from "./Collapse";

/**
 * 
 * @param housingElement a type corresponding to backend API housing content
 * @returns a housing page content with newlined equipments content in the Collapse
 */
const HousingComponent = ({housingElement}: {housingElement: HousingType}) => {
    const equipementsString = 'équipement exemple';
    alert('housingElement.equipements : ' + housingElement.equipements);
    if(housingElement.equipements !== undefined && Array.isArray(housingElement.equipements)) {
        if (housingElement.equipements.length > 1) {
            housingElement.equipements.map(
                equipement => (
                    equipementsString.concat(equipement, '\n')
                )
            );
        } else if(housingElement.equipements.length == 1)
            equipementsString.concat(housingElement.equipements[0]);
    }

    return(
        <div>
            <img src = { housingElement.cover } alt='housing cover picture' />
            <div>
                <h1>{ housingElement.title }</h1>
                <h2>{ housingElement.location }</h2>
                { housingElement.tags }
            </div>
            <div>
                { housingElement.rating }
                { housingElement.host.name }
                <img src = { housingElement.host.picture } alt = 'host picture' />
            </div>
            <Collapse title='Description' content = { housingElement.description } />
            <Collapse title='Équipements' content = { equipementsString } />
        </div>
    );
};

export default HousingComponent;