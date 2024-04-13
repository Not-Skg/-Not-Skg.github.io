document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner tous les éléments collapsible
  const collapsibles = document.querySelectorAll('.collapsible');

  // Ajouter un gestionnaire d'événements de clic à chaque élément collapsible header
  collapsibles.forEach(collapsible => {
    collapsible.querySelector('.collapsible-header').addEventListener('click', function() {
      // Fermer tous les autres collapsibles
      collapsibles.forEach(otherCollapsible => {
        if (otherCollapsible !== collapsible) {
          otherCollapsible.classList.remove('active');
          otherCollapsible.querySelector('.collapsible-content').style.maxHeight = null;
        }
      });

      // Basculer l'état actif du collapsible actuel
      collapsible.classList.toggle('active');
      const content = collapsible.querySelector('.collapsible-content');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Sélectionner le bouton back to top
  const btn = document.querySelector('#button');

  // Ajouter un gestionnaire d'événements de défilement à la fenêtre
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Ajouter un gestionnaire d'événements de clic au bouton back to top
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// TOGGLE SWITCH
const darkModeSwitch = document.querySelector('#darkModeSwitch');

// Vérifier les préférences de l'utilisateur en matière de mode sombre
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Définir le mode par défaut en fonction des préférences de l'utilisateur
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeSwitch.checked = true;
}

// Ajouter un gestionnaire d'événements pour basculer entre les modes light et dark
darkModeSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});
  
});
