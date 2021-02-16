function clicker(){
    if (stage == 1) {
        mainmenu()
    }
    else if (stage == 2){
        mainMenuChooser()
    }
}
// Stage 1
function mainmenu() {
    menu = ['Attack','Items', 'Pokemon', 'Run Away']
    view()
    stage ++
}

//Stage 2
function mainMenuChooser() {
    if(activecursor == 0) {
        //Attack
        menu = []
        activecursor = 0
        var att = Object.keys(player_pokemon.attacks) 
        for(var a in att) {
            menu.push(att[a])
        }
        view()
        // ->Stage 3
    }
    else if(activecursor == 1) {
        //Items
    }
    else if(activecursor == 2) {
        //Pokemon
        menu = []
        activecursor = 0
        for (var i in player.pokemons) {
            menu.push(player.pokemons[i].name)
        }
        view()
        // -> Stage 5
    }
    else if(activecursor == 3) {
        // Run Away
        menu = null
        text = "You scared little bunny!! You can't run away from a fight!! "
        view()
        // -> Stage 6
    }
}


// Arrow-Buttons

function up(){
    if (activecursor == 0) {
        activecursor = menu.length-1
    }
    else {
        activecursor --
    }
    view()
}

function down() {
    if (activecursor == (menu.length-1)) {
        activecursor = 0
    }
    else {
        activecursor ++
    }
    view()
}