
fetch('../package.json')
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
        "name": "All",
        "propiety1": "value1",
        "propiety2": "value2",
        "propiety3": "value3"
    },
    {
        "name": "All",
        "propiety1": "value4",
        "propiety2": "value5",
        "propiety3": "value6"

    },
    {
        "name": "All",
        "propiety1": "value7",
        "propiety2": "value8",
        "propiety3": "value9"

    },
    {
        "name": "All",
        "propiety1": "value10",
        "propiety2": "value11",
        "propiety3": "value12"

    },


];

for (let i = 0; i < json.length; i++) {
    let row = table.insertRow();

    let nameCell = row.insertCell();
    nameCell.appendChild(document.createTextNode(json[i].name))

    let propiety1Cell = row.insertCell();
    propiety1Cell.appendChild(document.createTextNode(json[i].propiety1))

    let propiety2Cell = row.insertCell();
    propiety2Cell.appendChild(document.createTextNode(json[i].propiety2))

    let propiety3Cell = row.insertCell();
    propiety3Cell.appendChild(document.createTextNode(json[i].propiety3))

}