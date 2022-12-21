import inquirer from "inquirer";
import Engineer from "./Engineer.js";
import fs from "fs";
console.log(Engineer);

/*
inquirer
  .prompt([
    {
      name: "name",
      message: "What is your name?",
      type: "input",
    },
    {
      name: "date",
      message: "What is your name",
      type: "input",
    },
  ])
  .then((answers) => {
    console.log(answers.name);
    console.log(answers.date);
  });
  */

const team = [];

inquirer
  .prompt({
    name: "option",
    messages: "Please choose the following choices",
    type: "list",
    choices: ["Engineer", "Intern", "Manager"],
  })
  .then((answers) => {
    if (answers.option === "Engineer") {
      createEngineer();
    }
  });

function createEngineer() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "please enter your name",
      },
      {
        name: "email",
        message: "please enter your email",
      },
      {
        name: "id",
        message: "please enter your id",
      },
      {
        name: "github",
        message: "please enter your github",
      },
    ])
    .then((answers) => {
      const Engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(Engineer);
    });
}

/* function createHtml() {
  fs.writeFileSync(
    "./Employee.html",
    `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>${team[0].name} !</h1>
    </body>
  </html>
`
  );
} */
