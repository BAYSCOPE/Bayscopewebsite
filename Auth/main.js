

const formOne = document.getElementById("group-1")
const formTwo = document.getElementById("group-2")
const formThree = document.getElementById("group-3")
const counterOne = document.getElementById("counter-1")
const counterTwo = document.getElementById("counter-2")
const counterThree = document.getElementById("counter-3")


let current = 1;

function changeForm(){
    
if(current === 1){
    counterOne.style.backgroundColor = " #3EC1D5";
    counterOne.style.color = "white";

    counterTwo.style.backgroundColor = "gray";
        counterTwo.style.color = "black";
    
        counterThree.style.backgroundColor = "gray";
        counterThree.style.color = "black";
    
    formOne.style.display = "flex";
    formTwo.style.display = "none";
    formThree.style.display = "none";
}else if(current === 2){
    counterTwo.style.backgroundColor = " #3EC1D5";
    counterTwo.style.color = "white";

    counterOne.style.backgroundColor = "gray";
        counterOne.style.color = "black";
    
        counterThree.style.backgroundColor = "gray";
        counterThree.style.color = "black";
    
    formTwo.style.display = "flex";
    formOne.style.display = "none";
    formThree.style.display = "none";
}else if(current === 3){
    counterThree.style.backgroundColor = " #3EC1D5";
    counterThree.style.color = "white";

    counterTwo.style.backgroundColor = "gray";
        counterTwo.style.color = "black";
    
        counterOne.style.backgroundColor = "gray";
        counterOne.style.color = "black";

    formThree.style.display = "flex";
    formTwo.style.display = "none";
    formOne.style.display = "none";
}
}

counterOne.addEventListener('click', function(){
    current = 1;
    changeForm();
});

counterTwo.addEventListener('click', function(){
    current = 2;
    changeForm();
});

counterThree.addEventListener('click', () => {
    current = 3;
    changeForm();
})

changeForm();