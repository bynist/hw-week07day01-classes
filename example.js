






let celica = {
    model: 'toyota',
    color: 'black',
    fuel: 100,
    drive: function () {
        this.fuel--
        return 'Driving'
    },
    refuel: function() {
        this.fuel = 100
        return 'Fueled up'
    }
}
console.log(celica.model)
console.log(celica.drive() + " " + celica.fuel)
console.log(celica.refuel() + " " + celica.fuel)
class Car {
    constructor(carmodel, carcolor){
        this.model = carmodel
        this.color = carcolor
        this.fuel = 100
    }
    drive() {
        this.fuel--
        return `Current fuel is ${this.fuel}. while driving`
    }
    refuel() {
        this.fuel = 100
        return `Current fuel is ${this.fuel}. while refueling`
    }
}
let celica = new Car('Toyota', 'Black')
console.log(Car.prototype)
console.log(Object.getOwnPropertyNames(Car.prototype))
// console.log(celica.model + " " + celica.color)
// console.log(celica.drive())
// console.log(celica)
class Animal {
    constructor(name) {
        this.name = name
        this.speed = 0
    }
    run(speed)  {
        this.speed += speed
        return `${this.name} runs with a speed of ${this.speed}`
    }
    stop() {
        this.speed = 0
        return `${this.name} is standing still`
    }
}
class Frog extends Animal {
    hop() {
        return `${this.name} jumped`
    }
    stop() {
        return `stopped`
    }
}
let newfrog = new Frog("crazyfrog")
console.log(newfrog.hop())
console.log(newfrog.stop())
// let frog = new Animal("crazyfrog")
// console.log(frog)
// console.log(frog.run(5))
// console.log(frog)
// frog.stop()
// console.log(frog)
lab Solution
class ATM {
    constructor(type) {
        this.type = type
        this.money = 0
        this.transactionHistory = []
        this.backupAccount = 100
    }
    withdraw (cash) {
        this.transactionHistory.push(-cash)
        this.money -= cash
        if(this.money < 0) {
                let dues = (-1)*(this.money)
                this.backupAccount -= dues
                this.money += dues
        }
    }
    deposit(cash) {
        this.transactionHistory.push(cash)
        this.money += cash
    }
    showbalance() {
        console.log(`${this.money} currently in your account`)
    }
}