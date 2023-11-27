const btnRegister = document.getElementById('register')
const container = document.getElementById('container')
const btnLogin = document.getElementById("login")

btnRegister.addEventListener('click', ()=>{
    container.classList.add("active")
})

btnLogin.addEventListener('click', ()=>{
    container.classList.remove("active")
})

const btnNext = document.getElementById("btn-next")
const hiddenElements = document.querySelectorAll(".hiddenF")
const viewedElements = document.querySelectorAll(".viewF")
const spanC = document.getElementById("spanC")
const WrongE = document.getElementById("WrongE")

btnNext.addEventListener("click", () => {
    const correoInput = document.querySelector('.viewF[type="email"]');
    const correo = correoInput.value;

    function validarCorreo(correo) {
        const patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return patron.test(correo);
    }
    if (validarCorreo(correo)) {
        spanC.textContent = correo
        viewedElements.forEach(element => {
            element.style.display = "none";
        });

        hiddenElements.forEach(element => {
            if (window.getComputedStyle(element).display === "none") {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        });
    } else {
        WrongE.textContent = "Ingrese un correo electrónico válido*"
        alert("Por favor, ingrese un correo electrónico válido.");
    }
});

const arrowBack = document.getElementById("arrowBack")

arrowBack.addEventListener("click", ()=>{

    hiddenElements.forEach(element => {
        element.style.display = "none";
    });

    viewedElements.forEach(element => {
        if (window.getComputedStyle(element).display === "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
})