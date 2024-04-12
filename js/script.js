document.addEventListener("DOMContentLoaded", function() {

// Sélectionner tous les éléments collapsible
const collapsibles = document.querySelectorAll('.collapsible');
let lastActiveCollapsible = null; // Ajouter une variable pour stocker le dernier collapsible actif

// Ajouter un gestionnaire d'événements de clic à chaque élément collapsible
collapsibles.forEach(collapsible => {
  collapsible.addEventListener('click', function() {
    // Fermer le dernier collapsible actif
    if (lastActiveCollapsible && lastActiveCollapsible !== collapsible) {
      lastActiveCollapsible.classList.remove('active');
      lastActiveCollapsible.nextElementSibling.style.maxHeight = null;
    }

    // Basculer l'état actif du collapsible actuel
    collapsible.classList.toggle('active');
    const content = collapsible.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    // Mettre à jour la référence au dernier collapsible actif
    lastActiveCollapsible = collapsible;
  });
});

          
});
