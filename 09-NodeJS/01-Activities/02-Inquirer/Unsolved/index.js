const fs = require('fs');
// Install the `inquirer` dependency HERE

// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
var inquirer = require('inquirer');
const { type } = require('os');

inquirer
    .prompt([
        {
            type: "input",
            name: 'userName',
            message: 'What is your name?'
        },
        {
            type: 'checkbox',
            name: 'knownLanguages',
            message: 'What languages do you know?',
            choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
        },
        {
            type: 'list',
            name: 'preferredContact',
            message: 'What is your preferred method of communication?',
            choices: ['Phone', 'Email', 'Slack', 'Discord']
        }
    ])
    .then((answers) => {
      writeFile(answers);
    })
    

// Write the user response to a file by chaining the below callback method to the prompt above.
function writeFile(data) {
  const filename = data['userName'] + '.json';
  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  //

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
};
