
    
        var select = document.querySelector.bind(document);
        var create = document.createElement.bind(document);
        var entries = new Array();
        //var input = document.querySelector("input");
        var input = select("input");
        //var para = document.querySelector("p");
        var para = select('p');
        var unOrdered = document.createElement("ul");
        var unOrdered = create('ul');
        unOrdered.style.listStyle = 'none';
        var list;
        var deleteButton;
        var apology, p;


    function update(){
        if(input.value){
        
            //input.value.replace(/<>/g, " ");    
            //list = document.createElement("li");
            list = create('li');
            list.style.backgroundColor = 'yellow';
            list.style.width = '30%';
            list.style.lineHeight = '2';
            list.style.fontSize ='20px';
            list.innerHTML = input.value;
            //deleteButton = document.createElement("button");
            deleteButton = create('button');
            deleteButton.style.fontSize = '10px';
            //deleteButton.style.marginLeft = '30px';
            deleteButton.innerHTML = "Remove Item";
            list.appendChild(deleteButton);
            unOrdered.appendChild(list);
            para.appendChild(unOrdered);
            
        }
        
        
        

        
    }

    //p = document.createElement('p');
    p = create('p');
    p.innerHTML = 'The remove item button is presently not fumctional, kindly bear with us.';
    p.style.backgroundColor = 'orange';
    p.style.width = '30%';
    para.appendChild(p);

    
    
    let deleteFunc = function(){
    
        //let emptyStr = document.createTextNode(" ");
        let emptyStr = create(' ')
        unOrdered.replaceChild( emptyStr , list );
    }
    
    deleteButton.addEventListener('click',deleteFunc());
    



