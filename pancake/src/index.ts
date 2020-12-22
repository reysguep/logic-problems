import PancakePile from './PancakePile';

const pancakes = [10, 31, 5, 2, 18, 20, 32, 1];
const pancakePile = new PancakePile(...pancakes);

console.log(pancakePile.pancakes);

pancakePile.sortPile();

console.log(pancakePile.pancakes);