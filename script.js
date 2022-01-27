const { clear } = require('console')
const readline = require('readline')
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout})

const menu = () => {
    rl
}
const taskManager = () => {
    let allTasks =[]
    rl.question("Welcome to your task manager Press:\n 1. to see all your tasks\n 2. to add a task\ 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager \n", (userInput) => {
        if (userInput == "1") {
            clear()
            console.log( " here are all you're tasks: \n" + allTasks);
        }
        else if (userInput == "2") {
            clear()
            rl.question("add you're task : ", (userInput) => {
                allTasks = userInput
                console.log("new task added: " + userInput)
            })
        
        }
       

      });
  
}


taskManager()