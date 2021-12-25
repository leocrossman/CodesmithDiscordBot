let people = require('./people.json');
people = people.sort().map((el) => `**${el.toUpperCase()}** 😂`);

const getVictim = () => {
  let randIdx = Math.floor(Math.random() * people.length);
  let name = String(people[randIdx]);
  // name = '**QUYEN** 😂';
  if (name.includes('JAKE')) {
    name = `${name.slice(0, -1)}<a:pikadab:913077757645320233>`;
  } else if (name.includes('BILL')) {
    name = `${name.slice(0, -1)}<:gengarpout:920709953117909043>`;
  } else if (name.includes('RONAK')) {
    name = `${name.slice(0, -1)}<a:peeporiot:920713929255157852>`;
  } else if (name.includes('EUGENE')) {
    name = `${name.slice(0, -1)}:speak_no_evil:`;
  } else if (name.includes('QUYEN')) {
    name = `${name.slice(0, -1)}<a:togepi:920719422237335612>`;
  } else if (name.includes(`LEO`)) {
    name = `${name.slice(0, -1)}<a:nopers:921060824225824830>`;
  }
  return name;
};

module.exports = getVictim;
