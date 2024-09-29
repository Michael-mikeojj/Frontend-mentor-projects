const faqToggleBtn = document.querySelectorAll(".answer-toggle-btn");
const faqAnswer = document.querySelectorAll(".answer");

faqToggleBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (button.value === "open") {
            faqAnswer[index].classList.toggle("hidden");
            button.innerHTML = `
                <img src="./assets/images/icon-plus.svg" class="btn-img" alt="button">
            `;
            button.value = "closed";
        } else if (button.value === "closed") {
            faqAnswer[index].classList.toggle("hidden");
            button.innerHTML =`
                <img src="./assets/images/icon-minus.svg" class="btn-img" alt="button">
            `;
            button.value = "open"
        };
    });
});