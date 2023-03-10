import Employee from "./Employee.js";

export default class Engineer extends Employee {
  github;

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getgithub() {
    return this.github;
  }
}
