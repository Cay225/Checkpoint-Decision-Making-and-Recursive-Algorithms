function estAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return `${annee} est une année bissextile.`;
    } else {
        return `${annee} n'est pas une année bissextile.`;
    }
}

// Exemples d'utilisation
console.log(estAnneeBissextile(2020)); // Output: "2020 est une année bissextile."
console.log(estAnneeBissextile(2021)); // Output: "2021 n'est pas une année bissextile."
