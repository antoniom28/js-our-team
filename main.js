const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

for (let i = 0; i < team.length; i++)
  inserisciCard(document.querySelector('.team-container'), i);

//new-team-member-01.jpg

document.getElementById('addMemberButton').addEventListener('click', () => {
  let name = document.getElementById('name');
  let role = document.getElementById('role');
  let image = document.getElementById('image');

  if(!controllaUrlImmagine(image.value))
    return;

  let errore = controllaGiaPresenti(name.value, image.value);

  if (name.value != '' && role.value != '' && image.value != '' && !errore) {
      team.push({
        name: name.value,
        role: role.value,
        image: image.value,
      });
      inserisciCard(document.querySelector('.team-container'), team.length - 1);
      console.log('inserito --- ', team);
  }
});

function inserisciCard(newCard, i) {
  newCard.innerHTML += `
  <div class="team-card">
  <div class="card-image">
    <img
      src="img/${team[i].image}"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>${team[i].name}</h3>
    <p>${team[i].role}</p>
  </div>
</div>
`
}

//controlla se il nome e cognome, oppure l'immagine profilo
//è già stata utilizzata
function controllaGiaPresenti(name, image) {
  for (let i = 0; i < team.length; i++) {
      if (name == team[i].name || image == team[i].image)
      return true;
  }
  return false;
}

/*
volevo fare un controllo totale, ovvero che se l'immagine non 
esiste non inserisce la card, ma ho visto che si usa jQuery 
quindi ho preferito lasciare un semplice controllo se è almeno
un file immagine (o quasi)
*/
function controllaUrlImmagine(image){
  if(!image.includes('.jpg') && !image.includes('.png') && !image.includes('.svg')) 
    return false;
  return true;
}