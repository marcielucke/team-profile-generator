const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
teamArray = [];



function beginApp () { 

    function addMember () { 

    inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your employees name?',
    },
    {
      type: 'list',
      name: 'position',
      message: 'What is their position',
      choices: ["Manager", "Engineer", "Intern"] 
    },]).then(function(input){
        switch(input.position) {
            case "Manager":
              createManager();
              break;
            case "Engineer":
              createEngineer();
              break;
            case "Intern":
              createIntern();
              break;
          };


     }) 

    function createManager() {
    inquirer
    .prompt ( [
    {
        type: 'input',
        name: 'idM',
        message: 'What is their employee ID?',
      },
      {
        type: 'input',
        name: 'emailM',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'If manager, what is their office number?',
      },
    ]).then(answers => {

            const manager = new Manager(answers.name, answers.idM, answers.emailM, answers.OfficeNumber);
            teamArray.push(manager);

            addMember();
        
      })};


    function createEngineer() {
        inquirer
        .prompt ([
        {
            type: 'input',
            name: 'idE',
            message: 'What is their employee ID?',
          },
          {
            type: 'input',
            name: 'emailE',
            message: 'What is their email?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'If engineer, what is their github page?',
          },
         
        ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.idE, answers.emailE, answers.github);
                teamArray.push(engineer);
                addMember();
            
        })};

    function createIntern() {
            inquirer
            .prompt ([
            {
                type: 'input',
                name: 'idI',
                message: 'What is their employee ID?',
              },
              {
                type: 'input',
                name: 'emailI',
                message: 'What is their email?',
              },
              {
                type: 'input',
                name: 'school',
                message: 'If intern, where did they go to school?',
              },
             
            ]).then(answers => {
                    const intern = new Intern(answers.name, answers.idI, answers.emailI, answers.school);
                    teamArray.push(intern);
              
                    continueApp();
                
            })};
        }

      function continueApp() {
        inquirer
        .prompt ([
          {
            type: 'confirm',
            name: 'continue',
            message: 'Do you want to add another?',
          

          },
        ]).then((teamArray) => {
          
          const PageContent = generateHTML(teamArray);
      
          fs.writeFile('./dist/index.html', PageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html')
          );
        });

        
      }
 
addMember();

};

const generateHTML = (teamArray) => {

  console.log(teamArray);
  let {name, position, idM, idE, idI, emailM, emailE, emailI, officeNumber, github, school} = teamArray[0];

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
  </head>
  
  <header class="jumbotron jumbotron-fluids bg-danger bg-gradient">
      <h1 class="text-center text-white"> My Team</h1>
  </header>
  <body>
      <div class="card text-center">
          <h5 class="card-header bg-primary text-white"> 
          ${name}
          ${position} </h5>
          <div class="card-body">
            <li class="card-text"> ${idM}</li>
            <li class="card-text"> ${idE}</li>
            <li class="card-text"> ${idI}</li>
            <li class="card-text"> ${emailM}</li>
            <li class="card-text"> ${emailE}</li>
            <li class="card-text"> ${emailI}</li>
            <li class="card-text"> ${officeNumber}</li>
            <li class="card-text"> ${github}</li>
            <li class="card-text"> ${school}</li>
          </div>
        </div>
  
      
  </body>
  </html>` ;
  };


  
  

beginApp();










