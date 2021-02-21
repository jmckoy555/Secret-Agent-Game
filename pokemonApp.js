let inquirer = require('inquirer');
const playGame = () => {

    inquirer
        .prompt([{
                type: 'input',
                message: 'What is your name Director?',
                name: 'trainerName'
            },
            {
                type: 'password',
                message: 'set your password',
                name: 'password'
            },
            {
                type: 'list',
                message: 'Choose your agent',
                choices: ['Ethan Hunt', 'James Bond', 'Atomic Blonde'],
                name: 'pokemon',
            }
        ])
        .then((inquirerResponse) => {
            inquirer.prompt([{
                type: 'input',
                message: `what would you like ${inquirerResponse.pokemon} codename to be?`,
                name: 'pokemonName'
            }]).then(res => {
                let trainerName = inquirerResponse.trainerName
                let trainerPokemon = inquirerResponse.pokemon
                let pokemonNickName = res.pokemonName
                console.log(`Welcome ${trainerName}`);
                console.log(`${trainerPokemon}, Codenamed ${pokemonNickName}, is ready for their mission!`);
                console.log('A firewall has been put up to stop you from retreiving the nuclear codes');
                console.log(`${trainerName}, called ${pokemonNickName}`)
                let pokemon_hp = 50;
                let cat_hp = 30;
                const battleSequence = (pokemon_hp, cat_hp, pokemonNickName) => {
                    inquirer.
                    prompt([{
                            type: 'list',
                            message: 'How will you get the codes?',
                            choices: ['Hack the system', 'Infultrate the building'],
                            name: 'attack',
                        }])
                        .then(res => {
                            pokemon_hp -= Math.floor(Math.random() * 10)
                            cat_hp -= Math.floor(Math.random() * 10)
                            console.log(`${pokemonNickName}, used ${res.attack}`);
                            console.log(`Firewall has ${cat_hp}%  of defense remaining`)
                            console.log(`Firewall sent reinforcements`)
                            console.log(`${pokemonNickName} has ${pokemon_hp} health points remaining`)
                            if (pokemon_hp < 0) {
                                console.log(`${pokemonNickName} was unsucessful. Game Over`)
                            } else if (cat_hp < 0) {
                                console.log('The firewall was breached and you got the codes back, YOU WON!')
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