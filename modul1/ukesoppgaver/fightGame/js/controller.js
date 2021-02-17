function clicker(){
    if (stage == 1) {
        mainmenu()
    }
    else if (stage == 2){
        mainMenuChooser()
    }
    else if(stage == 3){
        stage3()
    }
    else if(stage == 30){
        stage30()
    }
    else if(stage == 31){
        stage31()
    }
    else if(stage == 32) stage32()
    else if(stage == 33) stage33()
}
// Stage 1
function mainmenu() {
    activecursor = 0
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
        stage = 3
        // ->Stage 3
    }
    else if(activecursor == 1) {
        //Items

        //-> Stage 4
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

//Stage 3 - Attack has been chosen
function stage3(){
    menu = ''
    var att = Object.keys(player_pokemon.attacks)
    text = player.name + "'s " + player_pokemon.name + ' is using ' + att[activecursor]
    view()
    stage = 30
}

//Stage 30 - Attack is being done
function stage30(){
    var att = Object.keys(player_pokemon.attacks)
    text = enemy.name + "'s " + enemy_pokemon.get_attacked(player_pokemon, player_pokemon.attacks[att[activecursor]])
    view()
    if (enemy_pokemon.hp <= 0){
        enemy_pokemon.hp = 0
        stage = 33
        //Enemy Pokemon declared defeated
    }
    else {
        stage = 31
        // Enemy Attacks
    }

}
// Stage 31 - Enemy Attacks
function stage31(){
    activecursor = getRndInteger(0,2)
    var att = Object.keys(enemy_pokemon.attacks)
    text = enemy.name + "'s " + enemy_pokemon.name +" is using " + att[activecursor]
    view()
    stage = 32
    // Attack gets done

}
// Stage 32 - Attack gets done 
function stage32(){
    var att = Object.keys(enemy_pokemon.attacks)
    text = player.name + "'s " + player_pokemon.get_attacked(enemy_pokemon, enemy_pokemon.attacks[att[activecursor]])
    view()

    stage = 1
}

//Stage 33 - Enemy Pokemon declared defeated
function stage33(){
    text = enemy.name + "'s " + enemy_pokemon.name + "is defeated."
    var available = []
    for (var i in enemy.pokemons) {
        if (enemy.pokemons[i].hp > 0){
            available.push(i)
        }
    }
    // next enemy Pokemon

    // all enemy pokemon dead
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


//MISC
    //get random number min included max excluded
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }