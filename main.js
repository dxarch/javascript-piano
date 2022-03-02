document.addEventListener("keydown", function(e){
    let audio;
    switch (e.code){
        case "KeyA":
            audio = new Audio("sounds/A.mp3");
            break;
        case "KeyS":
            audio = new Audio("sounds/S.mp3");
            break;
        case "KeyD":
            audio = new Audio("sounds/D.mp3");
            break;
        case "KeyF":
            audio = new Audio("sounds/F.mp3");
            break;
        case "KeyG":
            audio = new Audio("sounds/G.mp3");
            break;
        case "KeyH":
            audio = new Audio("sounds/H.mp3");
            break;
        case "KeyJ":
            audio = new Audio("sounds/J.mp3");
            break;
        case "KeyW":
            audio = new Audio("sounds/W.mp3");
            break;
        case "KeyE":
            audio = new Audio("sounds/E.mp3");
            break;
        case "KeyT":
            audio = new Audio("sounds/T.mp3");
            break;
        case "KeyY":
            audio = new Audio("sounds/Y.mp3");
            break;
        case "KeyU":
            audio = new Audio("sounds/U.mp3");
            break;
    }
    audio.play();

});