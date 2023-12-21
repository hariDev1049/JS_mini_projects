const button = document.querySelector("#subt");
const form = document.querySelector("form")
const prev = document.querySelector("#prev");
const chanceNum = document.querySelector("#chanceNum")
const randomNum = getRandomNumber();
let res = document.querySelector("#result")
let clock = document.querySelector("#digi")
let prevArray = []
let chance = 5

setInterval(()=>{
    clock.innerHTML = `${new Date().toLocaleTimeString()}`;
},1000)

button.addEventListener('click',function(e){
    e.preventDefault();
    const enteredNum = parseInt(document.querySelector("#input").value)
    if(checkNumber(enteredNum) && enteredNum == randomNum){
        res.style.display ="block";
        res.innerHTML = `Hurray..! You have guessed the number correctly..!` 
        formReset(true);
    }
});


function getRandomNumber(){
    return Math.round(Math.random() * 100 + 1)
}

function checkNumber(enteredNum){
    if(isNaN(enteredNum)){
        alert('Kindly enter a valid number')
    }
    else if(enteredNum > 100){
        alert('Entered number should be less than 100')
    }
    else if(enteredNum < 1){
        alert('Entered number should be more than 1')
    }
    else{
        if(chance >= 1){
            if(prevArray.includes(enteredNum)){
               res.style.display ="block";
               res.innerHTML = `Entered number has been already tried once.` 
                return;
            }
            formReset(false, enteredNum);
            return true;    
        }
        else{
            formReset(true)
            alert(`Oops..! Your chances are over. Let's retry once more.. <br/> The magic number is ${randomNum}`)
        }
    }
    return false;
}

function formReset(val, num = 0){
    if(val) {
        chance = 5;
        prevArray = [];
    }
    else { 
        chance = chance - 1
    }
    if(num) {
        prevArray.push(num);
    }
    else { 
        prevArray = [];
    }
    form.reset();
    res.style.display = "none";
    chanceNum.innerHTML = chance;
    prev.innerHTML = `${prevArray.toString()}`
}
