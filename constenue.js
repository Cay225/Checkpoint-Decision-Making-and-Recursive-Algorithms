function conseillerTenue(temp, pluie) {
    if (temp >= 25) {
        return "Il fait chaud. Portez des vêtements légers.";
    } else if (temp >= 15 && temp < 25) {
        if (pluie) {
            return "Il fait frais et il pleut. Prenez un parapluie et portez un manteau imperméable.";
        } else {
            return "Il fait frais. Portez un pull léger.";
        }
    } else {
        if (pluie) {
            return "Il fait froid et il pleut. Portez un manteau chaud et un parapluie.";
        } else {
            return "Il fait froid. Portez un manteau chaud et une écharpe.";
        }
    }
}

// Exemples d'utilisation
console.log(conseillerTenue(30, false));  // Output: "Il fait chaud. Portez des vêtements légers."
console.log(conseillerTenue(20, true));   // Output: "Il fait frais et il pleut. Prenez un parapluie et portez un manteau imperméable."
console.log(conseillerTenue(10, true));   // Output: "Il fait froid et il pleut. Portez un manteau chaud et un parapluie."
