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
    const page = 'housing';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { housingId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(housingId && ! housingIdInURLformatChecker(housingId)) {
                    navigate('/error');
                    setError(`Le format d'identifant de logement que vous avez écrit dans l'URL est invalide.
                    Il doit contenir exactement 8 caractères incluant des lettres minsucules et des chiffres.
                    Pourriez-vous s'il vous plaît rectifier et recommencer?`);
                }
                else if (housingId) {
                    housing = await housingFetcher_id('/data/logements.json', housingId);
                } else if(! housingId) {
                    navigate('/error');
                    setError("Erreur à la récupération de l'identifiant logement depuis l'URL");
                }
            } catch (error) {
                navigate('/error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [housingId, navigate]);

    if (loading) {
        return (
            <Layout page = { page }>
                <h1 className='error-title__h1 margin-bottom'>
                    Chargement en cours...
                </h1>
            </Layout>
        );
    }
    else if(! error)
        return(
            <Layout page = { page }>
                <HousingComponent housingElement = { housing } />
            </Layout>
        );
};