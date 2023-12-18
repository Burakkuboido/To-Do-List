const inputBoxDF = document.getElementById("input-boxDF")
const listContainerDFC = document.getElementById("list-containerDF")
const inputCatDFC = document.getElementById("input-catagoryDF")

function addTaskDF() {
    if(inputBoxDF.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxDF.value;
        li.classList.add("task");
        listContainerDFC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxDF.value = "";
    saveData();
}

function addCatagoryDF() {
    if(inputCatDFC.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatDFC.value;
        listContainerDFC.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatDFC.value = "";  
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
    var y = document.getElementsByClassName("rowDF");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
    saveData();
}








const inputBoxSL = document.getElementById("input-boxSL")
const listContainerSL = document.getElementById("list-containerSL")
const inputCatSL = document.getElementById("input-catagorySL")

function addTaskSL() {
    if(inputBoxSL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxSL.value;
        li.classList.add("task");
        listContainerSL.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxSL.value = "";
    saveData();
}

function addCatagorySL() {
    if(inputCatSL.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatSL.value;
        listContainerSL.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatSL.value = "";  
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
    var y = document.getElementsByClassName("rowSL");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}







const inputBoxBFA = document.getElementById("input-boxBFA")
const listContainerBFA = document.getElementById("list-containerBFA")
const inputCatBFA = document.getElementById("input-catagoryBFA")

function addTaskBFA() {
    if(inputBoxBFA.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBFA.value;
        li.classList.add("task");
        listContainerBFA.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBFA.value = "";
    saveData();
}

function addCatagorySL() {
    if(inputCatSL.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatSL.value;
        listContainerSL.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatSL.value = "";  
    saveData();
}

listContainerBFA.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowBFA");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}




const inputBoxL = document.getElementById("input-boxL")
const listContainerL = document.getElementById("list-containerL")
const inputCatL = document.getElementById("input-catagoryL")

function addTaskL() {
    if(inputBoxL.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxL.value;
        li.classList.add("task");
        listContainerL.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxL.value = "";
    saveData();
}

function addCatagoryL() {
    if(inputCatL.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatL.value;
        listContainerL.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatL.value = "";  
    saveData();
}

listContainerL.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowL");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}










const inputBoxWOD = document.getElementById("input-boxWOD")
const listContainerWOD = document.getElementById("list-containerWOD")
const inputCatWOD = document.getElementById("input-catagoryWOD")

function addTaskWOD() {
    if(inputBoxWOD.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOD.value;
        li.classList.add("task");
        listContainerWOD.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOD.value = "";
    saveData();
}

function addCatagoryWOD() {
    if(inputCatWOD.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatWOD.value;
        listContainerWOD.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatWOD.value = "";  
    saveData();
}

listContainerWOD.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowWOD");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}











const inputBoxMOP = document.getElementById("input-boxMOP")
const listContainerMOP = document.getElementById("list-containerMOP")
const inputCatMOP = document.getElementById("input-catagoryMOP")

function addTaskMOP() {
    if(inputBoxMOP.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxMOP.value;
        li.classList.add("task");
        listContainerMOP.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxMOP.value = "";
    saveData();
}

function addCatagoryMOP() {
    if(inputCatMOP.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatMOP.value;
        listContainerMOP.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatMOP.value = "";  
    saveData();
}

listContainerMOP.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowMOP");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}














const inputBoxC = document.getElementById("input-boxC")
const listContainerC = document.getElementById("list-containerC")
const inputCatC = document.getElementById("input-catagoryC")

function addTaskC() {
    if(inputBoxC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxC.value;
        li.classList.add("task");
        listContainerC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxC.value = "";
    saveData();
}

function addCatagoryC() {
    if(inputCatC.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatC.value;
        listContainerC.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatC.value = "";  
    saveData();
}

listContainerC.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowC");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}



















const inputBoxWOTLK = document.getElementById("input-boxWOTLK")
const listContainerWOTLK = document.getElementById("list-containerWOTLK")
const inputCatWOTLK = document.getElementById("input-catagoryWOTLK")

function addTaskWOTLK() {
    if(inputBoxWOTLK.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxWOTLK.value;
        li.classList.add("task");
        listContainerWOTLK.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxWOTLK.value = "";
    saveData();
}

function addCatagoryWOTLK() {
    if(inputCatWOTLK.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatWOTLK.value;
        listContainerWOTLK.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatWOTLK.value = "";  
    saveData();
}

listContainerWOTLK.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowWOTLK");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}
























const inputBoxBC = document.getElementById("input-boxBC")
const listContainerBC = document.getElementById("list-containerBC")
const inputCatBC = document.getElementById("input-catagoryBC")

function addTaskBC() {
    if(inputBoxBC.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxBC.value;
        li.classList.add("task");
        listContainerBC.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxBC.value = "";
    saveData();
}

function addCatagoryBC() {
    if(inputCatBC.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatBC.value;
        listContainerBC.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatBC.value = "";  
    saveData();
}

listContainerBC.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowBC");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}



















const inputBoxClassic = document.getElementById("input-boxClassic")
const listContainerClassic = document.getElementById("list-containerClassic")
const inputCatClassic = document.getElementById("input-catagoryClassic")

function addTaskClassic() {
    if(inputBoxClassic.value === '') {
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBoxClassic.value;
        li.classList.add("task");
        listContainerClassic.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxClassic.value = "";
    saveData();
}

function addCatagoryClassic() {
    if(inputCatClassic.value === '') {
        alert ("You must write something!");
    } else {
        let header = document.createElement("h5");
        header.innerHTML = inputCatClassic.value;
        listContainerClassic.appendChild(header);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        header.appendChild(span);
    }
    inputCatClassic.value = "";  
    saveData();
}

listContainerClassic.addEventListener("click", function(e) {
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
    var y = document.getElementsByClassName("rowClassic");
    x.classList.toggle('active');
    y[0].classList.toggle('active');
    y[1].classList.toggle('active')
}




function saveData() {
    localStorage.setItem("dataC", listContainerDFC.innerHTML);
    localStorage.setItem("dataC1", listContainerSL.innerHTML);
    localStorage.setItem("dataC2", listContainerBFA.innerHTML);
    localStorage.setItem("dataC3", listContainerL.innerHTML);
    localStorage.setItem("dataC4", listContainerWOD.innerHTML);
    localStorage.setItem("dataC5", listContainerMOP.innerHTML);
    localStorage.setItem("dataC6", listContainerC.innerHTML);
    localStorage.setItem("dataC7", listContainerWOTLK.innerHTML);
    localStorage.setItem("dataC8", listContainerBC.innerHTML);
    localStorage.setItem("dataC9", listContainerClassic.innerHTML);
}

function showTask(){
    listContainerDFC.innerHTML = localStorage.getItem("dataC");
    listContainerSL.innerHTML = localStorage.getItem("dataC1");
    listContainerBFA.innerHTML = localStorage.getItem("dataC2");
    listContainerL.innerHTML = localStorage.getItem("dataC3");
    listContainerWOD.innerHTML = localStorage.getItem("dataC4");
    listContainerMOP.innerHTML = localStorage.getItem("dataC5");
    listContainerC.innerHTML = localStorage.getItem("dataC6");
    listContainerWOTLK.innerHTML = localStorage.getItem("dataC7");
    listContainerBC.innerHTML = localStorage.getItem("dataC8");
    listContainerClassic.innerHTML = localStorage.getItem("dataC9");
}


var input = document.getElementById("input-boxDF");
input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
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



var inputC = document.getElementById("input-catagoryDF");
inputC.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryDF();
    }
});

var inputC1 = document.getElementById("input-catagorySL");
inputC1.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagorySL();
    }
});

var inputC2 = document.getElementById("input-catagoryBFA");
inputC2.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryBFA();
    }
});

var inputC3 = document.getElementById("input-catagoryL");
inputC3.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryL();
    }
});

var inputC4 = document.getElementById("input-catagoryWOD");
inputC4.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryWOD();
    }
});

var inputC5 = document.getElementById("input-catagoryMOP");
inputC5.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryMOP();
    }
});

var inputC6 = document.getElementById("input-catagoryC");
inputC6.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryC();
    }
});

