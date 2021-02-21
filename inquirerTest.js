let inquirer = require('inquirer');
const playGame = () => {

    inquirer
        .prompt([{
                type: 'input',
                message: 'What is your trainer name?',
                name: 'trainerName'
            },
            {
                type: 'password',
                message: 'set your password',
                name: 'password'
            },
            {
                type: 'list',
                message: 'Choose your starter Pokemon!',
                choices: ['Bulbasaur', 'Squrtle', 'Charmander'],
                name: 'pokemon',
            }
        ])
        .then((inquirerResponse) => {
            inquirer.prompt([{
                type: 'input',
                message: `what would you like to name your ${inquirerResponse.pokemon}`,
                name: 'pokemonName'
            }]).then(res => {
                let trainerName = inquirerResponse.trainerName
                let trainerPokemon = inquirerResponse.pokemon
                let pokemonNickName = res.pokemonName
                console.log(`Welcome ${trainerName}`);
                console.log(`Your ${trainerPokemon}, ${pokemonNickName}, is ready for battle!`);
                console.log('A wild Caterpie appeared!');
                console.log(`${trainerName}, called ${pokemonNickName}`)
                let pokemon_hp = 50;
                let cat_hp = 30;
                const battleSequence = (pokemon_hp, cat_hp, pokemonNickName) => {
                    inquirer.
                    prompt([{
                            type: 'list',
                            message: 'Which move will you choose to attack with?',
                            choices: ['Tackle', 'Sand Attack', 'Water Gun'],
                            name: 'attack',
                        }])
                        .then(res => {
                            pokemon_hp -= Math.floor(Math.random() * 10)
                            cat_hp -= Math.floor(Math.random() * 10)
                            console.log(`${pokemonNickName}, used ${res.attack}`);
                            console.log(`Caterpie has ${cat_hp} health points remaining`)
                            console.log(`Caterpie used tackle!`)
                            console.log(`${pokemonNickName} has ${pokemon_hp} health points remaining`)
                            if (pokemon_hp < 0) {
                                console.log(`${pokemonNickName} fainted, you black out...`)
                            } else if (cat_hp < 0) {
                                console.log('Caterpie fainted! YOU WON!')
                            } else {
                                battleSequence(pokemon_hp, cat_hp, pokemonNickName)
                            }
                        })
                };
                battleSequence(pokemon_hp, cat_hp, pokemonNickName)
            })

        });
};

playGame();

/* ------------------------------------------------------------------------- */

// // const userLogged = () => console.log('This represents us looking for your login data')

// // setTimeout(userLogged, 3000);
// let loadSite = () => {
//     console.log('site is loaded');
// };

// const userLogin = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// userLogin(3000)
//     .then(() => console.log('This represents us looking for your login data'), loadSite);



// const userLoggedIn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// userLoggedIn(3000)
//     .then(() => console.log('us getting you logged in!'));

// let loadSite = () => {
//     console.log('loading the site');
// };

// loadSite();

// delay(0)
//     .then(() => {
//         console.log('Resolved ASAP')
//         return delay(1500);
//     })
//     .then(() => {
//         console.log('Resolved after 1.5 seconds');
//         return delay(3000);
//     }).then(() => {
//         console.log('Resolved after 3 seconds');
//         throw new Error();
//     }).catch(() => {
//         console.log('Caught an error.');
//     }).then(() => {
//         console.log('Done.');
//     });

// const regFunc = () => {
//     console.log('Not a Promise.');
// };

// regFunc();

// <------------------------------------------------------> \\

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 100 < 99) {
//         console.log('resolving the promise ...');
//         resolve('Hello, Promises!');
//     }
//     reject(new Error('In 1% of the cases, I fail. Miserably.'));
// });

// // Two functions 
// const onResolved = (resolvedValue) => console.log(resolvedValue);
// const onRejected = (error) => console.log(error);

// myPromise.then(onResolved, onRejected);

// console.log('Hello, I happen before the promise.');