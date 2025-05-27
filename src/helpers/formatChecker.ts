const housingIdInURLformatChecker = (housingId: string) => {
    if( ! new RegExp('^([a-z0-9]){8}$').test(housingId))
        alert(`Le format d'identifant de logement que vous avez écrit dans l'URL est invalide.
            Le format attendu est:
            1) 8 caractères parmi
                a) des lettres en minsucules
                b) des chiffres
            Veuillez recommencer s'il vous plaît.`);
}

export default housingIdInURLformatChecker;