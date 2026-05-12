username_entry = document.getElementById("username");
password_entry = document.getElementById("password");
submit_button = document.getElementById("submit");
status_text = document.getElementById("status-text");

function checkCredentials(){
    if (username_entry.value == "stitchlover07" && password_entry.value == "liloandstitch"){
        status_text.innerHTML = "ACCESS GRANTED";
        status_text.style.color = "limegreen";
    }
    else {
        status_tect.innterHTML = "ACCESS DENIED";
        status_text.style.color = "red";
    }
}
submit_button.addEventListener("click", checkCredentials);