class Player {
    constructor(videoElement) {
        this.videoElement = videoElement;
    }

    play() {
        this.videoElement.play();
    }

    pause() {
        this.videoElement.pause();
    }

    stop() {
        this.videoElement.pause();
        this.videoElement.currentTime = 0;
    }
}

export default Player;