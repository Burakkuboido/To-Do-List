const inputBoxDF = document.getElementById("input-boxDF")
const listContainerDFC = document.getElementById("list-containerDF")

function addTaskDF() {
    if(inputBoxDF.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxDF.value;
        listContainerDFC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxDF.value = "";
    saveData();
}

listContainerDFC.addEventListener("click", function(e) {
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
const listContainerSLC = document.getElementById("list-containerSL")

function addTaskSL() {
    if(inputBoxSL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxSL.value;
        listContainerSLC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxSL.value = "";
    saveData();
}

listContainerSLC.addEventListener("click", function(e) {
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





const inputBoxBFA = document.getElementById("input-boxBFA")
const listContainerBFAC = document.getElementById("list-containerBFA")

function addTaskBFA() {
    if(inputBoxBFA.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBFA.value;
        listContainerBFAC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBFA.value = "";
    saveData();
}

listContainerBFAC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleBFA() {
    var x = document.getElementById("list-containerBFA");
    var y = document.getElementById("rowBFA");
    x.classList.toggle('active');
    y.classList.toggle('active')
}




const inputBoxL = document.getElementById("input-boxL")
const listContainerLC = document.getElementById("list-containerL")

function addTaskL() {
    if(inputBoxL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxL.value;
        listContainerLC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxL.value = "";
    saveData();
}

listContainerLC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleL() {
    var x = document.getElementById("list-containerL");
    var y = document.getElementById("rowL");
    x.classList.toggle('active');
    y.classList.toggle('active')
}










const inputBoxWOD = document.getElementById("input-boxWOD")
const listContainerWODC = document.getElementById("list-containerWOD")

function addTaskWOD() {
    if(inputBoxWOD.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOD.value;
        listContainerWODC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOD.value = "";
    saveData();
}

listContainerWODC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleWOD() {
    var x = document.getElementById("list-containerWOD");
    var y = document.getElementById("rowWOD");
    x.classList.toggle('active');
    y.classList.toggle('active')
}











const inputBoxMOP = document.getElementById("input-boxMOP")
const listContainerMOPC = document.getElementById("list-containerMOP")

function addTaskMOP() {
    if(inputBoxMOP.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxMOP.value;
        listContainerMOPC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxMOP.value = "";
    saveData();
}

listContainerMOPC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleMOP() {
    var x = document.getElementById("list-containerMOP");
    var y = document.getElementById("rowMOP");
    x.classList.toggle('active');
    y.classList.toggle('active')
}














const inputBoxC = document.getElementById("input-boxC")
const listContainerCC = document.getElementById("list-containerC")

function addTaskC() {
    if(inputBoxC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxC.value;
        listContainerCC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxC.value = "";
    saveData();
}

listContainerCC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleC() {
    var x = document.getElementById("list-containerC");
    var y = document.getElementById("rowC");
    x.classList.toggle('active');
    y.classList.toggle('active')
}



















const inputBoxWOTLK = document.getElementById("input-boxWOTLK")
const listContainerWOTLKC = document.getElementById("list-containerWOTLK")

function addTaskWOTLK() {
    if(inputBoxWOTLK.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOTLK.value;
        listContainerWOTLKC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOTLK.value = "";
    saveData();
}

listContainerWOTLKC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleWOTLK() {
    var x = document.getElementById("list-containerWOTLK");
    var y = document.getElementById("rowWOTLK");
    x.classList.toggle('active');
    y.classList.toggle('active')
}
























const inputBoxBC = document.getElementById("input-boxBC")
const listContainerBCC = document.getElementById("list-containerBC")

function addTaskBC() {
    if(inputBoxBC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBC.value;
        listContainerBCC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBC.value = "";
    saveData();
}

listContainerBCC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleBC() {
    var x = document.getElementById("list-containerBC");
    var y = document.getElementById("rowBC");
    x.classList.toggle('active');
    y.classList.toggle('active')
}



















const inputBoxClassic = document.getElementById("input-boxClassic")
const listContainerClassicC = document.getElementById("list-containerClassic")

function addTaskClassic() {
    if(inputBoxClassic.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxClassic.value;
        listContainerClassicC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxClassic.value = "";
    saveData();
}

listContainerClassicC.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function toggleClassic() {
    var x = document.getElementById("list-containerClassic");
    var y = document.getElementById("rowClassic");
    x.classList.toggle('active');
    y.classList.toggle('active')
}




function saveData() {
    localStorage.setItem("dataC", listContainerDFC.innerHTML);
    localStorage.setItem("dataC1", listContainerSLC.innerHTML);
    localStorage.setItem("dataC2", listContainerBFAC.innerHTML);
    localStorage.setItem("dataC3", listContainerLC.innerHTML);
    localStorage.setItem("dataC4", listContainerWODC.innerHTML);
    localStorage.setItem("dataC5", listContainerMOPC.innerHTML);
    localStorage.setItem("dataC6", listContainerCC.innerHTML);
    localStorage.setItem("dataC7", listContainerWOTLKC.innerHTML);
    localStorage.setItem("dataC8", listContainerBCC.innerHTML);
    localStorage.setItem("dataC9", listContainerClassicC.innerHTML);
}

function showTask(){
    listContainerDFC.innerHTML = localStorage.getItem("dataC");
    listContainerSLC.innerHTML = localStorage.getItem("dataC1");
    listContainerBFAC.innerHTML = localStorage.getItem("dataC2");
    listContainerLC.innerHTML = localStorage.getItem("dataC3");
    listContainerWODC.innerHTML = localStorage.getItem("dataC4");
    listContainerMOPC.innerHTML = localStorage.getItem("dataC5");
    listContainerCC.innerHTML = localStorage.getItem("dataC6");
    listContainerWOTLKC.innerHTML = localStorage.getItem("dataC7");
    listContainerBCC.innerHTML = localStorage.getItem("dataC8");
    listContainerClassicC.innerHTML = localStorage.getItem("dataC9");
}


var input = document.getElementById("input-boxDF");
input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        console.log()
        addTaskDF();
    }
});

var input2 = document.getElementById("input-boxSL");
input2.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskSL();
    }
});

var input3 = document.getElementById("input-boxBFA");
input3.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskBFA();
    }
});

var input4 = document.getElementById("input-boxL");
input4.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskL();
    }
});

var input5 = document.getElementById("input-boxWOD");
input5.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskWOD();
    }
});

