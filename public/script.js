// catálogo

const catalogo = [

    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.2,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 3,
        titulo: "The Batman",
        tipo: "filme",
        ano: 2022,
        generos: ["ação"],
        nota: 8.4,
        assistido: false
    },

    {
        id: 4,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ficção científica", "mistério"],
        nota: 8.9,
        assistido: true
    },

    {
        id: 5,
        titulo: "Duna",
        tipo: "filme",
        ano: 2021,
        generos: ["aventura", "ficção científica"],
        nota: 8.1,
        assistido: false
    },

    {
        id: 6,
        titulo: "Arcane",
        tipo: "serie",
        ano: 2021,
        generos: ["animação", "ação"],
        nota: 9.1,
        assistido: false
    },

    {
        id: 7,
        titulo: "The Walking Dead",
        tipo: "serie",
        ano: 2010,
        generos: ["drama", "terror"],
        nota: 8.1,
        assistido: true
    },

    {
        id: 8,
        titulo: "Michael",
        tipo: "filme",
        ano: 2026,
        generos: ["biografia", "drama"],
        nota: 7.7,
        assistido: false
    },

    {
        id: 9,
        titulo: "Round 6",
        tipo: "serie",
        ano: 2021,
        generos: ["suspense", "drama"],
        nota: 4.2,
        assistido: true
    },

    {
        id: 10,
        titulo: "Prision Break",
        tipo: "serie",
        ano: 2005,
        generos: ["ação", "crime"],
        nota: 8.3,
        assistido: true
    }

];


// console

console.log(catalogo);

console.log("Primeiro título:");
console.log(catalogo[0].titulo);

console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);

console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos[1]) {

    console.log(catalogo[2].generos[1]);

} else {

    console.log("O terceiro item possui apenas um gênero.");

}


// forEach

catalogo.forEach(item => {

    console.log(
        `- [${item.tipo}] ${item.titulo} (${item.ano})`
    );

});


// map

const titulosEmCaixaAlta = catalogo.map(item =>
    item.titulo.toUpperCase()
);

console.log(titulosEmCaixaAlta);


// filter

const naoAssistidos = catalogo.filter(item =>
    item.assistido === false
);

console.log(
    `Quantidade de não assistidos: ${naoAssistidos.length}`
);


// B.3.D - find

const notaAlta = catalogo.find(item =>
    item.nota >= 9
);

if (notaAlta) {

    console.log(
        `${notaAlta.titulo} - Nota: ${notaAlta.nota}`
    );

} else {

    console.log("Nenhum item possui nota maior ou igual a 9.");

}


// B.3.E - reduce

const somaNotas = catalogo.reduce(
    (acumulador, item) => acumulador + item.nota,
    0
);

const mediaGeral = somaNotas / catalogo.length;

console.log(
    `Média geral: ${mediaGeral.toFixed(2)}`
);


const assistidos = catalogo.filter(item =>
    item.assistido === true
);

const somaAssistidos = assistidos.reduce(
    (acumulador, item) => acumulador + item.nota,
    0
);

const mediaAssistidos =
    somaAssistidos / assistidos.length;

console.log(
    `Média dos assistidos: ${mediaAssistidos.toFixed(2)}`
);


// B.3.F - some e every

const existeAntigo = catalogo.some(item =>
    item.ano < 2000
);

console.log(
    `Existe item anterior a 2000? ${existeAntigo}`
);


const todosTemGenero = catalogo.every(item =>
    item.generos.length > 0
);

console.log(
    `Todos possuem gênero? ${todosTemGenero}`
);


// DOM

const totalFilmes = catalogo.filter(item =>
    item.tipo === "filme"
).length;

const totalSeries = catalogo.filter(item =>
    item.tipo === "serie"
).length;


// ranking
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);


document.getElementById("output").innerHTML = `

<h2>Resumo do Catálogo</h2>

<p>Total de itens: ${catalogo.length}</p>

<p>Total de filmes: ${totalFilmes}</p>

<p>Total de séries: ${totalSeries}</p>

<p>Não assistidos: ${naoAssistidos.length}</p>

<p>Média geral: ${mediaGeral.toFixed(2)}</p>

<h3>Top 3</h3>

<ul>
    ${ranking.map(item =>
    `<li>${item.titulo} - ${item.nota}</li>`
).join("")}
</ul>

`;