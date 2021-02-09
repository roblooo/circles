canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(120,100,50,0,360);
ctx.stroke()
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){

    mouse_x = e.clientX -canvas.offsetLeft ; mouse_y = e.clientY - canvas.offsetTop;
mycircle(mouse_x,mouse_y);

}
function mycircle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(mouse_x,mouse_y,50,0,360);
ctx.stroke()
}