var count = 0;

function plusone(){
    count = count + 1;
    document.getElementById("count-text").innerHTML = count;
}

function minusone(){
    count = count - 1;
    document.getElementById("count-text").innerHTML = count;
}

document.getElementById("plus-one").addEventListener("click", plusone)
document.getElementById("minus-one").addEventListener("click", minusone)