const typenchart = {
    'plant' : {
        'plant' : 1,
        'fire' : 0.5,
        'water' : 2,
    },
    'water' : {
        'plant' : 0.5,
        'fire' : 2,
        'water' : 1,
    },
    'fire': {
        'plant' : 2,
        'fire' : 1,
        'water' : 0.5,
    },
};



class Pokemon{
    constructor(name, type, base_hp, image, attacks, level) {
        this.name = name;
        this.type = type;
        this.base_hp = base_hp;
        this.image = image; //array with first front and second back picture
        this.attacks = attacks; //Attacks should be an object with attack_name,strength and type
        this.level = level;
        this.hp = base_hp * level;
    }
    //This method takes another pokemon class and the attack that was used. 
    get_attacked(attacker, attack) {
        type_mul = typechart[attack.type][this.type];
        attack_value = 4 * type_mul * attacker.level;
        defense_value = 5 * this.level;
        if (defense_value < attack_value) {
            this.hp -= (attack_value-defense_value)
            return this.name + ' lost ' + (attack_value-defense_value) + ' HP.'
        }
        else {
            this.hp -= 1
            return 'Such a puny attack does almost nothing! Muahahahaha'
        }

    }
};

class Trainer{
    constructor(name, items, pokemons) {
        this.name = name;
        this.items = items;
        this.pokemons = pokemons 
    }
}

// Objects of Pokemon. For each trainer are three pokemon created
var charmander = new Pokemon(
    'Charmander',
     'fire',
      100,
      ['./src/charmanderFront.png','./src/charmanderBack.png'],
      {'Ember':[1,'fire'],'Flamethrower':[2,'fire']},
      5,
      )
var bulbasaur = new Pokemon(
    'Bulbasaur',
    'plant',
    100,
    ['./src/bulbasaurFront.png','./src/bulbasaurBack.png'],
    {'Vine Whip':[1,'plant'],'Razor Leaf':[2,'plant']},
    5
)
var squirtle = new Pokemon(
    'Squirtle',
    'water',
    100,
    ['./src/squirtleFront.png','./src/squirtleBack.png'],
    {'Bubble':[1,'water'],'Water Gun':[2,'water']},
    5
)
var charmander2 = new Pokemon(
    'Charmander',
     'fire',
      100,
      ['./src/charmanderFront.png','./src/charmanderBack.png'],
      {'Ember':[1,'fire'],'Flamethrower':[2,'fire']},
      5,
      )
var bulbasaur2 = new Pokemon(
    'Bulbasaur',
    'plant',
    100,
    ['./src/bulbasaurFront.png','./src/bulbasaurBack.png'],
    {'Vine Whip':[1,'plant'],'Razor Leaf':[2,'plant']},
    5
)
var squirtle2 = new Pokemon(
    'Squirtle',
    'water',
    100,
    ['./src/squirtleFront.png','./src/squirtleBack.png'],
    {'Bubble':[1,'water'],'Water Gun':[2,'water']},
    5
)

//Two trainer are created for the fight
var enemy = new Trainer('Terje',[],[charmander2,bulbasaur2,squirtle2])
var player = new Trainer('Linn',[],[charmander,bulbasaur,squirtle])

// Modell

var enemy_pokemon = ''
var player_pokemon = ''
var text = ''

var menu = ''
var submenu = ''
