const displayinput = document.querySelector(".input");
const addbtn = document.querySelector(".btn");
const showdata = document.querySelector(".list ");

addbtn.addEventListener("click", () => {
  const inputdata = displayinput.value.trim();
  if (inputdata === "") {
    return;
  }
  const list = document.createElement("li");
  list.textContent = inputdata;
  list.classList.add("newlist");
  showdata.appendChild(list);
  displayinput.value = "";
  const Del = document.createElement("button");
  Del.textContent = "Del";
  Del.classList.add("Delbtn");
  list.appendChild(Del);
  Del.addEventListener('click',() =>{
  list.remove();
   })
   
   const Edit = document.createElement("button");
   Edit.textContent = "Edit";
   Edit.classList.add("Editbtn");
   list.appendChild(Edit);
   Edit.addEventListener('click',() =>{

   displayinput.value = inputdata;
   addbtn.textContent = "Update";
   
   })
    
   });
