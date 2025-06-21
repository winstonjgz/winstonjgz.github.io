document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const passwordValueInput = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const copiedMessage = document.getElementById('copied-message');
    const passwordStrengthIndicator = document.getElementById('password-strength-indicator');
    const passwordLengthSlider = document.getElementById('pass-slider');
    const passwordLengthDisplay = document.getElementById('password-length-display');
    const options = document.querySelectorAll('.settings input[type="checkbox"]');
    const generateBtn = document.getElementById('generate-btn');

    // Definir los conjuntos de caracteres
    const characters = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+=-{}[]:;|<>,.?/"
    };

    /**
     * Genera una contraseña basada en las opciones seleccionadas y la longitud.
     */
    const generatePassword = () => {
        let allCharacters = ""; // Cadena que contendrá todos los caracteres posibles
        let generatedPassword = ""; // La contraseña final generada
        let requiredCharacters = []; // Para asegurar que cada tipo seleccionado tenga al menos un carácter

        // Construir la cadena de caracteres disponibles y los caracteres obligatorios
        options.forEach(option => {
            if (option.checked) {
                const charType = characters[option.id];
                allCharacters += charType;
                // Añadir un carácter aleatorio de este tipo a los requisitos
                if (charType.length > 0) {
                    requiredCharacters.push(charType[Math.floor(Math.random() * charType.length)]);
                }
            }
        });

        // Si no hay tipos de caracteres seleccionados, no se puede generar contraseña
        if (allCharacters.length === 0) {
            passwordValueInput.value = "";
            updatePasswordStrength(); // Actualizar el indicador a "débil" o vacío
            return;
        }

        const length = passwordLengthSlider.value;

        // Añadir los caracteres obligatorios primero
        for (let i = 0; i < requiredCharacters.length; i++) {
            generatedPassword += requiredCharacters[i];
        }

        // Rellenar el resto de la contraseña con caracteres aleatorios de todos los tipos seleccionados
        for (let i = generatedPassword.length; i < length; i++) {
            generatedPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }

        // Mezclar la contraseña para que los caracteres obligatorios no estén siempre al principio
        generatedPassword = shuffleString(generatedPassword);

        passwordValueInput.value = generatedPassword;
        updatePasswordStrength(); // Actualizar el indicador de fuerza
    };

    /**
     * Mezcla una cadena de caracteres.
     * @param {string} str La cadena a mezclar.
     * @returns {string} La cadena mezclada.
     */
    const shuffleString = (str) => {
        let array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
        }
        return array.join('');
    };

    /**
     * Actualiza el indicador de fuerza de la contraseña.
     */
    const updatePasswordStrength = () => {
        const password = passwordValueInput.value;
        let strength = 0;

        // Calcular la fuerza basada en la longitud
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (password.length >= 16) strength++;

        // Calcular la fuerza basada en los tipos de caracteres
        let hasLowercase = /[a-z]/.test(password);
        let hasUppercase = /[A-Z]/.test(password);
        let hasNumbers = /[0-9]/.test(password);
        let hasSymbols = /[!@#$%^&*()_+=\-{}[\]:;|<>,.?/]/.test(password);

        if (hasLowercase) strength++;
        if (hasUppercase) strength++;
        if (hasNumbers) strength++;
        if (hasSymbols) strength++;

        // Determinar la clase del indicador
        if (strength <= 3) {
            passwordStrengthIndicator.id = 'weak';
        } else if (strength <= 6) {
            passwordStrengthIndicator.id = 'medium';
        } else {
            passwordStrengthIndicator.id = 'strong';
        }
    };

    /**
     * Copia la contraseña al portapapeles y muestra un mensaje.
     */
    const copyPassword = () => {
        navigator.clipboard.writeText(passwordValueInput.value)
            .then(() => {
                copiedMessage.classList.add('show');
                setTimeout(() => {
                    copiedMessage.classList.remove('show');
                }, 1500); // El mensaje desaparece después de 1.5 segundos
            })
            .catch(err => {
                console.error('Error al copiar la contraseña: ', err);
                alert('No se pudo copiar la contraseña.');
            });
    };

    /**
     * Valida que al menos una opción de tipo de carácter esté seleccionada.
     * Si no, habilita la opción de minúsculas.
     */
    const validateOptions = () => {
        const checkedOptions = Array.from(options).filter(option => option.checked);
        if (checkedOptions.length === 0) {
            // Si no hay opciones marcadas, por defecto marcamos y deshabilitamos minúsculas
            document.getElementById('lowercase').checked = true;
            document.getElementById('lowercase').disabled = true; // Deshabilita la interacción
        } else if (checkedOptions.length === 1 && checkedOptions[0].id === 'lowercase') {
            // Si solo minúsculas está marcada, deshabilita la interacción para que no se pueda desmarcar
            document.getElementById('lowercase').disabled = true;
        } else {
            // Si hay más de una opción o una diferente a minúsculas, habilita minúsculas
            document.getElementById('lowercase').disabled = false;
        }
    };

    // --- Event Listeners ---

    // Generar contraseña inicial al cargar la página
    generatePassword();

    // Actualizar la longitud de la contraseña en el display y generar nueva contraseña
    passwordLengthSlider.addEventListener('input', () => {
        passwordLengthDisplay.textContent = passwordLengthSlider.value;
        generatePassword();
    });

    // Volver a generar la contraseña y validar opciones al cambiar cualquier checkbox
    options.forEach(option => {
        option.addEventListener('change', () => {
            validateOptions();
            generatePassword();
        });
    });

    // Copiar contraseña al hacer clic en el botón de copiar
    copyBtn.addEventListener('click', copyPassword);

    // Generar contraseña al hacer clic en el botón de "Generar"
    generateBtn.addEventListener('click', generatePassword);

    // Llamar a validateOptions al inicio para configurar el estado inicial
    validateOptions();
});