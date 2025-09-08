const player = new Player();

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');

    playButton.addEventListener('click', () => {
        player.play();
    });

    pauseButton.addEventListener('click', () => {
        player.pause();
    });

    stopButton.addEventListener('click', () => {
        player.stop();
    });
});