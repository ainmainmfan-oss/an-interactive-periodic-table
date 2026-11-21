const elements = [
    {
        number: 1,
        symbol: "H",
        name: "Hydrogen",
        mass: 1.008,
        category: "nonmetal"
    },
    {
        number: 2,
        symbol: "He",
        name: "Helium",
        mass: 4.0026,
        category: "noble-gas"
    },
    {
        number: 3,
        symbol: "Li",
        name: "Lithium",
        mass: 6.94,
        category: "alkali-metal"
    },
    {
        number: 4,
        symbol: "Be",
        name: "Beryllium",
        mass: 9.0122,
        category: "alkaline-earth"
    }
];

const table = document.getElementById("periodic-table");

elements.forEach(element => {
    const tile = document.createElement("div");

    tile.className = `element ${element.category}`;

    tile.innerHTML = `
        <span class="number">${element.number}</span>
        <h2>${element.symbol}</h2>
        <p>${element.name}</p>
        <p>${element.mass}</p>
    `;

    table.appendChild(tile);
});
