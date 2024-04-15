document.addEventListener("DOMContentLoaded", function() {
  // Vérifier si le mode sombre est activé dans localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Si le mode sombre est activé, ajouter la classe dark-mode au body
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

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

  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    darkModeSwitch.checked = true;
    document.body.classList.add('dark-mode');
  }

  darkModeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', darkModeSwitch.checked);
  });

});
