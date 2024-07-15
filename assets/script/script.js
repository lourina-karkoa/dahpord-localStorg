const container =document.querySelector('.container')
const form = document.querySelector("form");
let data=[];
const addItem= (item)=>{
    container.innerHTML +=`<div class="card ${(item.done)?"done" : ""}">
    <span id="name${item.id}">${item.taskname}</span>
    <input type="text" placeholder="task name" value="" id="updateNameInput${item.id}" class="updateName">
    <button onclick="updateName(${item.id})" class="updateName" id="updateNameButton${item.id}">save</button>
    <button id="updateState" onclick="updateState(${item.id})">Update state</button>
    <button onclick="ShowForm(${item.id})">Update name</button>
    <button onclick="deleteItem(${item.id})" id="del${item.id}">Delete</button>
</div>` }
function read (){
    data =(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [];
    container.innerHTML ="";
    data.forEach(element =>{
    addItem(element)
    });
};


const creat = ()=>{
    const input = document.querySelector('#taskname')
    const val = input.value;
     let id= (localStorage.getItem("id")) ? parseInt(localStorage.getItem("id")) +1 : 1;
      const task={id:id,taskname:val,done:false};
      input.value="";
      data.push(task);   
      addItem(task)
      localStorage.setItem("data" , JSON.stringify(data));
      localStorage.setItem("id" , id); 
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    creat()
});
function updateState(id) {
data = data.map(element => {
    if(element.id == id){
        element.done = ! element.done ;
    }
    return element;
})
localStorage.setItem("data" , JSON.stringify(data));
read()
}
function updateName(id) {
    const input = document.querySelector(`#updateNameInput${id}`);
    const save = document.querySelector(`#updateNameButton${id}`);
    const spanName = document.querySelector(`#name${id}`);
    data = data.map(element => {
        if(element.id == id){
            element.taskname = input.value;
        }
        return element;
    })
    // read()
    localStorage.setItem("data" , JSON.stringify(data));
    spanName.style.display ='inline';
    save.style.display ='none';
    input.style.display ='none';
    read()

}
function ShowForm(id) {
    const input = document.querySelector(`#updateNameInput${id}`);
    input.style.display ='inline';
    const save = document.querySelector(`#updateNameButton${id}`);
    save.style.display ='inline';
    const spanName = document.querySelector(`#name${id}`);
    spanName.style.display ='none';
    let x= data.find(element =>{
        return element.id==id})
        console.log(x);
        input.value = x.taskname;
}

function deleteItem(id) {
    data = data.filter(element => {return element.id != id})
    localStorage.setItem("data" , JSON.stringify(data));
    read()
}
read();

let y;
let a;

function SearchData(){
    const search = document.querySelector('.search')
    y = search.value;
    arr =(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [];
    
   for(let i =0 ; i<data.length ;i++){
   if (data[i].taskname == y){
    a = data[i];
    console.log(data[i].taskname);
    
    container.innerHTML ="";
    container.innerHTML +=`<div class="card ${(a.done)?"done" : ""}">
    <span id="name${a.id}">${a.taskname}</span>
    <input type="text" placeholder="task name" value="" id="updateNameInput${a.id}" class="updateName">
    <button onclick="updateName(${a.id})" class="updateName" id="updateNameButton${a.id}">save</button>
    <button id="updateState" onclick="updateState(${a.id})">Update state</button>
    <button onclick="ShowForm(${a.id})">Update name</button>
    <button onclick="deleteItem(${a.id})" id="del${a.id}">Delete</button>
</div>`
    }
   
  
}

}