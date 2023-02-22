import Employee from "./Employee.js";

export default class Engineer extends Employee {
  school;

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getschool() {
    return this.school;
  }
}
