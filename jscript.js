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

// const displayinput = document.querySelector(".input");
// const addbtn = document.querySelector(".btn");
// const showdata = document.querySelector(".list");

// let editItem = null;

// addbtn.addEventListener("click", () => {
//   const inputdata = displayinput.value.trim();

//   if (inputdata === "") {
//     return;
//   }

//   // UPDATE
//   if (editItem !== null) {
//     editItem.textContent = inputdata;
//     editItem = null;

//     addbtn.textContent = "Add";
//     displayinput.value = "";

//     return;
//   }

//   // CREATE LI
//   const list = document.createElement("li");
//   list.classList.add("newlist");

//   // CREATE SPAN
//   const textSpan = document.createElement("span");
//   textSpan.textContent = inputdata;

//   list.appendChild(textSpan);

//   // DELETE BUTTON
//   const Del = document.createElement("button");
//   Del.textContent = "Del";
//   Del.classList.add("Delbtn");

//   list.appendChild(Del);

//   Del.addEventListener("click", () => {
//     list.remove();
//   });

//   // EDIT BUTTON
//   const Edit = document.createElement("button");
//   Edit.textContent = "Edit";
//   Edit.classList.add("Editbtn");

//   list.appendChild(Edit);

//   Edit.addEventListener("click", () => {
//     displayinput.value = textSpan.textContent;
//     addbtn.textContent = "Update";

//     editItem = textSpan;
//   });

//   // ADD LI TO UL
//   showdata.appendChild(list);

//   // CLEAR INPUT
//   displayinput.value = "";
// });
