document.getElementById("dynamicDiv").addEventListener("click", function() {
    document.body.classList.add("newBackground");

    setTimeout(() => {
        document.body.classList.remove("newBackground");
    }, 2000);
});