var input6 = document.getElementById("input-boxMOP");
input6.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskMOP();
    }
});

var input7 = document.getElementById("input-boxC");
input7.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskC();
    }
});

var input8 = document.getElementById("input-boxWOTLK");
input8.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskWOTLK();
    }
});

var input9 = document.getElementById("input-boxBC");
input9.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskBC();
    }
});

var input10 = document.getElementById("input-boxClassic");
input10.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTaskClassic();
    }
});






setInterval(getListElements, 1000)



function getListElements(){
  var li = listContainerDFC.getElementsByTagName("li");
  for (let x = 0; x < li.length; x++) {
    li[x].onmousedown = pickItem;
    li[x].onmouseover = moveItem;
  }
  var lo = listContainerSLC.getElementsByTagName("li");
  for (let y = 0; y < lo.length; y++) {
    lo[y].onmousedown = pickItem;
    lo[y].onmouseover = moveItem;
  }
  var le = listContainerBFAC.getElementsByTagName("li");
  for (let z = 0; z < le.length; z++) {
    le[z].onmousedown = pickItem;
    le[z].onmouseover = moveItem;
  }
  var L = listContainerLC.getElementsByTagName("li");
  for (let l = 0; l < L.length; l++) {
    L[l].onmousedown = pickItem;
    L[l].onmouseover = moveItem;
  }
  var wod = listContainerWODC.getElementsByTagName("li");
  for (let w = 0; w < wod.length; w++) {
    wod[w].onmousedown = pickItem;
    wod[w].onmouseover = moveItem;
  }
  var mop = listContainerMOPC.getElementsByTagName("li");
  for (let m = 0; m < mop.length; m++) {
    mop[m].onmousedown = pickItem;
    mop[m].onmouseover = moveItem;
  }
  var c = listContainerCC.getElementsByTagName("li");
  for (let u = 0; u < c.length; u++) {
    c[u].onmousedown = pickItem;
    c[u].onmouseover = moveItem;
  }
  var wotlk = listContainerWOTLKC.getElementsByTagName("li");
  for (let o = 0; o < wotlk.length; o++) {
    wotlk[o].onmousedown = pickItem;
    wotlk[o].onmouseover = moveItem;
  }
  var bc = listContainerBCC.getElementsByTagName("li");
  for (let t = 0; t < bc.length; t++) {
    bc[t].onmousedown = pickItem;
    bc[t].onmouseover = moveItem;
  }
  var classic = listContainerClassicC.getElementsByTagName("li");
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