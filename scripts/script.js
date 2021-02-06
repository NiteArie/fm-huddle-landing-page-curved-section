const app = (() => {
    const formElement = document.querySelector(".js-form");
    const emailInputElement = document.querySelector(".js-input");
    const emailErrorElement = document.querySelector(".js-email-error");

    const emailFormat = /\S+@\S+/;

    formElement.addEventListener("click", (event) => {
        event.preventDefault();

        let email = emailInputElement.value;

        if (validEmailFormat(email)) {
            hideEmailErrorElement();
        } else {
            showEmailErrorElement();
        }
    })

    function validEmailFormat(email) {
        return email.match(emailFormat);
    }

    function showEmailErrorElement() {
        emailErrorElement.classList.remove("h-hidden");
    }

    function hideEmailErrorElement() {
        emailErrorElement.classList.add("h-hidden");
    }
})();