// Id is displayGame
// 
view();
function view() {
    var menu_div = document.getElementById('Menu')
    //Main Menu
    if(menu) {
        var ul = `<ul class="menuContainer">`
        for (var i in menu) {
            if (i == activecursor) {
                ul += ('<li class="menuSelected">'+ menu[i]+'</li>')
            }
            else {
                ul +=('<li>' + menu[i] + '</li>')
            }
        }
        menu_div.innerHTML = ul
    }
    else {
            // Text Display
        menu_div.innerHTML = text
    }

    // Player-Pokemon
    //Image
    var imagePokemonP = document.getElementById('ImagePokemonP')
    var imgP = `
    <img src='${player_pokemon.image[1]}' class = "img">`
    imagePokemonP.innerHTML = imgP
    //Name
    // Player Name
    var nametagP = document.getElementById('nametagP')
    nametagP.innerHTML = player_pokemon.name
    //Healthbar
    var healthbarP = document.getElementById('healtbarP')
    // needs to be updated
    healthbarP.innerHTML = player_pokemon.hp
    

    //Enemy-Pokemon
    // NPC Name tag
    var nametagE = document.getElementById('nametagE')
    nametagE.innerHTML = enemy_pokemon.name

    var imagePokemonP = document.getElementById('ImagePokemonE')
    var imgP = `
    <img src='${enemy_pokemon.image[0]}'class = "img">`
    imagePokemonP.innerHTML = imgP
    
    //Healthbar
    var healthbarP = document.getElementById('healthbarE')
    // needs to be updated
    healthbarP.innerHTML = enemy_pokemon.hp

   

}