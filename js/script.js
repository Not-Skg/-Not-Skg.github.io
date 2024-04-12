document.addEventListener("DOMContentLoaded", function() {

// Sélectionner tous les éléments collapsible
const collapsibles = document.querySelectorAll('.collapsible');

// Ajouter un gestionnaire d'événements de clic à chaque élément collapsible
collapsibles.forEach(collapsible => {
  collapsible.addEventListener('click', function() {
    // Fermer tous les autres collapsibles
    collapsibles.forEach(otherCollapsible => {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove('active');
        otherCollapsible.nextElementSibling.style.maxHeight = null;
      }
    });

    // Basculer l'état actif du collapsible actuel
    collapsible.classList.toggle('active');
    const content = collapsible.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
          
});
