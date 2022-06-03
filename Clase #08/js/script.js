function digimons (){
    const list = document.getElementById('list');
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(function(response){
        return response.json(); // transforma el texto del body en un objeto de javascript
    })
    .then(function(digimons){
        /*
        for(let digimon of digimons){
            const li = document.createElement('li');
            li.innerHTML = digimon.name;
            const img = document.createElement('img');
            img.src = digimon.img;
            li.appendChild(img);


            list.appendChild(li);
        }*/
        let random = Math.floor(Math.random() * digimons.length);
        const digimon = digimons[random];
        return digimon;
    })
    .then(function(digimon){
        const li = document.createElement('li');
        li.innerHTML = digimon.name;
        const img = document.createElement('img');
        img.src = digimon.img;
        li.appendChild(img);

        list.appendChild(li);
    })  
}


function pokemon(){
    const list = document.getElementById('list');
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(function(response){
        return response.json(); // transforma el texto del body en un objeto de javascript
    })
    .then(function(pokemons){
        let random = Math.floor(Math.random() * pokemons.results.length);
        const pokemon = pokemons.results[random];
        return [random + 1, pokemon];
    })
    .then(function(data){
        const li = document.createElement('li');
        li.innerHTML = data[1].name;
        const img = document.createElement('img');
        img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+data[0]+'.png';
        li.appendChild(img);

        list.appendChild(li);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    
    pokemon()
    
})