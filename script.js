document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); //забороняємо перезавантаження сторінки
    let isValid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Очищаємо попередні помилки
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    //Перевіряєио порожні поля
    if (name === "") {
        document.getElementById("nameError").textContent = "Поле не може бути порожнім";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Поле не може бути порожнім";
        isValid = false;
    }
    if (password === "") {
        document.getElementById("passwordError").textContent = "Поле не може бути порожнім";
        isValid = false;
    }
    if (confirmPassword === "") {
        document.getElementById("confirmError").textContent = "Поле не може бути порожнім";
        isValid = false;
    }
    //Перевіряємо email на @
    if (email !== "" && !email.includes("@")) {
        document.getElementById("emailError").textContent = "Email має містити символ @";
        isValid = false;
    }
    //Перевіряємо довжини пароля
    if (password.length > 0 && password.length < 8) {
        document.getElementById("passwordError").textContent = "Пароль має бути не менше 8 символів";
        isValid = false;
    }

    //Перевірка співпадіння паролів
    if (password !== confirmPassword && confirmPassword !== "") {
        document.getElementById("confirmError").textContent = "Невірний пароль. Паролі не співпадають!";
        isValid = false;
    }
    //якщо все успішно
    if (isValid) {
        alert("Реєстрація успішна!");
    }

});
