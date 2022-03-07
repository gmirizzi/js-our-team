const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg"
    }
]

function addCard(name, role, url){
    const card=document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML=
    `<div class="card-image">
         <img
            src="${url}"
            alt="${name}"
        />
    </div>
    <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
    </div>`;
    document.querySelector(".team-container").append(card);
}

for (let index = 0; index < ourTeam.length; index++) {
    addCard(ourTeam[index].name,ourTeam[index].role,ourTeam[index].img);    
}
