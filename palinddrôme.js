function estPalindrome(chaine) {
    // Retirer les espaces et convertir en minuscules pour ignorer la casse et les espaces
    chaine = chaine.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (chaine.length <= 1) {
        return true;
    } else if (chaine[0] !== chaine[chaine.length - 1]) {
        return false;
    } else {
        return estPalindrome(chaine.slice(1, chaine.length - 1));
    }
}

// Exemples d'utilisation
console.log(estPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(estPalindrome("racecar"));                         // Output: true
console.log(estPalindrome("hello"));                           // Output: false
