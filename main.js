const inputKey = document.getElementById("inputKey");
const inputVal = document.getElementById("inputVal");
const output = document.getElementById("output");
const inputRemove = document.getElementById("inputRemove");

function insertData() {
    const key = inputKey.value;
    const value = inputVal.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += key + " : " + "<a target=_blank href=" + value + ">" + value + '<br><br>';
}

function delData() {
    const key = inputRemove.value;

    if (key in localStorage) {
        localStorage.removeItem(key);
        location.reload();
    }
};

function clearAll() {
    localStorage.clear();
    location.reload();
};