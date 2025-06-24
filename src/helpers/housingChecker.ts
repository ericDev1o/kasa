import housingType from "../types/housingType";

/**
 * @param housing see ../types/housingType.ts
 * @returns 
 * => the rating as a number if the checked rating is a number between 1 and 5 as expected.
 * => else an empty string to display nothing. No error, no default rating.
 */
export default function housingRatingChecker_toNumber(housing: housingType) {
    try {
        if(housing.rating != undefined && 
            housing.rating != null && 
            housing.rating !== '' &&
            ! isNaN(Number(housing.rating)) ) {
            const ratingNumber = Number(housing.rating);

            if(ratingNumber >= 1 && ratingNumber <= 5)
                return ratingNumber;
            else return '';
        }
        else return '';
    }
    catch(error){
        const conversionError = 'Rating must be a number.';

        if(typeof error == typeof TypeError)
            throw new TypeError(conversionError);
        else throw new Error(`${ conversionError } Please check error message and stack trace.`);
    }
}