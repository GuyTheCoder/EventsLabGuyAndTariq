const enter = document.getElementById("enter");
console.log(enter);
const form = document.getElementById("form");
console.log(form);
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

 form.addEventListener("blur", function(){
    let count = 0;

//possible if statement here

// for(let i = 0; i<=2; i++ ){
//     if (i = 0) {
//         listItem1.innerText = form.value;
//     }else {
//         listItem2.innerText = form.value;
//     }

// }

    console.log(form.value);
    listItem1.innerText = form.value;
    listItem2.innerText = form.value;
} );

const list = document.getElementById("list");
//const listItem1 = document.createElement("li");
//listItem1.innerText = example;
enter.addEventListener("click", 
event => {
    list.appendChild (listItem1);
     list.appendChild (listItem2)
            } );




