class User {
    email: string
    name: string
    city: string = ''
    readonly id: number = 1234
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const mahir = new User('m@m.com', 'mahir')
console.log(mahir.name);
console.log(mahir.city);
mahir.city = 'ctg'
console.log(mahir.city);
