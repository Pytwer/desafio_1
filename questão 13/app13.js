function calcularArea(raio) {
    return Math.PI * raio ** 2;
}

let raio = parseFloat(prompt("Digite o raio:"));
let area = calcularArea(raio);
alert("A área do círculo é: " + area.toFixed(2));
