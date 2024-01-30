const uri = '../data.json';
let table = document.getElementById('tableAll');

fetch(uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      
        let json = data.results; 
       
        table.innerHTML = '';

        json.forEach(function(item) {
            let row = table.insertRow();
    
            let nameCell = row.insertCell();
            nameCell.appendChild(document.createTextNode(item.title))
    
            let propiety1Cell = row.insertCell();
            propiety1Cell.appendChild(document.createTextNode(item.priority))
    
            let propiety2Cell = row.insertCell();
            propiety2Cell.appendChild(document.createTextNode(item.isDone))
        });
    })

    .catch(function(error){
        console.log('Error cargando el archivo JSON:', error);
    });
