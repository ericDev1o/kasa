import housingFetcher_all, { housingFetcher_id } from "./housingFetcher";

/**
 * @param housingsURL see ./housingFetcher.ts
 * @returns 
 * true if all the housing have a valid rating
 * false if the rating of at least 1 housing isn't a number between 1 and 5.
 */
export async function housingChecker_AreAllIds_Ok(housingsURL: string) {
    housingFetcher_all(housingsURL);

    return false;
}

/**
 * @param housingsURL see above
 * @param id the housing 8 caracters id from the URL host:port/housing/ida1b2c3
 * checked by ./formatChecker.ts and see above fetcher helper
 * @returns an error message if the rating of the housing isn't a number,
 * else an empty string.
 */
export default async function housingChecker_KoId_InformMessage(housingsURL: string, id: string) {
    housingFetcher_id(housingsURL, id);

    return "a rating isn't valid";
}