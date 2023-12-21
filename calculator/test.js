const result = document.querySelector("#result")
const inputElements = document.querySelector("#input")

let resultReturned = ''

inputElements.addEventListener("click",(e)=>{

    if(e.target.value === 'C'){
        resultReturned = ''
        result.innerHTML = resultReturned
    }
    if(e.target.value === '='){
        if(resultReturned === ''){
            resetCalc();
            return;
        }
        try{
            resultReturned = eval(resultReturned)
            result.innerHTML = parseFloat(resultReturned).toLocaleString()
        }
        catch(e){
            resetCalc();
        }
    }
    if(e.target.value === '>' && resultReturned !== ''){
        const newAr = Array.from(resultReturned)
        newAr.pop()
        resultReturned = newAr.join('')
        result.innerHTML = resultReturned
    }
   if(e.target.value !== undefined && e.target.value !== 'C' && e.target.value !== '=' && e.target.value !== '>'){
    resultReturned += e.target.value
    result.innerHTML = resultReturned
   }
},false)

function resetCalc(){
    alert("Provide proper input..!")
    resultReturned = ''
    result.innerHTML = resultReturned
}