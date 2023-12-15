const inputBoxDF = document.getElementById("input-boxDF")
const listContainerDFW = document.getElementById("list-containerDF")

function addTaskDFW() {
    if(inputBoxDF.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxDF.value;
        listContainerDFW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxDF.value = "";
    saveData();
}

listContainerDFW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function toggleDFW() {
    var x = document.getElementById("list-containerDF");
    var y = document.getElementById("rowDF");
    x.classList.toggle('active');
    y.classList.toggle('active');
    saveData();
}








const inputBoxSL = document.getElementById("input-boxSL")
const listContainerSLW = document.getElementById("list-containerSL")

function addTaskSLW() {
    if(inputBoxSL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxSL.value;
        listContainerSLW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxSL.value = "";
    saveData();
}

listContainerSLW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleSLW() {
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




const inputBoxBFA = document.getElementById("input-boxBFA")
const listContainerBFAW = document.getElementById("list-containerBFA")

function addTaskBFAW() {
    if(inputBoxBFA.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBFA.value;
        listContainerBFAW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBFA.value = "";
    saveData();
}

listContainerBFAW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleBFAW() {
    var x = document.getElementById("list-containerBFA");
    var y = document.getElementById("rowBFA");
    x.classList.toggle('active');
    y.classList.toggle('active')
}




const inputBoxL = document.getElementById("input-boxL")
const listContainerLW = document.getElementById("list-containerL")

function addTaskLW() {
    if(inputBoxL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxL.value;
        listContainerLW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxL.value = "";
    saveData();
}

listContainerLW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleLW() {
    var x = document.getElementById("list-containerL");
    var y = document.getElementById("rowL");
    x.classList.toggle('active');
    y.classList.toggle('active')
}










const inputBoxWOD = document.getElementById("input-boxWOD")
const listContainerWODW = document.getElementById("list-containerWOD")

function addTaskWODW() {
    if(inputBoxWOD.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOD.value;
        listContainerWODW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOD.value = "";
    saveData();
}

listContainerWODW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleWODW() {
    var x = document.getElementById("list-containerWOD");
    var y = document.getElementById("rowWOD");
    x.classList.toggle('active');
    y.classList.toggle('active')
}











const inputBoxMOP = document.getElementById("input-boxMOP")
const listContainerMOPW = document.getElementById("list-containerMOP")

function addTaskMOPW() {
    if(inputBoxMOP.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxMOP.value;
        listContainerMOPW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxMOP.value = "";
    saveData();
}

listContainerMOPW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleMOPW() {
    var x = document.getElementById("list-containerMOP");
    var y = document.getElementById("rowMOP");
    x.classList.toggle('active');
    y.classList.toggle('active')
}














const inputBoxC = document.getElementById("input-boxC")
const listContainerCW = document.getElementById("list-containerC")

function addTaskCW() {
    if(inputBoxC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxC.value;
        listContainerCW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxC.value = "";
    saveData();
}

listContainerCW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleCW() {
    var x = document.getElementById("list-containerC");
    var y = document.getElementById("rowC");
    x.classList.toggle('active');
    y.classList.toggle('active')
}



















const inputBoxWOTLK = document.getElementById("input-boxWOTLK")
const listContainerWOTLKW = document.getElementById("list-containerWOTLK")

function addTaskWOTLKW() {
    if(inputBoxWOTLK.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOTLK.value;
        listContainerWOTLKW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOTLK.value = "";
    saveData();
}

listContainerWOTLKW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleWOTLKW() {
    var x = document.getElementById("list-containerWOTLK");
    var y = document.getElementById("rowWOTLK");
    x.classList.toggle('active');
    y.classList.toggle('active')
}
























const inputBoxBC = document.getElementById("input-boxBC")
const listContainerBCW = document.getElementById("list-containerBC")

function addTaskBCW() {
    if(inputBoxBC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBC.value;
        listContainerBCW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBC.value = "";
    saveData();
}

listContainerBCW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleBCW() {
    var x = document.getElementById("list-containerBC");
    var y = document.getElementById("rowBC");
    x.classList.toggle('active');
    y.classList.toggle('active')
}



















const inputBoxClassic = document.getElementById("input-boxClassic")
const listContainerClassicW = document.getElementById("list-containerClassic")

function addTaskClassicW() {
    if(inputBoxClassic.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxClassic.value;
        listContainerClassicW.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxClassic.value = "";
    saveData();
}

listContainerClassicW.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleClassicW() {
    var x = document.getElementById("list-containerClassic");
    var y = document.getElementById("rowClassic");
    x.classList.toggle('active');
    y.classList.toggle('active')
}




function saveData() {
    localStorage.setItem("dataW1", listContainerSLW.innerHTML);
    localStorage.setItem("dataW2", listContainerBFAW.innerHTML);
    localStorage.setItem("dataW3", listContainerLW.innerHTML);
    localStorage.setItem("dataW4", listContainerWODW.innerHTML);
    localStorage.setItem("dataW5", listContainerMOPW.innerHTML);
    localStorage.setItem("dataW6", listContainerCW.innerHTML);
    localStorage.setItem("dataW7", listContainerWOTLKW.innerHTML);
    localStorage.setItem("dataW8", listContainerBCW.innerHTML);
    localStorage.setItem("dataW9", listContainerClassicW.innerHTML);

    localStorage.setItem("dataW", listContainerDFW.innerHTML);
}

function showTask(){
    listContainerSLW.innerHTML = localStorage.getItem("dataW1");
    listContainerBFAW.innerHTML = localStorage.getItem("dataW2");
    listContainerLW.innerHTML = localStorage.getItem("dataW3");
    listContainerWODW.innerHTML = localStorage.getItem("dataW4");
    listContainerMOPW.innerHTML = localStorage.getItem("dataW5");
    listContainerCW.innerHTML = localStorage.getItem("dataW6");
    listContainerWOTLKW.innerHTML = localStorage.getItem("dataW7");
    listContainerBCW.innerHTML = localStorage.getItem("dataW8");
    listContainerClassicW.innerHTML = localStorage.getItem("dataW9");

    listContainerDFW.innerHTML = localStorage.getItem("dataW");
}


var input = document.getElementById("input-boxDF");
input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskDFW();
    }
});

var input2 = document.getElementById("input-boxSL");
input2.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskSLW();
    }
});

var input3 = document.getElementById("input-boxBFA");
input3.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskBFAW();
    }
});

var input4 = document.getElementById("input-boxL");
input4.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskLW();
    }
});

