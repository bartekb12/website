let score = 0

function ok() {
    score++
    
    document.getElementById("score").innerText = score
}

function wrong() {
    score--
    document.getElementById("score").innerText = score
}

function createDiv(filename){
    const div = document.createElement("div");
    div.className="gallery";
    if (filename=="mak.jpg"){
        div.addEventListener("click",ok);

    } else{
        div.addEventListener("click",wrong);
    
    }
    const img = document.createElement("img");
    img.src=filename;
    div.appendChild(img);

    document.getElementById("content").appendChild(div);
}


window.ok = ok;
window.wrong = wrong;
window.createDiv = createDiv;