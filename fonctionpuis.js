function puissance(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * puissance(base, exp - 1);
    }
}

// Exemples d'utilisation
console.log(puissance(2, 5));  // Output: 32 (2^5 = 32)
console.log(puissance(3, 4));  // Output: 81 (3^4 = 81)
