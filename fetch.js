function getvalue(){
    var search = document.getElementById("search").value;
    fetch('https://swapi.co/api/people')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const { results } = data;
    for(var i=0; i<results.length; i++){
        const { name, height } = results[i]
        if(name==search){
            document.querySelector("tbody").textContent = null;
            var tr = createNode('tr')
            tr.setAttribute('id', i)
            tbody.appendChild(tr)
            for(var y=0; y<2; y++){
                var abc = getId(i)
                const key = [name, height]
                var td = createNode('td')
                var textnode = document.createTextNode(key[y]);
                td.appendChild(textnode);
                abc.appendChild(td)
            }
        }
    }
    })
}
const getId = (id) => {
    return document.getElementById(id);
}
function append(parent, el){
    return parent.appendChild(el);
}
function createNode(element){
    return document.createElement(element);
}
var tbody = getId('tbody');
fetch('https://swapi.co/api/people')
.then((d) => d.json())
.then((people) => {
    const { results } = people
    for(var i=0; i<results.length; i++){
        const { name, height } = results[i]
        var tr = createNode('tr')
        tr.setAttribute('id', i)
        tbody.appendChild(tr)
        for(var y=0; y<2; y++){
            var abc = getId(i)
            const key = [name, height]
            var td = createNode('td')
            var textnode = document.createTextNode(key[y]);
            td.appendChild(textnode);
            abc.appendChild(td)
        }
    }
})
