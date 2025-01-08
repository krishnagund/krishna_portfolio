function scrolltop() {
    window.scrollTo(0, 0);
}

function darkmode(){
    const wasdarkmode=localStorage.getItem('darkmode')==='true';;
    localStorage.setItem('darkmode',!wasdarkmode);
    const element=document.body;
    element.classList.toggle('dark-mode',!wasdarkmode);
    icon.classList.toggle('fa-times')
    
}
function iconchange(icon){
    icon.classList.toggle("uil-brightness");
}
function onload(){
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode')==='true');
}
var loader = document.getElementById("loaderr");
window.addEventListener("load",function(){
    loader.style.display ="none"
})
