// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "Which Pokemon do you choose?",
            choices: ["Bulbasaur", "Squirtle", "Charmander"],
            name: "pokemon"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.username);
            console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
        } else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });





//   var inquirer = require("inquirer");

// inquirer
//     .prompt([
//         /* Pass your questions in here */
//         {
//             type: 'input',
//             message: 'What is your trainer name?',
//             name: 'trainerName'
//         },
//         {
//             type: "password",
//             message: "Set your password",
//             name: "password"
//         },
//         {
//             type: 'list',
//             message: 'Which Pokemon do you choose?',
//             choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
//             name: 'trainerChoice'

//         },
//         {
//             type: 'confirm',
//             message: 'Are you ready for battle?',
//             name: 'trainerReady',
//             default: true
//         }
//     ])
//     .then(answers => {
//         if (answers.trainerReady) {
//             console.log(`Hello ${answers.trainerName} your ${answers.trainerChoice} is ready for battle!`)
//         } else {
//             console.log(`No problem ${answers.trainerName}, come back when you're ready.`)
//         }
//     })
//     .catch(error => {
//         console.log(error.isTtyError)
//     });