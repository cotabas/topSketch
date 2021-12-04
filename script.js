const container = document.getElementById('container');
const butt = document.getElementById('shake');
const cover = document.getElementById('cover');
const canRange = document.getElementById('canRange');

let canvas = [];

drawCanvas(canRange.value);
function drawCanvas (can) {
    container.style.gridTemplateColumns = "repeat(" + (can - 1) +", 1fr)";
    container.style.gridTemplateRows = "repeat(" + (can - 1) +", 1fr)";
    canvas = [];
    for (let x = 1; x < can; x++) {
        for (let y = 1; y < can; y++) {
                window["canvasObject" + x + "x" + y] = {
                    name: String("canvas" + x + "x" + y),
                    x,
                    y,
                    shade: 0
                };
                canvas.push("canvasObject" + x + "x" + y);
                window["canvasObject" + x + "x" + y].name = document.createElement('div');
                container.appendChild(window["canvasObject" + x + "x" + y].name);
                window["canvasObject" + x + "x" + y].name.style["grid-row"] = x;
                window["canvasObject" + x + "x" + y].name.style["grid-column"] = y;
                window["canvasObject" + x + "x" + y].name.setAttribute("id", String("canvasObject" + x + "x" + y));
            
        }
    }
    for (let i = 1; i < can; i++) {
        window["canvasObject1x" + i].shade = 1;
        setShade("canvasObject1x" + i);
        window["canvasObject" + i + "x1"].shade = 1;
        setShade("canvasObject" + i + "x1");
        window["canvasObject" + i + "x" + (can - 1)].shade = 1;
        setShade("canvasObject" + i + "x" + (can - 1));
        window["canvasObject" + (can - 1) + "x" + i].shade = 1;
        setShade("canvasObject" + (can - 1) + "x" + i);
    }
}



//canRange.onmouseup = () => drawCanvas(canRange.value);


butt.onclick = () => {
    canvas.forEach(function(each) {
        window[each].shade = 0;
        setShade(each);      
    });
    drawCanvas(canRange.value);
}

document.addEventListener("mousedown", hideCover);
document.addEventListener("mouseup", showCover)
function hideCover () {
    cover.style.visibility = "hidden";
}
function showCover() {
    cover.style.visibility ="visible";
}


container.onmouseover = function(event) {
    let target = event.target;
    if (target != container) {
        window[target.id].shade += .3;
        setShade(target.id);
    }
}


function setShade(name) {   
    window[name].name.style['background-color'] = "rgb(0, 0, 0," + window[name].shade;
}