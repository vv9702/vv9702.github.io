
var mycanvas;
var ctx;
var draw;
var radius;
var lineWidth;

window.onload = function(evt){
    mycanvas = document.querySelector("#mycanvas");
    ctx = mycanvas.getContext("2d");
    draw = false;
    radius = 10;

    ctx.lineWidth = radius * 2;

    mycanvas.addEventListener("mousedown",function(event){
        draw = true;
    });
    mycanvas.addEventListener("mouseup",function(event){
        draw = false;
        ctx.beginPath();
    });
    mycanvas.addEventListener("mousemove",function(event){
        if(!draw) return;
        let loc = this.getBoundingClientRect();
       
        let x = event.clientX - loc.x;
        let y = event.clientY - loc.y;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2* Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x, y);
    });
};

// pen width

var minRad = 5;
var maxRad = 100;
var interval = 1;
var radSpan = document.getElementById("radval");
var decRad = document.getElementById("decrad");
var incRad = document.getElementById("incrad");

var eraser = document.getElementById("eraser");

var setRadius = function(newRadius){
    if(newRadius < minRad)
        newRadius = minRad;
    else if(newRadius > maxRad)
        newRadius = maxRad;
    radius = newRadius;
    ctx.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

decRad.addEventListener("click", function(event){
    setRadius(radius - interval);
});
incRad.addEventListener("click", function(event){
    setRadius(radius + interval);
});

// eraser

eraser.addEventListener("click", function(event){
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#FFFFFF"
});


//colors

var colors = ["black", "grey", "red", "blue" , "green", "yellow", 
                "orange", "indigo", "violet", "pink"];

var swatches = document.getElementsByClassName("swatch");

for(var i=0, n=swatches.length; i<n; i++){
    swatches[i].addEventListener("click", setSwatch);
}

for(var i=0, n=colors.length; i<n; i++){
    var swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener("click", setSwatch);
    document.getElementById("colors").appendChild(swatch);
}

function setColor(color){
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    var active = document.getElementsByClassName("active")[0];

    if(active){
        active.className = "swatch";
    }
}

function setSwatch(event){
    var swatch = event.target;

    setColor(swatch.style.backgroundColor);

    swatch.className += " active";
}

setSwatch({target: document.getElementsByClassName("swatch")[0]});
