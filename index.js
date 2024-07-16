document.querySelector("#form").addEventListener("submit",myFunction);

var todoArr=JSON.parse(localStorage.getItem("todoData"))||[];
console.log(todoData);
function myFunction(){
    event.preventDefault();
    console.log("inside function");
    var name=document.querySelector("#name").value;
    var qty=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value;

    var todoObj={
        itemName:name,
        itemQty:qty,
        itemPriority:priority,
    };

    todoArr.push(todoObj);
    localStorage.setItem("todoData",JSON.stringify(todoArr));
}
