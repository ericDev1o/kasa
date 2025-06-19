import housingType from "../types/housingType";

/**
 * @param housing see ../types/housingType.ts
 * @returns false if the lazy checked rating isn't a number between 1 and 5,
 * else true it is Ok.
 */
export default function housingRatingChecker_isOk(housing: housingType) {
    const ratingNumber = Number(housing.rating);
    if( ratingNumber >= 1 && ratingNumber <= 5)
        return true;
    return false;
}