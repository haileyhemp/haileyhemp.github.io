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


var q2_a1 = document.getElementById("q2-a1");
var q2_a1 = document.getElementById("q2-a2");
var q2_a1 = document.getElementById("q2-a3");
var q2_a1 = document.getElementById("q2-a4");

var result = document.getElementById("result");
var submit_button = document.getElementById("submit-button");

var score_Teal = 0;
var score_Green = 0;
var score_Yellow = 0;
var score_Red = 0;
function check_q2(){
    if (q2_a1.checked == true){
        score_Teal = score_Teal + 1;
    }
    else if (q2_a2.checked == true) {
        score_Green = score_Green + 1;
    }
    else if (q2_a3.checked == true){
        score_Yellow = score_Yellow + 1;
    }
    else if (q2_a4.checked == true){
        score_Red = score_Red + 1;
    }
    else {
        result.innerHTML = "You didn't chose anything";
    }
    check_q3();
}

function calculate_result(){

}
submit_button.addEventListener("click", check_q2);

var q3_a1 = document.getElementById("q3-a1");
var q3_a1 = document.getElementById("q3-a2");
var q3_a1 = document.getElementById("q3-a3");
var q3_a1 = document.getElementById("q3-a4");

var result = document.getElementById("result");
var submit_button = document.getElementById("submit-button");

var score_Dragon = 0;
var score_Horse = 0;
var score_Frog = 0;
var score_Fish = 0;
function check_q2(){
    if (q3_a1.checked == true){
        score_Dragon = score_Dragon + 1;
    }
    else if (q3_a2.checked == true) {
        score_Horse = score_Horse + 1;
    }
    else if (q3_a3.checked == true){
        score_Frog = score_Frog + 1;
    }
    else if (q3_a4.checked == true){
        score_Fish = score_Fish + 1;
    }
    else {
        result.innerHTML = "You didn't chose anything";
    }
    check_q3();
}

function calculate_result(){

}
submit_button.addEventListener("click", check_q2);

function calculate_result() {
    let maxkey = "";
    let maxvalue = -Infinity;
    
for (const [key, value] of Object.entries(result)) {
      if (value > maxvalue){
            maxvalue = value;
            maxkey = key;
        }
    }
    if (maxkey == "score_Ariel") {

    }
    if (maxkey == "score_Tiana"){

    }
    if (maxkey == "score_Mulan") {

    }
    if (maxkey == "score_Belle"){

    }
}