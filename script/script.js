// Liste des spécialités
const specialities = [
    "Sors tes crayons de couleurs, en route pour REACT !",
    "Elle est où ta lampe frontale ? T'en auras besoin en DATA !",
    "Elle est sortie de nulle part, mais elle est pour toi ! Rdv en I++",
  ];
  
  // Fonction pour choisir une spécialité au hasard
  function chooseSpeciality() {
    const randomIndex = Math.floor(Math.random() * specialities.length);
    return specialities[randomIndex];
  }
  
  // Fonction pour afficher le résultat
  function displayResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Résultat : ${chooseSpeciality()}`;
  }
  
  // Associer la fonction displayResult au clic du bouton
  document.getElementById("chooseButton").addEventListener("click", displayResult);