var input5 = document.getElementById("input-boxWOD");
input5.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskWODW();
    }
});

var input6 = document.getElementById("input-boxMOP");
input6.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskMOPW();
    }
});

var input7 = document.getElementById("input-boxC");
input7.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskCW();
    }
});

var input8 = document.getElementById("input-boxWOTLK");
input8.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskWOTLKW();
    }
});

var input9 = document.getElementById("input-boxBC");
input9.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskBCW();
    }
});

var input10 = document.getElementById("input-boxClassic");
input10.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskClassicW();
    }
});






setInterval(getListElements, 1000)



function getListElements(){
  var li = listContainerDFW.getElementsByTagName("li");
  for (let x = 0; x < li.length; x++) {
    li[x].onmousedown = pickItem;
    li[x].onmouseover = moveItem;
  }
  var lo = listContainerSLW.getElementsByTagName("li");
  for (let y = 0; y < lo.length; y++) {
    lo[y].onmousedown = pickItem;
    lo[y].onmouseover = moveItem;
  }
  var le = listContainerBFAW.getElementsByTagName("li");
  for (let z = 0; z < le.length; z++) {
    le[z].onmousedown = pickItem;
    le[z].onmouseover = moveItem;
  }
  var L = listContainerLW.getElementsByTagName("li");
  for (let l = 0; l < L.length; l++) {
    L[l].onmousedown = pickItem;
    L[l].onmouseover = moveItem;
  }
  var wod = listContainerWODW.getElementsByTagName("li");
  for (let w = 0; w < wod.length; w++) {
    wod[w].onmousedown = pickItem;
    wod[w].onmouseover = moveItem;
  }
  var mop = listContainerMOPW.getElementsByTagName("li");
  for (let m = 0; m < mop.length; m++) {
    mop[m].onmousedown = pickItem;
    mop[m].onmouseover = moveItem;
  }
  var c = listContainerCW.getElementsByTagName("li");
  for (let u = 0; u < c.length; u++) {
    c[u].onmousedown = pickItem;
    c[u].onmouseover = moveItem;
  }
  var wotlk = listContainerWOTLKW.getElementsByTagName("li");
  for (let o = 0; o < wotlk.length; o++) {
    wotlk[o].onmousedown = pickItem;
    wotlk[o].onmouseover = moveItem;
  }
  var bc = listContainerBCW.getElementsByTagName("li");
  for (let t = 0; t < bc.length; t++) {
    bc[t].onmousedown = pickItem;
    bc[t].onmouseover = moveItem;
  }
  var classic = listContainerClassicW.getElementsByTagName("li");
  for (let classi = 0; classi < classic.length; classi++) {
    classic[classi].onmousedown = pickItem;
    classic[classi].onmouseover = moveItem;
  }
}

//// Get the list items inside of the dragable list

//// Item to move
var pick;
//// Where to drop item
var target;
//// Save CSS style of picked up item
var lastStyle;
// END VARIABLES //

// Add an event listener to each item in the draggableList


// Moves the item
function moveItem () {
  target = this
  target.location = event.clientY;
  if(pick)
    if(pick.location > target.location) // Insert before if moving up
      target.parentNode.insertBefore(pick, target)
    else  // Insert after if moving down
      target.parentNode.insertBefore(pick, target.nextSibling)
}
 
// Selects the item to move
function pickItem () {
  pick = this;
  lastStyle = pick.style;
  // Used to see if moving up or down the list
  pick.location = event.clientY;  
  
  // Stop text from being selected when dragging
  document.body.classList.add("noSelect");
  
  // Adds an event to the DOM when an item is picked up
  document.onmouseup = dropItem;
}

// Places the item and clears the pick and event listeners
function dropItem () {
  pick.style = lastStyle;
  pick = '';
  document.body.classList.remove("noSelect");
  document.removeEventListener("onmouseup", dropItem)
}
showTask();