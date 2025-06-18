/**
 * @param housingsURL local /data/logements.json /public file
 * or fetched remote URL
 * @returns housingType[] all JSON housings in fetched source see below unit or
 * an error message.
 */
export default async function housingFetcher_all(housingsURL: string) {
    const response = await fetch(housingsURL);

    if ( ! response.ok ) return `erreur: les données n'ont pu être obtenues. 
        Vérifiez  
            1) l'URL si vous l'avez tapée, 
            2) votre connexion réseau ou 
            3) réessayez plus tard s'il vous plaît.`;

    return await response.json();
}

/**
 * @param housingsURL see beneath
 * @param id URL housing id see
 * ./housingChecker.ts/housingChecker_KoId_InformMessage() 
 * and
 * ./formatChecker.ts
 * @returns the found housing see ../types/housingType.ts
 */
export async function housingFetcher_id(housingsURL: string, id: string) {
    const data = await housingFetcher_all(housingsURL);

    const housing = data.find((item: { id: string }) => item.id ===  id );
    
    if (! housing) return `erreur: le logement n'a pas été trouvé. 
            Il doit correspondre à un identifant existant de logement connu de Kasa.
            Pourriez-vous vérifier l'identifiant et recommencer s'il vous plaît?`;

    return housing;
}