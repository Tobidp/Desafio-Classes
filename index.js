class hero {
    constructor (age, heroClass, attackType){
        this.age = age
        this.heroClass = heroClass;
        this.attackType = attackType
    }

    attack (){
        console.log(`o ${this.heroClass}, de idade ${this.age} anos, atacou usando ${this.attackType}`)
        }
}

let mago = new hero (18, "Mago", "Fireball")
let guerreiro = new hero (18, "Guerreiro", "Espada")
let monge = new hero (18, "Monge", "Artes Marciais")
let ninja = new hero (18, "Ninja", "Shuriken")

let escolhaHeroi = "mago"

if (escolhaHeroi === "mago") {
    mago.attack()
} else if (escolhaHeroi === "guerreiro") {
    guerreiro.attack()
} else if (escolhaHeroi === "monge") {
    monge.attack()
} else if (escolhaHeroi === "ninja") {
    ninja.attack()
}