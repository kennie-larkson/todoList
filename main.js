
//let updateBtn = document.querySelector("button");
;

function update(){

    let inputString = document.querySelector("input").value;
    let paragraph = document.querySelector("p");
    let textNode = document.createTextNode(inputString);
    paragraph.appendChild(textNode);
    console.log(textNode);
    
};

//updateBtn.addEventListener("click", update);


