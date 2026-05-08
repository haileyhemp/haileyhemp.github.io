var lootbox = document.getElementById("lootbox");

var uncommon = document.getElementById("uncommon");
var u_count = 0;

var rare = document.getElementById("rare");
var r_count = 0;

var legendary = document.getElementById("legendary");
var l_count = 0;

var mythic = document.getElementById("mythic");
var m_count = 0;

function rollLootbox(){
    number = Math.floor(Math.random() * 100);

    if (number < 50) {
        lootbox.innerHTML = "COMMON";
        lootbox.style.backgroundColor = "white";
        c_count = c_count + 1;
        common.innerHTML = c_count
    }

    else if (number < 75) {
        lootbox.innerHTML = "UNCOMMON";
        lootbox.style.backgroundColor = "blue";
        u_count = u_count + 1;
        uncommon.innerHTML = u_count
    }

    else if (number < 90) {
        lootbox.innerHTML = "RARE";
        lootbox.style.backgroundColor = "gold";
        r_count = r_count + 1;
        rare.innerHTML = r_count
    }

    else if (number < 99) {
        lootbox.innerHTML = "LEGENDARY";
        lootbox.style.backgroundColor = "orangered";
        l_count = l_count + 1;
        legendary.innerHTML = l_count
    }

    else {
        lootbox.innerHTML = "MYTHIC";
        lootbox.style.backgroundColor = "pink";
        m_count = m_count + 1;
        mythic.innerHTML = m_count
    }
}

document.getElementById("roll"),addEventListener("click", rollLootbox);
