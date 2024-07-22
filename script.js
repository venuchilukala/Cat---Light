function switchOff(){
    document.getElementById("bulbImage").src = "Assets/bulb-go-off-img.png"
    document.getElementById("catImage").src = "Assets/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent = "Switched OFF"
    document.getElementById("onSwitch").style.backgroundColor = "#118c3e"
    document.getElementById("offSwitch").style.backgroundColor = "#babfc3"   
}

function switchOn(){
    document.getElementById("bulbImage").src = "Assets/bulb-go-on-img.png"
    document.getElementById("catImage").src = "Assets/cat-img.png"
    document.getElementById("switchStatus").textContent = "Switched ON"
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39"
    document.getElementById("onSwitch").style.backgroundColor = "#babfc3"
}