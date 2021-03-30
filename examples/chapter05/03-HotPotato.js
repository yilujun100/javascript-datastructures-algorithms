const { hotPotato } = DataStructuresAlgorithms;

const names = ['John', 'Jack', 'Camina', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach((name) => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);
