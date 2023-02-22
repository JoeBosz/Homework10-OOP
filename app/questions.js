export default new (class Questions {
  constructor() {
    this.menu = {
      name: "option",
      messages: "Please choose the following choices",
      type: "list",
      choices: ["Engineer", "Intern", "Build Team"],
    };
    this.engineer = [
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
    ];
  }
})();
