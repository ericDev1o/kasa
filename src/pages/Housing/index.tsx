import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/containers/Layout';
import HousingType from '../../types/HousingType';
import HousingComponent from '../../components/UI/HousingComponent';
import housingIdInURLformatChecker from '../../helpers/formatChecker';

let housing: HousingType;

/**
 * 
 * @returns the housing page of requested housingId.
 * It must exist in 
 *     1) the backend API or here simple
 *     2) example file extract /src/data/logements.json.
 * 
 * The URL param must be in expected format.
 * In case of user URL typing its format is checked in
 *     => /src/helpers/formatChecker.ts
 * Briefly, the expected format is
 *     1) 8 caracters
 *         a) lower case letters
 *         b) digits
 */
const Housing = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { housingId } = useParams();
    alert('housingId : ' + housingId);
    if(housingId)
        housingIdInURLformatChecker(housingId);

    const fetchData = async () => {
        try {
            const response = await fetch("/src/data/logements.json");
            if ( ! response.ok )
                throw new Error(`Les données n'ont pu être obtenues.
                    Vérifiez 
                        1) l'URL si vous l'avez tapée, 
                        2) votre connexion réseau ou 
                        3) réessayez plus tard s'il vous plaît.`
                );
            const data = await response.json();
            housing = data.find((item: { id: string }) => item.id ===  housingId );
            if (! housing)
                throw new Error(`Le logement n'a pas été trouvé.
                    Vérifiez l'identifiant s'il vous plaît.`
                );
        } catch (error) {
            if(
                error instanceof ReferenceError ||
                error instanceof TypeError ||
                error instanceof SyntaxError ||
                error instanceof Error
            )
                setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();

    if (loading) {
        return <Layout page = 'housing'>
            <h1 className='error-title__h1 margin-bottom'>
                Chargement en cours...
            </h1>
        </Layout>;
    }

    if (error) {
	    return <Layout page = 'housing'>
            <h1 className='error-title__h1'>
                Oups!
            </h1>
            <h2 className='error-title__h2 margin-bottom'>{ error }</h2>
        </Layout>;
    }

    return(
        <Layout page = 'housing'>
            <HousingComponent housingElement = { housing } />
        </Layout>
    );
};

export default Housing;
