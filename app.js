const addBtn=document.querySelector(".add-btn");
const newTask = document.querySelector("#task");
const ul=document.querySelector(".collection");
addBtn.addEventListener("click", addlist);
function addlist(e){
    e.preventDefault();
  newEnteredTask=newTask.value.trim();
  if(newEnteredTask==""){
    alert("enter a task");
  }
  else{
  const addTaskToli=document.createElement("li");
  addTaskToli.className="collection-item";
  addTaskToli.innerText=newEnteredTask;
  const link=document.createElement("a");
  link.className="delete-item secondary-content";
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  addTaskToli.appendChild(link);
  ul.appendChild(addTaskToli);
  newTask.value="";
  console.log(`task added ${newEnteredTask} to li`);
  }
}
// clear all
const allList=document.querySelectorAll(".collection-item");
const clearBtn=document.querySelector("#btn-clear");
clearBtn.addEventListener("click",clearList);
function clearList(e){
   e.preventDefault();
   allList.forEach(function(value){
    value.remove();
   });
   console.log(`all list are removed from ul ${allList}`)
}
