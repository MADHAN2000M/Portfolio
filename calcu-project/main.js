let input=document.querySelector("input")
function addValue(elementVal){
    input.value += elementVal

}

function clearVal(){
    input.value = ""
}

function deleteChar(){
    input.value = input.value.slice(0,length-1)
}

function evalValue(){
    input.value =eval(input.value)
}