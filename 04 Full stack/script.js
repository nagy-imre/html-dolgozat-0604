function fullStack(frontEnd, backEnd) {
    const frontEndDevelopers = frontEnd.split(';').map(name => name.trim()).filter(name => name !== '');
    const backEndDevelopers = backEnd.split(';').map(name => name.trim()).filter(name => name !== '');
    const fullStackDevelopers = frontEndDevelopers.filter(developer => backEndDevelopers.includes(developer));
    return fullStackDevelopers
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const frontEndInput = document.getElementById('frontend');
    const backEndInput = document.getElementById('backend');
    const resultDiv = document.getElementById('result');

    searchButton.addEventListener('click', () => {
        const frontEndText = frontEndInput.value;
        const backEndText = backEndInput.value;

        const commonDevelopers = fullStack(frontEndText, backEndText);

        if (commonDevelopers.length > 0) {
            resultDiv.textContent = `Full Stack fejlesztők: ${commonDevelopers.join('; ')}`;
        }
        else {
            resultDiv.textContent = 'Nincs Full Stack fejlesztő.';
        }
    }
    );
});