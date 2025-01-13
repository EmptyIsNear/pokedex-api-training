function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getFromMyAPI() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("404 Ressource Not Found");
        }

        const data = await response.json();

        const pokemonImage = data.sprites.front_default;
        const pokeName = data.name;

        const imgElement = document.getElementById("pokemonImage");
        imgElement.src = pokemonImage;

        const h1Element = document.getElementById("pokeName");
        h1Element.innerText = capitalizeFirstLetter(pokeName);

        const contentElement = document.getElementById("pokemonInfos");
        contentElement.style.display = "";

    }

    catch {
        console.error("404 Ressource Not Found");

        const contentElement = document.getElementById("pokemonInfos");
        contentElement.style.display = "";

        const imgElement = document.getElementById("pokemonImage");
        imgElement.src = "";

        const h1Element = document.getElementById("pokeName");
        h1Element.innerHTML = "<span style='color: darkred;'>404 Ressource Not Found</span>";
    }

}

const submit = document.getElementById("submitPokemon");

submit.addEventListener('click', function() {
    getFromMyAPI()
})

document.addEventListener('keydown', function(event){
    if (event.keyCode == "13") {
        getFromMyAPI()
    }
})