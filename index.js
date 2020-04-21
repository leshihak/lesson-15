const txtAddTask = document.getElementById("add--new--task");
const errorBlock = document.querySelector(".error");
const errorBlockLast = document.querySelector(".error-last");
const errorBtn = document.querySelector(".error-btn");
const errorBtnLast = document.querySelector(".error-btn-last");
const myDiv = document.getElementById("myDiv");

let newElement = () => {
  let div = document.createElement("div");
  let inputValue = txtAddTask.value;
  let txt = document.createTextNode(inputValue);
  div.appendChild(txt);
  div.classList.add("list--txt");

  if (inputValue === "") {
    errorBlock.classList.add("show");
    errorBtn.addEventListener("click", () => {
      errorBlock.classList.remove("show");
    })
  } else {
    document.getElementById("myDiv").appendChild(div);
    txtAddTask.value = "";
  }

  let btnList = document.createElement("button");
  btnList.className = "buttonList";
  div.appendChild(btnList);
 
  if (myDiv.childElementCount > 13) {
    div.parentNode.removeChild(div); 
  }

  btnList.onclick = () => {
    if(myDiv.childElementCount > 1) div.parentNode.removeChild(div)
    else {
      errorBlockLast.classList.add("show");
      errorBtnLast.addEventListener("click", () => {
      errorBlockLast.classList.remove("show");
      });
    }
  }
}



