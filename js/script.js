document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll('.collapsible');

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

  const btn = document.querySelector('#button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // TOGGLE SWITCH
  const darkModeSwitch = document.querySelector('#darkModeSwitch');

  // Vérifier si le mode sombre est activé dans localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Si le mode sombre est activé, activer le switch et ajouter la classe dark-mode au body
  if (isDarkMode) {
    darkModeSwitch.checked = true;
    document.body.classList.add('dark-mode');
  }

  darkModeSwitch.addEventListener('change', function() {
    // Basculer la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');

    // Stocker l'état du mode sombre dans localStorage
    localStorage.setItem('darkMode', darkModeSwitch.checked);
  });

  // Enregistrer l'état du mode sombre dans localStorage avant que la page ne soit déchargée
  window.addEventListener('beforeunload', function() {
    localStorage.setItem('darkMode', darkModeSwitch.checked);
  });


  // Timeline
    // Ajouter un écouteur d'événements pour les clics sur les dates de la frise chronologique
  const timelineDates = document.querySelectorAll('.timeline-date');
  timelineDates.forEach(timelineDate => {
    timelineDate.addEventListener('click', function() {
      // Trouver le collapsible correspondant à la date cliquée
      const collapsibleId = this.getAttribute('data-collapsible-id');
      const collapsible = document.querySelector(`#${collapsibleId}`);

      // Fermer tous les autres collapsibles
      collapsibles.forEach(otherCollapsible => {
        if (otherCollapsible !== collapsible) {
          otherCollapsible.classList.remove('active');
          otherCollapsible.querySelector('.collapsible-content').style.maxHeight = null;
        }
      });

      // Basculer l'état actif du collapsible correspondant à la date cliquée
      collapsible.classList.toggle('active');
      const content = collapsible.querySelector('.collapsible-content');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

});
