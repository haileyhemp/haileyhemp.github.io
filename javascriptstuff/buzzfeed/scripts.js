var q1_a1 = document.getElementById("q1-a1");
var q1_a1 = document.getElementById("q1-a2");
var q1_a1 = document.getElementById("q1-a3");
var q1_a1 = document.getElementById("q1-a4");

var result = document.getElementById("result");
var submit_button = document.getElementById("submit-button");


var score_Ariel = 0;
var score_Belle = 0;
var score_Mulan = 0;
var score_Tiana = 0;
function check_q1(){
    if (q1_a1.checked == true){
        score_Belle = score_Belle + 1;
    }
    else if (q1_a2.checked == true) {
        score_Ariel = score_Ariel + 1;
    }
    else if (q1_a3.checked == true){
        score_Mulan = score_Mulan + 1;
    }
    else if (q1_a4.checked == true){
        score_Tiana = score_Tiana + 1;
    }
    else {
        result.innerHTML = "You didn't chose anything";
    }
    check_q2();
}

function calculate_result(){

}
submit_button.addEventListener("click", check_q1);