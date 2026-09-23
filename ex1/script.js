let usersName = document.getElementsByTagName('input')[0];
let button = document.querySelector('button');
let order = document.getElementById('order');
button.onclick = function(){
    document.getElementsByClassName('name')[0].innerHTML = usersName.value;
    document.getElementsByClassName('order')[0].innerHTML = order.value;
    document.querySelector('.main').style.display = "none";
    document.querySelector('.result').style.display = "block";
}

button.onmouseover = function(){
    button.style.background = "#B85C38";
    button.style.color = "white";
}

button.onmouseout = function(){
    button.style.background = "";
    button.style.color = "";
}