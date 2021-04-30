// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let sergio = {
    panier: ["huile","tomate","pain"],
}

let francois = {
    panier: ["ail","déodorant","oignons"],
    derober(){
        this.panier.push(sergio.panier.pop(),sergio.panier.pop())
    }
}
francois.derober()

console.log(francois.panier,sergio.panier)


