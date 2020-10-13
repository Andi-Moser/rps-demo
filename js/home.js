
function home() {
    let container = document.getElementById("home");
    let inputField = container.querySelector("#your_name");
    let startButton = container.querySelector("#start_game");

    console.log(container);
    console.log(inputField);
    console.log(startButton);

    startButton.addEventListener('click', function(e) {
        let playerName = inputField.value;

        if (playerName) {
            saveScore(playerName);
            window.main.setName(playerName);
            window.main.showGame();
            window.game.start();
        }
    });
}

function saveScore(playername) {
    xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/php/save-score.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Score saved!");
        }
      };

    var score = Math.floor(10 + (Math.random() * 50));
    xhttp.send("username="+playername+"&score=" + score);
}