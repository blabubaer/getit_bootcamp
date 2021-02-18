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
    var nametagP = document.getElementById('nametagP')
    nametagP.innerHTML = player_pokemon.name
        //Healthbar
    var healthbarP = document.getElementById('healtbarP')
    // needs to be updated
    healthbarP.innerHTML = player_pokemon.hp
    

    //Enemy-Pokemon
    var imagePokemonP = document.getElementById('ImagePokemonE')
    var imgP = `
    <img src='${enemy_pokemon.image[0]}'class = "img">`
    imagePokemonP.innerHTML = imgP
       //Name -> no nametag yet
   //var nametagP = document.getElementById('nametagP')
   //nametagP.innerHTML = player_pokemon.name
       //Healthbar
   var healthbarP = document.getElementById('healthbarE')
   // needs to be updated
   healthbarP.innerHTML = enemy_pokemon.hp
   var healtP = `
      <div>
        <progress max="'+max_hp'">
            
        </progress>
      </div>
   `

   

}