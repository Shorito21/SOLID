/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

/**
 * This is a bad example of a class
 * class User{}
 * private name:string;
 *constructor(name: string) {
    this.name = name;
  }
  
  addUser(name: string) {
    // ...
  }

  sendMessage(massage: string) {
    // ...
  }
  getUserName() {
    return this.name;
  }
 */

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getUserName() {
    return this.name;
  }
}

class Slack {
  // eslint-disable-next-line class-methods-use-this
  addUser(name: string) {
    // ...
  }

  // eslint-disable-next-line class-methods-use-this
  sendMessage(massage: string) {
    // ...
  }
}

const first = new User('Nikita');
const second = new Slack();

const third = second.addUser('Nikita 2');
