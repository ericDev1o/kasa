/**
 * 
 * @param housingId housing id in URL for example https://host:port/housing/id
 * @returns false if the format is not a valid housing id.
 * It must be exactly 8 caracters long including only lower case letters
 * and digits. An example of valid id is b9123946.
 */
const housingIdInURLformatChecker = (housingId: string) => {
    if( ! new RegExp('^([a-z0-9]){8}$').test(housingId))
        return false;
    else return true;
}

export default housingIdInURLformatChecker;