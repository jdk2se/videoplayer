export default class PlayPause {
    constructor(video: HTMLVideoElement, container: HTMLDivElement) {
        this.video = video;
        this.container = container;
        this.init();
    }
    private video: HTMLVideoElement;
    private payPauseBtn: Element;
    private container: HTMLDivElement;

    private init() {
        this.payPauseBtn = document.querySelector('.play-pause-btn');
        this.payPauseBtn.addEventListener('click', () => {
            this.togglePlay();
        });

        this.video.addEventListener('click', () => {
            this.togglePlay();
        });

        this.video.addEventListener('play', () => {
            this.container.classList.remove('paused');
        });

        this.video.addEventListener('pause', () => {
            this.container.classList.add('paused');
        });

        this.addKeyControl();
    }

    private togglePlay() {
        this.video.paused ? this.video.play() : this.video.pause();
    }

    private addKeyControl() {
        document.addEventListener('keydown', (e) => {
            switch(e.key.toLocaleLowerCase()) {
                case ' ':
                case 'k':
                    this.togglePlay();
                    break;
            }
        });
    }
}