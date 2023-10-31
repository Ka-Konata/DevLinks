const classLightMode = "light-mode"
const classAffected = "affected-by-theme-mode"

const botaoBoaNoite = document.getElementById("botao-dia-noite-button")
const elementsAffecteds = document.getElementsByClassName("affected-by-theme-mode")

// Changing the theme when clicking on the button
botaoBoaNoite.onclick = () => {
    const classList = botaoBoaNoite.children[0].classList

    if (!classList.contains(classLightMode)) {
        classList.add(classLightMode)

        for (let i=0; i<elementsAffecteds.length; i++)  {
            elementsAffecteds[i].classList.add(classLightMode)
        }
    } else {
        classList.remove(classLightMode)
        
        for (let i=0; i<elementsAffecteds.length; i++) {
            elementsAffecteds[i].classList.remove(classLightMode)
        }
    }
}