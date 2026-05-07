var lootbox = document.getElementById("lootbox");

function rollLootbox(){
    number = Math.floor(Math.random() * 100);

    if (number < 50) {
        lootbox.innerHTML = "COMMON";
        lootbox.style.backgroundColor = "white";
    }

    else if (number < 75) {
        lootbox.innerHTML = "UNCOMMON";
        lootbox.style.backgroundColor = "blue";
    }

    else if (number < 90) {
        lootbox.innerHTML = "RARE";
        lootbox.style.backgroundColor = "gold";
    }

    else if (number < 99) {
        lootbox.innerHTML = "LEGENDARY";
        lootbox.style.backgroundColor = "orangered";
    }

    else {
        lootbox.innerHTML = "MYTHIC";
        lootbox.style.backgroundColor = "pink";
    }
}

document.getElementById("roll"),addEventListener("click", rollLootbox);

function counterc(){
    number = Math.floor(Math.random() * 100);

    count = count + 1;
    document.getElementById("common").innerHTML = count;
}
document.getElementById("common"),addEventListener("clicl", counterc);