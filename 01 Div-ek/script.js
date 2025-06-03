const divs = document.querySelectorAll("body > div");

divs[0].textContent = "Első";
divs[2].textContent = "Harmadik";
divs[divs.length - 1].textContent = "Utolsó";

