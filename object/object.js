//task1

let user = {
    name:'adam',
    age :25 , 
    gender: "male" 
}
console.log(user.name,user.age,user.gender)

//task2
let user1 = {
    name:'adam',
    age :25 , 
}

user1. gender="male" 
console.log(user1)

//task3
let user2 = {
    name:'adam',
    age :25 , 
}
user2['gender'] = "male"
console.log(user2)

//task4
let user3 = {
    name:'adam',
    age :25 , 
}
console.log(user3.name)

//task5
let user4 = {
    name:'adam',
    age :25 , 
}
console.log(user4['name'])

//task6

let user5= { name: 'Adam',
    age: 25,
     gender: 'male' 
    }
     for (let key in user5) 
    console.log(key,user5[key])


//task7
 let user6 = { name: 'Adam',
        age: 25,
     gender: 'male' } 
   let user7=Object.keys(user6)
   console.log (user7)

//task8
   let user8= { name: 'Adam',
    age: 25,
 gender: 'male' } 
let user9=Object.values(user8)
console.log (user9 )

//task9

let user10 = { name: 'Adam',
    age: 25,
 gender: 'male' } 
let user11=Object.entries(user10)
console.log (user11)

//task10

let user12 = { name: 'Adam',
    age: 25,}
 let user13= {gender: 'male'};
 let user14=Object.assign(user12,user13)
 console.log (user14)

//task11

let user15 = {
    name: "Adam",
    age: 25,
  };
  let user16 = Object.freeze(user15);
  console.log(user16);

 //task12
let user17 = {
  name: "Adam",
  age: 25,
};
let user18= Object.seal(user17);
console.log(user18);


//task13
class ToDo {
    constructor() {
        
        this.todoList = document.getElementById("list");
        this.todoInput = document.getElementById("input");
        this.addButton = document.getElementById("task");

        this.addButton.addEventListener("click", () => this.addTask());
    }

    addTask() {
        const taskText = this.todoInput.value.trim(); 
        if (taskText === "") return; 

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () =>this.toggleComplete(listItem));
        completeButton.style.backgroundColor="green"
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => this.deleteTask(listItem));
        deleteButton.style.backgroundColor="red"

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        this.todoList.appendChild(listItem);

        this.todoInput.value = "";
    }

    toggleComplete(taskItem) {
        taskItem.classList.toggle("completed"); 
      
    }

    deleteTask(taskItem) {
        this.todoList.removeChild(taskItem); 
    }
}

let todoApp = new ToDo();


