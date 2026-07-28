const displayinput = document.querySelector(".input");
const addbtn = document.querySelector(".btn");
const showdata = document.querySelector(".list");

let editItem = "";

addbtn.addEventListener("click", () => {
  const inputdata = displayinput.value.trim();

  if (editItem !== "") {
    editItem.firstChild.textContent = inputdata;

    editItem = "";
    addbtn.textContent = "Add";
    displayinput.value = "";

    return;
  }
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
  Del.addEventListener("click", () => {
    list.remove();
  });
  const Edit = document.createElement("button");
  Edit.textContent = "Edit";
  Edit.classList.add("Editbtn");
  list.appendChild(Edit);

  Edit.addEventListener("click", () => {
    displayinput.value = inputdata;
    editItem = list;
    addbtn.textContent = "Update";
  });
});
