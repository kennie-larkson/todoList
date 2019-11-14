
let updateBtn = document.querySelector("button");




let updateList = function(){
    var todoString = document.querySelector("input").value;
    var para = document.querySelector("p");
    var textNode;
    var todoList = [];
    todoList.length = 20;

    if(todoString != " " ){
        
        let fillArray = todoList.splice(0,0, todoString);
        
         textNode = document.createTextNode(todoString);
         
         //textNode = document.createTextNode(fillArray);
         //let newLine = document.write("\n");

        para.appendChild(textNode);
        
    

    }

    // document.write("<br/>");

}
