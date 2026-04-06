
// Sélectionne tous les liens d'onglets
const liens = document.querySelectorAll('.mon_lien');
const son = document.getElementById('son_survol');
const sonClic = document.getElementById('son_clic');
const iframe = document.getElementById('contentFrame');

// Précharger les pages en arrière-plan
function preloadPages() {
	liens.forEach(lien => {
		const href = lien.getAttribute('href');
		if (href) {
			// Précharger silencieusement via fetch (met en cache le contenu)
			fetch(href).catch(() => {}); // Ignorer les erreurs
		}
	});
}

// Lancer le préchargement au démarrage de la page
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', preloadPages);
} else {
	preloadPages();
}

liens.forEach(lien => {
	// Jouer un son au survol
	lien.addEventListener('mouseenter', () => {
	if (son) { son.currentTime = 0; son.play(); }
	});

	// Intercepte le clic, joue le son de clic puis le charge dans l'iframe
	lien.addEventListener('click', (event) => {
		event.preventDefault();
		const href = lien.getAttribute('href');
		if (!href) return; // Rien à faire

		if (sonClic) {
			sonClic.currentTime = 0;
			sonClic.play();
			if (iframe) iframe.src = href; else window.location.href = href;
		}
	});
});