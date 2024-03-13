"use strict";
// class User {
//     email: string
//     name: string
//     private city: string = ''
//     readonly id: number = 1234
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
// const mahir = new User('m@m.com', 'mahir')
// console.log(mahir.name);
// // console.log(mahir.city);
// // mahir.city = 'ctg'
// // console.log(mahir.city);
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1; //private variables are only accessible inside the class
        this.id = 1234;
    }
    deleteToken() {
        console.log(`token deleted`);
    }
    // getter method
    get getAppleEmailobject() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter method
    // setter method can not return anything so it will not have any return type
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }
}
//inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}
const mahir = new User('m@m.com', 'mahir', '123');
// mahir.deleteToken() //can not access it as it is a private token
