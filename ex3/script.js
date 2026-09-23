makeCircle = document.querySelector('.circle button');
makeSquare = document.querySelector('.square button');


makeCircle.onclick = function(){
    document.querySelector('.img img').style.borderRadius = "50%";
}

makeSquare.onclick = function(){
    document.querySelector('.img img').style.borderRadius = "0%";
}
