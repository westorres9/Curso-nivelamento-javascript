function dizerOla() {
    console.log("Ola");
}

function dizerBomdia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomdia("Maria");
    setTimeout(() => {
        dizerBomdia("Joao");
        setTimeout(() => {
            dizerBomdia("Ana")
        }, 1000);
    }, 1000);
}, 1000);




//setTimeout(dizerOla, 2000);

console.log("A");
console.log("B");

