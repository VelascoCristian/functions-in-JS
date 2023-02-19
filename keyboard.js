const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();


    switch (e.keyCode) {
        case 37:
            if (limitsBall.left > limitStage.left) {
                e.preventDefault();
                x--;
            } 
            break;
        case 38:
            if (limitsBall.top > limitStage.top) {
                e.preventDefault();
                y--;
            } 
            break;
        case 39:
            if (limitsBall.right < limitStage.right) {
                e.preventDefault();
                x++;
            } 
            break;
        case 40:
            if (limitsBall.bottom < limitStage.bottom) {
                e.preventDefault();
                y++;
            } 
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts (e) {
    console.log(e);
    if (e.key === "a" && e.altKey) {
        alert("Haz hecho una alerta");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Haz hecho una confirmación");
    }

    if (e.key === "p" && e.altKey) {
        prompt("Haz hecho un aviso");
    }
}