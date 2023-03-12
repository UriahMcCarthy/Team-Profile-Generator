const Engineer = require("./library/Engineer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const inquirer = require("inquirer") //external
const fs = require("fs") // part of node -- no npm i fs
let teamEmployee = []

const startMenu = () =>{
    inquirer.prompt([
        {
            type:"list",
            message:"Choose the status of Employee",
            name:"option",
            choices:["Add Manager","Add Engineer","Add Intern","Generate HTML & Exit"]
        }
    ]).then(response => {
        switch(response.option){
            case "Add Manager":
                addManager()
                break;
            case "Add Engineer":
                addEngineer()
                break;
            case "Add Intern":
                addIntern()
                break;  
            default:
                generateHTML();

        }
    })
}


const addEngineer = () => {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Engineer Name",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Github",
            name:"github"
        },
        {
            type:"input",
            message:"Enter ID",
            name:"ID"
        },
    ]).then(response => {
        const engineerEmp = new Engineer(response.name, response.id, response.email,response.github);
        teamEmployee.push(engineerEmp)
        startMenu()
    })
}

    

const addIntern = () => {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Intern Name",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter School Name",
            name:"schoolName"
        },
        {
            type:"input",
            message:"Enter ID",
            name:"id"
        },
    ]).then(response => {
        const internEmp = new Intern (response.name, response.id, response.email,response.schoolName);
        teamEmployee.push(internEmp)
        startMenu()
    })
}


const addManager = () => {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Manger Name",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Office Number",
            name:"officeNum"
        },
        {
            type:"input",
            message:"Enter ID",
            name:"id"
        },
    ]).then(response => {
        const managerEmp = new Manager(response.name, response.id, response.email,response.officeNum);
        teamEmployee.push(managerEmp)
        startMenu()
    })
}


const generateHTML = ()=>{
    console.log(teamEmployee)
}



startMenu()