const password = "(1, 2)"
let proompt = ""
do {
    proompt = window.prompt("Solve this linear system to find the password: \n 2𝔁 + 3𝔂 = 8 \n 3𝔁 + 2𝔂 = 7 \n Enter the password in the form (𝔁, 𝔂):")
} while (!proompt)

if (proompt.trim() === password) {
    alert("Let them in. Let's hope they didn't use inspect element like a nerd.")
} else {
    alert("Pay attention in math class instead of playing Valorant.")
    window.location.href = "https://www.youtube.com/watch?v=mxeo3zaf0Vo"
}