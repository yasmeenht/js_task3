let fontStyle = document.querySelector('.font-style select');
let fontSize = document.querySelector('.font-size select');
let italic = document.querySelector('#italic');
let bold = document.querySelector('#bold');
let underline = document.querySelector('#underline');


fontStyle.onchange = function(){
    document.querySelector('.text-box').style.fontFamily = fontStyle.value;
}
fontSize.onchange = function(){
    document.querySelector('.text-box').style.fontSize = fontSize.value;
}

italic.onchange = function () {
    if (italic.checked) {
        document.querySelector('.text-box').style.fontStyle = italic.value;
    } else {
        document.querySelector('.text-box').style.fontStyle = "normal";
    }
};

bold.onchange = function(){
    if(bold.checked){
        document.querySelector('.text-box').style.fontWeight = bold.value;
    }
    else{
        document.querySelector('.text-box').style.fontWeight = "normal";
    }
}

underline.onchange = function(){
    if(underline.checked){
        document.querySelector('.text-box').style.textDecoration = underline.value;
    }
    else{
        document.querySelector('.text-box').style.textDecoration = "none";
    }
}