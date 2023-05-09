const password = "(1, 2)"
let proompt = ""
do {
    proompt = window.prompt("Résolvez ce système linéaire pour trouver le mot de passe: \n 2𝔁 + 3𝔂 = 8 \n 3𝔁 + 2𝔂 = 7 \n Entrez le mot de passe sous la forme de (𝔁, 𝔂):")
} while (!proompt)

if (proompt.trim() === password) {
    alert("Laissez-les entrer")
} else {
    alert("Écoutez en cours de mathématiques au lieu de jouer à Valorant")
    window.location.href = "https://www.youtube.com/watch?v=mxeo3zaf0Vo"
}