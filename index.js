function onclick(event){
    const myElement = event.target.parentElement.parentElement.nextElementSibling.children[0];
    if(
    myElement.style.visibility == "hidden"
    ){
        myElement.style.visibility = "visible"
    }else{
        myElement.style.visibility = "hidden"
    }
}

document.getElementById("button2").addEventListener("click",onclick);
document.getElementById("button1").addEventListener("click",onclick);
document.getElementById("button3").addEventListener("click",onclick);
document.getElementById("button4").addEventListener("click",onclick);
document.getElementById("button5").addEventListener("click",onclick);
console.log(elle);