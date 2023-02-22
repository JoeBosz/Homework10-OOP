import Employee from "./Employee.js";

export default class Engineer extends Employee {
  officeNumber;

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getofficeNumber() {
    return this.officeNumber;
  }
}
