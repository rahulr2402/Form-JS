const persons = [];
function createData(){
    const name = document.getElementById("name").value;
    const scientificName = document.getElementById("scname").value;
    const imageUrl = document.getElementById("img").value;
    persons.push({name, scientificName, imageUrl});
    console.log(persons);
    displayData();
}

function displayData(){
    const view = document.getElementById("view");
    let div = "";
    persons.forEach((person, index)=> {
        div += `<div class = "record">
        <h1> ${person.name}</h1>
        <img src = "${person.imageUrl}"></img>
        <span > ${person.scientificName} </span>
        <button onclick="updatePersons(${index})"> Update </button>
        <button onclick="deletePersons(${index})"> Delete </button>
        </div>`
    })
    view.innerHTML = div;
}

function updatePersons(index){
    const name = prompt("name", persons[index].name);
    const scientificName = prompt("scientificName", persons[index].scientificName);
    const imageUrl = prompt("imageUrl", persons[index].imageUrl);
    if(name){
        persons[index].name = name;
    }
    if(scientificName){
        persons[index].scientificName = scientificName;
    }
    if(imageUrl){
        persons[index].imageUrl = imageUrl;
    }
    displayData()
}

function deletePersons(index){
    persons.splice(index,1);
    displayData();
}