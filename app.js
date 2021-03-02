let User = function (name, balance) {
    this.balance = balance
    this.name = name
    this.getrole = function () {
        let name
        if(this.balance>1000){
            name='gold'
        }else if(this.balance>500){
            name='silver'
        }
        else{
            name='normal'
        }
        return name
    }
}
let user1=new User('amirali',7800)
console.log(user1.getrole())