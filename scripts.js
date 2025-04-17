const form = document.querySelector(".Fale-Conosco")
const mascara = document.querySelector(".mascara-fale-conosco")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderform() {
    form.style.left = "-500px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}