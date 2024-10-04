// 1️⃣ Desafio Classificador de nível de Herói

// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
    let nivel;

const nomeHeroi = prompt("Digite o nome do herói:");
const xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"), 10);

    // Estruturas de decisão para classificar o nível com base na experiência
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Retorna a mensagem com o nome e nível do herói
    return `O Herói de nome ${nome} está no nível de ${nivel}.`;
}

// Saída
console.log(classificarHeroi(nomeHeroi, xpHeroi));
