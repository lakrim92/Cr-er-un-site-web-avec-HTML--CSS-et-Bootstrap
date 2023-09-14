const objectifsData = [
    {
      title: "Promouvoir la conservation de la biodiversité",
      text: "Préserver les écosystèmes fragiles, protéger les espèces menacées et restaurer l'équilibre naturel de notre planète...",
    },
    {
      title: "Sensibiliser à la réduction des déchets",
      text: "Ensemble, nous pouvons préserver les écosystèmes fragiles, protéger les espèces menacées et restaurer l'équilibre naturel de notre planète...",
    },
    // Ajoutez d'autres objectifs ici
  ];
  function generateObjectifsCards(data) {
    const container = document.getElementById("objectifs-container");
  
    data.forEach((objectif, index) => {
      const card = document.createElement("div");
      card.className = "col-lg-4 col-md-6 mb-4";
      card.innerHTML = `
        <div class="card custom-card" id="card-${index + 1}">
          <img src="images/hero-image.jpg" class="card-img-top img-fluid" alt="Image${index + 1}">
          <div class="card-body">
            <h5 class="card-title">${objectif.title}</h5>
            <p class="hidden-text" id="card-text-${index + 1}">
              ${objectif.text}
            </p>
            <button class="btn btn-primary btn-sm" onclick="toggleText(${index + 1})">Lire la suite</button>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  generateObjectifsCards(objectifsData);
  
  $(document).ready(function () {
    // Fermer le menu lorsqu'un lien du menu est cliqué
    $('.navbar-nav>li>a').on('click', function () {
        console.log('Clic détecté.'); // Ajoutez une alerte de débogage
        $('.navbar-collapse').collapse('hide');
    });
});
