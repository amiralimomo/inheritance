// let User = function (name, balance) {
//     this.balance = balance
//     this.name = name
//     this.getrole = function () {
//         let name
//         if (this.balance > 1000) {
//             name = 'gold'
//         } else if (this.balance > 500) {
//             name = 'silver'
//         }
//         else {
//             name = 'normal'
//         }
//         return name
//     }
// }


// let user1 = new User('amirali', 7800)
// // console.log(user1.getrole())



// User.prototype.getbalance = function () {
//     return this.balance
// }
// // console.log(user1.getbalance())


// let Client = function (name, balance, phone) {
//     User.call(this, name, balance)
//     this.phone = phone
// }
// Client.prototype = Object.create(User.prototype)
// let client1 = new Client('momo', 700, 989387749878)
//console.log(client1.getrole())

class Users {
    constructor(name, balance) {
        this.name = name,
            this.balance = balance
    }
    getbalances() {
        return this.balance
    }
}
let user1=new Users('amir',400)
console.log(user1.getbalances())
class bisness extends Users{
    constructor(name,balance){
        super(name,balance)
    }
}