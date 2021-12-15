let people = require('./people.json');
people = people.sort().map((el) => `**${el.toUpperCase()}** 😂`);

const getVictim = () => {
  let randIdx = Math.floor(Math.random() * people.length);
  return String(people[randIdx]);
};

module.exports = getVictim;
