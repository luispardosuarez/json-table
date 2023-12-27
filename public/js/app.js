
const uri = '../data.json'

fetch(uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function(error){
        console.log('Error load Json file'. error)
    })




let table = document.getElementById('tableAll');

let json = [{
        "title": "Estudiar JS",
        "priority": "alta",
        "isDone": "false"
    },
    {
        "title": "Estudiar CSS",
        "priority": "alta",
        "isDone": "true"

    },
    {
        "title": "Estudiar OPP",
        "priority": "media",
        "isDone": "false"

    },
    {
        "title": "Estudiar IA",
        "priority": "baja",
        "isDone": "false"

    },


];

for (let i = 0; i < json.length; i++) {
    let row = table.insertRow();

    let nameCell = row.insertCell();
    nameCell.appendChild(document.createTextNode(json[i].title))

    let propiety1Cell = row.insertCell();
    propiety1Cell.appendChild(document.createTextNode(json[i].priority))

    let propiety2Cell = row.insertCell();
    propiety2Cell.appendChild(document.createTextNode(json[i].isDone))

}