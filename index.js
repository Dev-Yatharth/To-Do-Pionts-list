const inputBox = document.getElementById("ibox")
const list = document.getElementById("list")

function addTask(){
    if(inputBox.value === '')
         alert("You must write something!")
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}
list.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        if(document.body.classList.contains("dark-theme")){
            document.getElementById("list").style.color = "#fff";
        }else{
            document.getElementById("list").style.color = "#000000";
        }
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
      localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();

var icon = document.getElementById("cicon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png"
        document.getElementById("list").style.color = "#fff";
    }else{
        icon.src = "moon.png"
        document.getElementById("list").style.color = "#000000";
    }
}