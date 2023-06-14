let i = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();


}, 5000)

function nextImage(){
    i++;
    if(i > 4){
        i = 1;
    }
    document.getElementById("radio" + i).checked = true;
}