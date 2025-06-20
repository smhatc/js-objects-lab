const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 }
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 }
  ]
};
const separator = "--------------------------------------------------";

/* Exercise 1 */

console.log("Exercise 1: Pokémon 59's name and list of Pokémon for reference:");
console.log("Pokémon 59's name:", pokemon[58].name);
console.log("List of Pokémon:");
console.dir(pokemon, { maxArrayLength: null });
console.log(separator);

/* Exercise 2 */

console.log("Exercise 2: Initial 'game' object for reference:")
console.log(game);
console.log(separator);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/

console.log("Exercise 3: Adding a 'difficulty' property to the 'game' object:");
game.difficulty = "Med";
console.log(game);
console.log(separator);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

console.log("Exercise 4: Adding a starter Pokémon to the 'game.party' array:");
const selectedStarterPokemon = pokemon[24];
game.party.push(selectedStarterPokemon);
console.log(game.party);
console.log(separator);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/

console.log("Exercise 5: Adding three more Pokémon to the 'game.party' array:");
const threeMorePokemon = [pokemon[145], pokemon[149], pokemon[150]];
threeMorePokemon.forEach((pokemon) => {
  game.party.push(pokemon);
});
console.log(game.party);
console.log(separator);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/

console.log("Exercise 6: Setting the 'completed' property for gyms with a difficulty lower than 3:");
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
console.log(game.gyms);
console.log(separator);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokémon 1: Bulbasaur evolves into Pokémon 2: Ivysaur
  - Pokémon 4: Charmander evolves into Pokémon 5: Charmeleon
  - Pokémon 7: Squirtle evolves into Pokémon 8: Wartortle
  - Pokémon 25: Pikachu evolves into Pokémon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokémon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/

console.log("Exercise 7: Evolving the starter Pokémon:");
game.party.splice(0, 1, pokemon[25]);
console.log(game.party[0]);
console.log(separator);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log("Exercise 8: Party's Pokémon names:");
game.party.forEach((pokemon) => {
  console.log(pokemon.name);
});
console.log(separator);

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.

Solve Exercise 9 here:
*/

console.log("Exercise 9: All starter Pokémon names:");
pokemon.forEach((pokemon) => {
  if (pokemon.starter) console.log(pokemon.name);
});
console.log(separator);

/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

console.log("Exercise 10: Adding a 'catchPokemon' method to the 'game' object and calling it to catch 'Tentacool' from the 'pokemon' array:");
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[71]);
console.log("New method:", game.catchPokemon);
console.log("Updated party:", game.party);
console.log(separator);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

console.log("Exercise 11: Modifying the 'catchPokemon' method to decrease the pokeball quantity by 1 each time it is run. Also catching 'Kadabra' with the updated method:");
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  game.items[1].quantity -= 1;
};
console.log("Pokeballs before:", game.items[1]);
game.catchPokemon(pokemon[63]);
console.log("Pokeballs after:", game.items[1]);
console.log("Updated party:", game.party);
console.log(separator);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `completed` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log("Exercise 12: Setting the 'completed' property for gyms with a difficulty lower than 6:");
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6 && !(gym.completed)) gym.completed = true;
});
console.log(game.gyms);
console.log(separator);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

console.log("Exercise 13: Creating the 'game.gymStatus' method as per the requirements and logging the tally of complete and incomplete gyms:");
game.gymStatus = () => {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };
  game.gyms.forEach((gym) => {
    gym.completed ? gymTally.completed += 1 : gymTally.incomplete += 1;
  });
  console.log(gymTally);
};
game.gymStatus();
console.log(separator);

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokémon in the party.
  - return the found number of Pokémon in the party.

Solve Exercise 14 here:
*/

console.log("Exercise 14: Creating the 'game.partyCount' method as per the requirements and returning the number of Pokémon currently in the party:");
game.partyCount = () => {
  return game.party.length;
};
console.log(game.partyCount());
console.log(separator);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `completed` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

console.log("Exercise 15: Setting the 'completed' property for gyms with a difficulty lower than 8:");
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8 && !(gym.completed)) gym.completed = true;
});
console.log(game.gyms);
console.log(separator);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.

Solve Exercise 16 here:
*/

console.log("Exercise 16: Logging the 'game' object to the console:", game);