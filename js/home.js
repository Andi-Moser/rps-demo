
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
            window.main.setName(playerName);
            window.main.showGame();
            window.game.start();
        }
    });
}