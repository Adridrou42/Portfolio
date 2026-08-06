
// Récupère les éléments dans des constantes
const fullScreenImage = document.getElementById('fullScreenImage');
const powerButton = document.getElementById('powerButton');
const superMusique = document.getElementById('super_musique');
const powerSound = document.getElementById('power_sound');
const powerDiv = document.getElementById('div_power');
const musiqueButton = document.getElementById('musiqueButton');

let musicPlayed = false; // Évite de relancer plusieurs fois
let musicPaused = false; // État de la musique (lecture ou pause)

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
		musicPlayed = true;
		musicPaused = false;
		if (musiqueButton) musiqueButton.textContent = '⏸';
	}
}

function toggleMusique() { // Bascule entre lecture et pause
	if (!musicPlayed) {
		playAndLoopMusic();
	} else if (musicPaused) {
		superMusique.play();
		musicPaused = false;
		if (musiqueButton) musiqueButton.textContent = '⏸';
	} else {
		superMusique.pause();
		musicPaused = true;
		if (musiqueButton) musiqueButton.textContent = '▶';
	}
}

// Cliquer sur le bouton POWER masque les deux éléments et démarre la musique
if (powerButton) {
	powerButton.addEventListener('click', () => {
		hideBoth();
		powerSound.play();
		if (!musicPlayed) playAndLoopMusic();
	});
}

// Cliquer sur le bouton play/pause bascule la musique
if (musiqueButton) {
	musiqueButton.addEventListener('click', toggleMusique);
}
