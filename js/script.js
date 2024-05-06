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
function updateTimeline() {
  var timeline = document.getElementById('timeline');
  var timelineItems = timeline.getElementsByClassName('timeline-item');

  // Calculer les intervalles entre les dates
  var dates = Array.from(timelineItems).map(function(item) {
    return new Date(item.getAttribute('data-date')).getTime();
  });

  var minDate = Math.min.apply(null, dates);
  var maxDate = Math.max.apply(null, dates);

  var totalInterval = maxDate - minDate;

  // Positionner les éléments
  for (var i = 0; i < timelineItems.length; i++) {
    var intervalFromMin = dates[i] - minDate;
    var percentage = intervalFromMin / totalInterval;
    var left = percentage * (timeline.offsetWidth - timelineItems[i].offsetWidth) + 'px';

    timelineItems[i].style.left = left;
  }
}

// Ajouter un gestionnaire d'événements pour les clics sur les éléments de la timeline
var timelineItems = document.getElementsByClassName('timeline-item');
var selectedItem = null;
var timelineText = document.getElementById('timeline-text');
var timelineTitle = document.getElementById('timeline-title'); // Ajouter une référence à l'élément de titre

for (var i = 0; i < timelineItems.length; i++) {
  timelineItems[i].addEventListener('click', function() {
    var text = this.getAttribute('data-text');
    var title = this.getAttribute('data-title'); // Récupérer le titre à partir de l'attribut data-title

    // Vérifier si l'élément cliqué est déjà sélectionné
    if (this === selectedItem) {
      // Supprimer la classe "selected" de l'élément sélectionné
      this.classList.remove('selected');
      // Masquer le texte et le titre
      timelineText.classList.remove('show');
      timelineTitle.textContent = ''; // Réinitialiser le contenu du titre
      // Réinitialiser la variable "selectedItem"
      selectedItem = null;
    } else {
      // Supprimer la classe "show" de l'élément précédemment affiché
      if (timelineText.classList.contains('show')) {
        timelineText.classList.remove('show');
        timelineTitle.textContent = ''; // Réinitialiser le contenu du titre
      }

      // Ajouter la classe "show" à l'élément contenant le texte et le titre
      setTimeout(function() {
        timelineTitle.textContent = title; // Afficher le titre dans l'élément de titre
        timelineText.textContent = text;
        timelineText.classList.add('show');
      }, 10);

      // Supprimer la classe "selected" de l'élément précédemment sélectionné
      if (selectedItem) {
        selectedItem.classList.remove('selected');
      }

      // Ajouter la classe "selected" à l'élément cliqué
      this.classList.add('selected');
      selectedItem = this;
    }
  });
}

// Appeler la fonction lorsque la page est chargée
window.onload = updateTimeline;

// Appeler la fonction lorsque la fenêtre est redimensionnée
window.addEventListener('resize', updateTimeline);

});
