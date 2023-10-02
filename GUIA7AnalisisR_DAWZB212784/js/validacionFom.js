document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        const nameRegex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
        if (!nameRegex.test(nameInput.value)) {
            alert("Por favor, ingrese un nombre válido.");
            event.preventDefault();
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailInput.value)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            event.preventDefault();
            return;
        }
    });
});