let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-but");
let resultBox = document.querySelector(".new");
let winnerText = document.querySelector(".new h1");

let turnO = true; 
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turnO = !turnO;

        checkWinner();
    });
});

function checkWinner() {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            return;
        }
    }

    
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        showWinner("Draw");
    }
}

function showWinner(winner) {
    if (winner === "Draw") {
        winnerText.innerText = "It's a Draw!";
    } else {
        winnerText.innerText = `Winner is ${winner}`;
    }
    resultBox.classList.remove("hide");
    disableAllBoxes();
}

function disableAllBoxes() {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

function resetGame() {
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    resultBox.classList.add("hide");
    winnerText.innerText = "";
}


resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
