const container = document.querySelector("#container");
const namePlate = document.querySelector(".name-plate");
const sideMenu = document.querySelector(".side-menu");
const emptySpace = document.querySelector(".empty-space");
container.appendChild(namePlate);
container.appendChild(sideMenu);
container.appendChild(emptySpace);



function leftMenu() {
    let ul = document.createElement("ul");
    let sideItems = ["Home", "About", "Projects", "Resume"];
    sideItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    })
    sideMenu.appendChild(ul);

}

function getName() {
    let name = document.createElement("h1");
    name.id = "name"
    name.textContent = "Jack Pearne"
    namePlate.appendChild(name);
    let smallBio = document.createElement("h6")
    smallBio.id = "small-bio"
    smallBio.textContent = "Web Developer and Designer"
    namePlate.appendChild(smallBio);
}


leftMenu();
getName();
