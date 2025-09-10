let task = document.querySelector("#input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    console.log(task.value);
    let item = document.createElement("li");
    item.innerText = task.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    task.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } 

});






// let delBtns=document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         console.log("Element deleted");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
