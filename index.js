#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "please select your opponent",
        choices: [
            { name: "Vampire", value: "Vampire" },
            { name: "Alien", value: "Alien" },
            { name: "Zombies", value: "Zombies" },
        ],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //vampire
    if (opponent.select == "Vampire") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: [
                    { name: "Attack", value: "Attack" },
                    { name: "Drink portion", value: "Drink portion" },
                    { name: "Run for your life", value: "Run for your life" },
                ],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, you Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health portion, your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose");
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: [
                    { name: "Attack", value: "Attack" },
                    { name: "Drink portion", value: "Drink portion" },
                    { name: "Run for your life", value: "Run for your life" },
                ],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, you Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health portion, your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose");
            process.exit();
        }
    }
    //Zombies
    if (opponent.select == "Zombies") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: [
                    { name: "Attack", value: "Attack" },
                    { name: "Drink portion", value: "Drink portion" },
                    { name: "Run for your life", value: "Run for your life" },
                ],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, you Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`you drink health portion, your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("you loose");
            process.exit();
        }
    }
} while (true);