var inputC7 = document.getElementById("input-catagoryWOTLK");
inputC7.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryWOTLK();
    }
});

var inputC8 = document.getElementById("input-catagoryBC");
inputC8.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryBC();
    }
});

var inputC9 = document.getElementById("input-catagoryClassic");
inputC9.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addCatagoryClassic();
    }
});





setInterval(getListElements, 1000)
setInterval(getTasks, 100)

function getTasks() {
    var tasks = document.getElementsByClassName("task");
    var taskAmount = document.getElementById("taskAmount");
    var checked = document.getElementsByClassName("checked")
    

    taskAmount.innerHTML = checked.length + " / " + tasks.length;
}



function getListElements(){
  var li = listContainerDFC.getElementsByTagName("li");
  for (let x = 0; x < li.length; x++) {
    li[x].onmousedown = pickItem;
    li[x].onmouseover = moveItem;
  }
  var lo = listContainerSL.getElementsByTagName("li");
  for (let y = 0; y < lo.length; y++) {
    lo[y].onmousedown = pickItem;
    lo[y].onmouseover = moveItem;
  }
  var le = listContainerBFA.getElementsByTagName("li");
  for (let z = 0; z < le.length; z++) {
    le[z].onmousedown = pickItem;
    le[z].onmouseover = moveItem;
  }
  var L = listContainerL.getElementsByTagName("li");
  for (let l = 0; l < L.length; l++) {
    L[l].onmousedown = pickItem;
    L[l].onmouseover = moveItem;
  }
  var wod = listContainerWOD.getElementsByTagName("li");
  for (let w = 0; w < wod.length; w++) {
    wod[w].onmousedown = pickItem;
    wod[w].onmouseover = moveItem;
  }
  var mop = listContainerMOP.getElementsByTagName("li");
  for (let m = 0; m < mop.length; m++) {
    mop[m].onmousedown = pickItem;
    mop[m].onmouseover = moveItem;
  }
  var c = listContainerC.getElementsByTagName("li");
  for (let u = 0; u < c.length; u++) {
    c[u].onmousedown = pickItem;
    c[u].onmouseover = moveItem;
  }
  var wotlk = listContainerWOTLK.getElementsByTagName("li");
  for (let o = 0; o < wotlk.length; o++) {
    wotlk[o].onmousedown = pickItem;
    wotlk[o].onmouseover = moveItem;
  }
  var bc = listContainerBC.getElementsByTagName("li");
  for (let t = 0; t < bc.length; t++) {
    bc[t].onmousedown = pickItem;
    bc[t].onmouseover = moveItem;
  }
  var classic = listContainerClassic.getElementsByTagName("li");
  for (let classi = 0; classi < classic.length; classi++) {
    classic[classi].onmousedown = pickItem;
    classic[classi].onmouseover = moveItem;
  }
  var h5 = listContainerDFC.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerSL.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerBFA.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerL.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerWOD.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerMOP.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerC.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerWOTLK.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerBC.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
  }
  var h5 = listContainerClassic.getElementsByTagName("h5");
  for (let x = 0; x < h5.length; x++) {
    h5[x].onmousedown = pickItem;
    h5[x].onmouseover = moveItem;
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