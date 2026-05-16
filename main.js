const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {

    const question = item.querySelector(".accordion-question");

    question.addEventListener("click", () => {

        // Cierra todos los acordeones
        accordionItems.forEach((accordion) => {

            if (accordion !== item) {
                accordion.classList.remove("active");
            }

        });

        // Abre o cierra el actual
        item.classList.toggle("active");

    });

});