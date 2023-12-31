'use strict';
/*==============ENHANCED OBJECT LITERALS ============== */
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/*==============STRINGS METHODS PRACTICE ============== */

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔️' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 ENHANCED OBJECT LITERALS
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `order received! ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with
//     ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
/*==============CODING CHALLENGE 4 ============== */
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });
/*==============WORKING WITH STRINGS PART 3 ============== */

//split and join

// console.log('a+very+nice+string'.split('+'));
// console.log('yuyo bravo'.split(' '));
// const [firstName, lastName] = 'yuyo bravo'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('yuyo bravo');

// //padding

// const message = ' Go to gate 23! Now';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('yuyo'.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(98765432182858));
// console.log(maskCreditCard(987654321744141));
// console.log(maskCreditCard(9876543210123456789));

// //repeat

// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/*==============WORKING WITH STRINGS PART 2 ============== */
// const airline = 'TAP Air Mexico';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix  capitalization in name

// const passenger = 'bRaVO';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing email

// const email = 'hello@bravo.io';
// const loginEmail = ' Hello@Bravo.Io \n';

// //const lowerEmail = loginEmail.toLocaleLowerCase();
// //const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // booleans

// const plane = 'AIRBUS A32neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('BOEING'));
// console.log(plane.startsWith('AIR'));

// if (plane.startsWith('AIRBUS') && plane.endsWith('neo')) {
//   console.log('part of the AIRBUS FAMILY');
// }

// //practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
/*==============WORKING WITH STRINGS PART 1 ============== */

// const airline = 'TAP Air Mexico';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737');

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Mexico'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 8));

// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf('') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😱');
//   else console.log('You GOT LUCKY 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Bravo'));
// console.log(typeof new String('Bravo'));

/*==============CODING CHALLENGE 3 ============== */
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
/*==============MAPS: ITERATION============== */
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JAVASCRIPT'],
//   ['correct', 3],
//   [true, 'correct🥳 '],
//   [false, 'WRONG TRY AGAIN!😤'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

/*==============MAPS: FUNDAMENTALS============== */
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// console.log(rest.get(1));
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

/*==============SETS ============== */

// const ordersSet = new Set([
//   'PasTa',
//   'PizzA',
//   'Spaghetti',
//   'Alfredo',
//   'RisoTTO',
//   'CheESE',
// ]);
// console.log(ordersSet);

// console.log(new Set('Bravo'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('cheESE'));
// console.log(ordersSet.has('Alfredo'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('cheese Bread');
// ordersSet.delete;
// //ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //EXAMPLE
// const staff = [
//   'waiter',
//   'dishwasher',
//   'chef',
//   'manager',
//   'bartender',
//   'greeter',
// ];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['waiter', 'dishwasher', 'chef', 'manager', 'bartender', 'greeter'])
//     .size
// );
// console.log(new Set('RobertoBravoJr'.size));

/*==============CODING CHALLENGE 2 ============== */
// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// //2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const off of odds) average += odds;
// average /= odds.length;
// console.log(average);

// //3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
/*==============LOOPING OBJECTS/KEYS/VALUES/ENTRIES ============== */
// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);
// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }
/*==============OPTIONAL CHAINING ============== */

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// //console.log(restaurant.openingHours.mon.open);

// //WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);

// //EXAMPLE
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //METHODS

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // ARRAYS

// // const users = [{ name: 'Bravo', email: 'helloBravo.io' }];
// // const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

///
/*==============LOOPING ARRAYS : THE FOR-OF LOOP ============== */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

/*==============Coding Challenge 1 ============== */

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// //printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// //printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const rest2 = {
//   name: 'Olive GArDen',
//   owner: 'Yuyo Bravo',
// };
//OR ASSIGNMENT OPERATOR
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest2.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1 && '<ANONYMOUS>';
// rest2 && '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
/*=========== THE NULLISH COALESCING ===============/*
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//Nullish:null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*=========== SHORT CIRCUITING (&& ||) ===============/*
console.log('----OR ----');
//USE ANY DATA TYPE, RETURN ANY DATA TYPE, SHORT-CIRCUITING

console.log(3 || 'jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*=========== REST PATTERN AND PARAMETERS ===============/*
//DESTRUCTURING

// SPREAD, BECAUSE ON RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// FUNCTIONS

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/*=========== REST PATTERN AND PARAMETERS ===============/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//COPY ARRAY

const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 ARRAYS

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// ITERABLES: ARRAYS, STRINGS, MAPS, SET, NOT OBJECTS

const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(str);

// REAL WORLD EXAMPLE
// const ingredients = [
//   prompt("Let's make Pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//OBJECTS

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*===========  DESTRUCTURING OBJECTS ===============/*
restaurant.orderDelivery({
  time: '22, 30',
  address: 'Via de sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VARIABLES

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*===========  DESTRUCTURING ARRAYS ===============/*
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
};

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, second);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES

const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
