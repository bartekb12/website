import {data} from "./data.js"
let score = 0;

function ok() {
    score++
    
    document.getElementById("score").innerText = score
    quiz();
}

function wrong() {
    score--
    document.getElementById("score").innerText = score
}

function createDiv(filename, okname){
    const div = document.createElement("div");
    div.className="gallery";
    if (filename==okname){
        div.addEventListener("click",ok);

    } else{
        div.addEventListener("click",wrong);
    
    }
    const img = document.createElement("img");
    img.src=filename;
    div.appendChild(img);

    document.getElementById("content").appendChild(div);
}
function randomPicture() {
    return data[Math.floor(Math.random()*data.length)];
}

function quiz() {
    document.getElementById("content").innerHTML=""
    const picture = randomPicture();
    document.getElementById("question").innerText="Pokaż gdzie jest "+picture.title
    console.dir(picture);
    for (let i=0; i<data.length; ++i) {
        createDiv(data[i].file, picture.file);
    }
}

quiz();
window.ok = ok;
window.wrong = wrong;
window.createDiv = createDiv;
window.quiz = quiz;