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
    private _courseCount: number = 1 //private variables are only accessible inside the class
    readonly id: number = 1234
    constructor(
        public email: string,
        public name: string,
        private userId: string) {
    }

    private deleteToken(){
        console.log(`token deleted`);
    }

    // getter method
    get getAppleEmailobject(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter method
    // setter method can not return anything so it will not have any return type
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNumber
    
    }
}

//inheritance
class SubUser extends User{
    isFamily : boolean = true


}

const mahir = new User('m@m.com', 'mahir', '123')
// mahir.deleteToken() //can not access it as it is a private token
