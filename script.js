var value=0;

document.getElementById("output").innerText=value;

function increment(){
    if(value>=10){
        alert("10+ values are not allowed!")
    }
    else{
        value=value+1;
    }
    document.getElementById("output").innerText=value;
}

function decrement(){
    if(value>0){
        value=value-1;
    }
    else{
        alert("Negative values are not allowed!")
    }
    document.getElementById("output").innerText=value
}
function reset(){
    value=0;
    document.getElementById("output").innerText=value;
}


