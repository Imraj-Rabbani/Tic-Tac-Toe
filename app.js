console.log("connected")

var button=document.querySelector("#btn")
var square = document.querySelectorAll(".square")
var cellOne= document.querySelector(".cellOne")

function clearBoard(){
    for (var i=0; i< square.length ; i++){
        square[i].textContent= '';
        console.log(square[i])
    }
}

button.addEventListener('click',clearBoard)

// we can repeat the code below eight more times and will get our expected results, however there is a better way
// cellOne.addEventListener('click',()=>{
//     if (cellOne.innerHTML===""){
//         cellOne.innerHTML="X";
//     }else if (cellOne.innerHTML==="X"){
//     cellOne.innerHTML="O";
//     }else{
//         cellOne.innerHTML="";
//     }
// })

function changeMaker(){
    if(this.textContent=== ""){
        this.textContent="X"
    }else if (this.textContent==="X"){
        this.textContent="O"
    }else{
        this.textContent=""
    }
}
for (var i=0; i<square.length; i++){
    square[i].addEventListener('click',changeMaker)
}
