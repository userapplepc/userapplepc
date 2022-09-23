var lightbulb = document.querySelector(".icon-color");
var myData;
console.log(lightbulb);



async function foo(){


fetch("./data.json")
.then(response => response.json())
.then(data => {

    if(data.network == "true"){
        lightbulb.style.fill ="red";
       
    }

    else{
        lightbulb.style.fill ="green";
    }



});

}

foo();



