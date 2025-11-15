
// Récupère les éléments dans des constantes
const fullScreenImage = document.getElementById('fullScreenImage');
const powerButton = document.getElementById('powerButton');
const superMusique = document.getElementById('super_musique');
const powerSound = document.getElementById('power_sound');
const powerDiv = document.getElementById('div_power');

let musiqueLancee = false; // Évite de relancer plusieurs fois

function hideBoth() { // Fonction cachant les images et la div
if (fullScreenImage) fullScreenImage.style.display = 'none';
if (powerButton) powerButton.style.display = 'none';
if (powerDiv) powerDiv.style.display = 'None';
}

function playAndLoopMusic() { // J'ai compris le JavaScript ! JE SUIS UN DIEU !!!
	{ // Met la musique à 0, règle la boucle sur true et lance la musique
		superMusique.loop = true;
		superMusique.currentTime = 0;
		superMusique.play();
		musiqueLancee = true;
	}
}

// Cliquer sur le bouton POWER masque les deux éléments et démarre la musique
if (powerButton) {
	powerButton.addEventListener('click', () => {
		hideBoth();
		powerSound.play();
		if (!musiqueLancee) playAndLoopMusic();
	});
}