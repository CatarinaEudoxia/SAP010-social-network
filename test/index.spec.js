import { registerAccount, loginOn, logoutAccount } from '../index.js';

describe('loginOn', () => {
  it('deve ser uma função', () => {
    expect(typeof registerAccount).toBe('function');
  });
});

describe('loginOnt', () => {
  it('deve ser uma função', () => {
    expect(typeof loginOn).toBe('function');
  });
});

describe('logoutAccount', () => {
  it('deve ser uma função', () => {
    expect(typeof logoutAccount).toBe('function');
  });
});

/* it('deve retornar o tipo "todos"', () => {
const pokeArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
const todos = 'allPoke';
expect(pokeType(pokeArray, todos)).toEqual(pokeArray);
});

it('deve retornar o tipo filtrado', () => {
const pokeArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
const pokeChange = 'fire';
expect(pokeType(pokeArray, pokeChange)).toEqual([{ type: 'fire' }]);
});
});

describe('pokeOrder', () => {
it('deve ser uma função', () => {
expect(typeof pokeOrder).toBe('function');
});

it('deve retornar números em ordem crescente', () => {
const pokeArray = [
  { 'num': '063', 'name': 'Abra' },
  { 'num': '142', 'name': 'Aerodactyl' },
  { 'num': '190', 'name': 'Aipom' },
  { 'num': '065', 'name': 'Alakazam' },
  { 'num': '181', 'name': 'Ampharos' },
  { 'num': '024', 'name': 'Arbok' },
  { 'num': '059', 'name': 'Arcanine' },
  { 'num': '168', 'name': 'Ariados' }
];
const pokeNumberChange = "numberAsc";
expect(pokeOrder(pokeArray, pokeNumberChange)).toEqual([
  { 'num': '024', 'name': 'Arbok' },
  { 'num': '059', 'name': 'Arcanine' },
  { 'num': '063', 'name': 'Abra' },
  { 'num': '065', 'name': 'Alakazam' },
  { 'num': '142', 'name': 'Aerodactyl' },
  { 'num': '168', 'name': 'Ariados' },
  { 'num': '181', 'name': 'Ampharos' },
  { 'num': '190', 'name': 'Aipom' }
]);
});

it('deve retornar números em ordem decrescente', () => {
const pokeArray = [
  { 'num': '063', 'name': 'Abra' },
  { 'num': '142', 'name': 'Aerodactyl' },
  { 'num': '190', 'name': 'Aipom' },
  { 'num': '065', 'name': 'Alakazam' },
  { 'num': '181', 'name': 'Ampharos' },
  { 'num': '024', 'name': 'Arbok' },
  { 'num': '059', 'name': 'Arcanine' },
  { 'num': '168', 'name': 'Ariados' }
];
const pokeNumberChange = "numberDesc";
expect(pokeOrder(pokeArray, pokeNumberChange)).toEqual([
  { 'num': '190', 'name': 'Aipom' },
  { 'num': '181', 'name': 'Ampharos' },
  { 'num': '168', 'name': 'Ariados' },
  { 'num': '142', 'name': 'Aerodactyl' },
  { 'num': '065', 'name': 'Alakazam' },
  { 'num': '063', 'name': 'Abra' },
  { 'num': '059', 'name': 'Arcanine' },
  { 'num': '024', 'name': 'Arbok' }
]);
});
})

describe('percentual', () => {
it('deve ser uma função', () => {
expect(typeof percentual).toBe('function');
});

it('deve retornar a porcentagem de pokémons por cada tipo em relação ao total', () => {
const allTypes = [
  { 'num': '000', 'name': 'Miltank', 'type': 'normal' },
  { 'num': '142', 'name': 'Jolteon', 'type': 'electric' },
  { 'num': '190', 'name': 'Aipom', 'type': 'normal' },
  { 'num': '065', 'name': 'Alakazam', 'type': 'psychic' },
  { 'num': '181', 'name': 'Ampharos', 'type': 'electric' },
  { 'num': '024', 'name': 'Ditto', 'type': 'normal' },
  { 'num': '059', 'name': 'Jigglypuff', 'type': 'normal' },
  { 'num': '168', 'name': 'Raikou', 'type': 'electric' },
  { 'num': '045', 'name': 'Abra', 'type': 'psychic' },
  { 'num': '164', 'name': 'Lugia', 'type': 'psychic' }
];

const typeNormal = allTypes.filter(pokemon => pokemon.type === 'normal');
const typeElectric = allTypes.filter(pokemon => pokemon.type === 'electric');
const typePsychic = allTypes.filter(pokemon => pokemon.type === 'psychic');

const normalResult = percentual(typeNormal.length, allTypes.length);
const electricResult = percentual(typeElectric.length, allTypes.length);
const psychicResult = percentual(typePsychic.length, allTypes.length);

expect(normalResult).toEqual(40);
expect(electricResult).toEqual(30);
expect(psychicResult).toEqual(30);
});
}); */
