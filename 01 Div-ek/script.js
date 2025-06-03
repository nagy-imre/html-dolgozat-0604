const divs = document.querySelectorAll("body > div");

divs[0].textContent = "Első";

divs[2].textContent = "Harmadik";

divs[divs.length - 1].textContent = "Utolsó";

for (let i = 0; i < divs.length; i++) {
    if (i !== 0 && i !== 2 && i !== divs.length -1) {
        divs[i].textContent = `${i + 1}`;
    }
}