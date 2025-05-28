import HousingType from "../../types/HousingType";
import Collapse from "./Collapse";

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
        alert("equipmentsString : " + equipmentsString);
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
            <Collapse title='Équipements' content = { equipmentsString } />
        </div>
    );
};

export default HousingComponent;