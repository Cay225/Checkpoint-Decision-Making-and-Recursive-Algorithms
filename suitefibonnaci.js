function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemples d'utilisation
console.log(fibonacci(7));  // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)
console.log(fibonacci(10)); // Output: 55 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
