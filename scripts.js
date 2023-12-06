const inputBoxDF = document.getElementById("input-boxDF")
const listContainerDF = document.getElementById("list-containerDF")

function addTaskDF() {
    if(inputBoxDF.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxDF.value;
        listContainerDF.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxDF.value = "";
    saveData();
}

listContainerDF.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function toggleDF() {
    var x = document.getElementById("list-containerDF");
    var y = document.getElementById("rowDF");
    x.classList.toggle('active');
    y.classList.toggle('active');
    saveData();
}








const inputBoxSL = document.getElementById("input-boxSL")
const listContainerSL = document.getElementById("list-containerSL")

function addTaskSL() {
    if(inputBoxSL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxSL.value;
        listContainerSL.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxSL.value = "";
    saveData();
}

listContainerSL.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleSL() {
    var x = document.getElementById("list-containerSL");
    var y = document.getElementById("rowSL");
    x.classList.toggle('active');
    y.classList.toggle('active')
}

const tabName = document.getElementById("tabName");
const daily = document.getElementById("dailyTab")
if (tabName.innerHTML === "Daily") {
    daily.style.borderBottom = "0px solid white";
    daily.style.backgroundColor = "white"
}
showTask();



function saveData() {
    localStorage.setItem("data", listContainerDF.innerHTML);
    localStorage.setItem("data1", listContainerSL.innerHTML)
}

function showTask(){
    listContainerDF.innerHTML = localStorage.getItem("data")
    listContainerSL.innerHTML = localStorage.getItem("data1")
}