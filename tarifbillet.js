function tarificationBillet(age) {
    let prix;

    if (age <= 12) {
        prix = 10;
    } else if (age >= 13 && age <= 17) {
        prix = 15;
    } else {
        prix = 20;
    }

    return `Le prix du billet pour une personne de ${age} ans est de ${prix} $.`;
}

// Exemples d'utilisation
console.log(tarificationBillet(10));  // Output: "Le prix du billet pour une personne de 10 ans est de 10 $."
console.log(tarificationBillet(16));  // Output: "Le prix du billet pour une personne de 16 ans est de 15 $."
console.log(tarificationBillet(25));  // Output: "Le prix du billet pour une personne de 25 ans est de 20 $."
