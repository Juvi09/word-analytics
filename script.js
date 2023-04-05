const textareaEl = document.querySelector('.textarea');

textareaEl.addEventListener('input', function () {
    // ! Determine new number
    const numberOfCharacters = textareaEl.value.length;

    // ! set new number
    const charactersNumberEl = document.querySelector('.stat__number--characters');
    charactersNumberEl.textContent = numberOfCharacters;
});