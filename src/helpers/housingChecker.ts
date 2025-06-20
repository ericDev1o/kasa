import housingType from "../types/housingType";

/**
 * @param housing see ../types/housingType.ts
 * @returns false if the lazy checked rating isn't a number between 1 and 5,
 * else true it is Ok.
 */
export default function housingRatingChecker_isOk(housing: housingType) {
    try {
        const ratingNumber = Number(housing.rating);

        if( typeof ratingNumber == typeof Number && ratingNumber >= 1 && ratingNumber <= 5)
            return true;
        return false;
    }
    catch(error){
        const castingError = 'API rating must be a number.';

        if(typeof error == typeof TypeError)
            throw new TypeError(castingError);
        else throw new Error(`${ castingError } Please finally check root error message and stack trace.`)
    }
}