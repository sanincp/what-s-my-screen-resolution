function hello(){
    var width = screen.width;
    var height = screen.height;
    document.getElementById("width").innerHTML = width;
    document.getElementById("height").innerHTML = height;
}
function copybtn(){
    navigator.clipboard.writeText(screen.width+"*"+screen.height);
}