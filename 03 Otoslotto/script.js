function otoslotto() {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
        numbers.push(i);
    }

    for (let i = numbers.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    const result = numbers.slice(0, 5).sort((a, b) => a - b);
    return result;
}

document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const resultDiv = document.getElementById("result");

    generateButton.addEventListener("click", function() {
        const selectedNumbers = otoslotto();
        resultDiv.textContent = `A generált számok: ${selectedNumbers.join(', ')}`;
    });
});