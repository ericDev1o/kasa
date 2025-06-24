import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/containers/Layout';
import housingType from '../types/housingType';
import HousingComponent from '../components/UI/HousingComponent';
import housingIdInURLformatChecker from '../helpers/formatChecker';
import { housingFetcher_id } from '../helpers/housingFetcher';

let housing: housingType;

/**
 * @returns the housing page of requested housingId.
 * It must exist in 
 *     1) the backend API or here simple
 *     2) example file extract /src/data/logements.json.
 * 
 * The URL param must be in expected format.
 * In case of user URL typing its format is checked in
 *     => /src/helpers/formatChecker.ts
 * Briefly, the expected format is
 *     1) exactly 8 caracters including
 *         a) lower case letters
 *         b) digits
 */
export default function Housing() {
    const [loading, setLoading] = useState(true);
    const { housingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(housingId && ! housingIdInURLformatChecker(housingId)) {
                    navigate('/error');
                }
                else if (housingId) {
                    housing = await housingFetcher_id('/data/logements.json', housingId);
                } else if(! housingId) {
                    navigate('/error');
                }
            } catch (error) {
                navigate('/error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [housingId, navigate]);

    return (
        <Layout page = { 'housing' }>
            { loading 
                ? 
                <h1 className='error-title__h1 margin-bottom'>
                    Chargement en cours...
                </h1>
                :
                <HousingComponent housingElement = { housing } />
            }
        </Layout>
    );
};