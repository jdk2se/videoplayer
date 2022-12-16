export default class Volume {
    constructor(video: HTMLVideoElement) {
        this.video = video;
        this.init();
    }

    private video: HTMLVideoElement;

    private mouseIsDown: boolean = false;
    private volumeContainer: HTMLDivElement;
    private volumeRangeWidth: number;
    private equalizer: HTMLElement;

    private init() {
        this.volumeContainer = document.querySelector('.volume-container');
        this.volumeRangeWidth = this.volumeContainer.getBoundingClientRect().width;

        this.equalizer = this.volumeContainer.querySelector('#equalizer stop');

        window.addEventListener("mouseup", this.up.bind(this));
        this.volumeContainer.addEventListener("mousedown", this.down.bind(this));
        this.volumeContainer.addEventListener("mousedown", this.volumeSlide.bind(this));
        this.volumeContainer.addEventListener("mousemove", this.volumeSlide.bind(this));
    }

    private down() {
        this.mouseIsDown = true;
    }

    private up() {
        this.mouseIsDown = false;
    }

    private volumeSlide(event: MouseEvent) {
        if (this.mouseIsDown) {
            let x = Math.floor(event.offsetX );
            if (x < 0) x = 0;
            if (x > this.volumeRangeWidth) x = this.volumeRangeWidth;

            const percentage = x * 100 / this.volumeRangeWidth;
            if (percentage < 10) x = 0;
            if (percentage > 90) x = this.volumeRangeWidth;

            if (x === 0) {
                this.video.muted = true;
            } else {
                this.video.muted = false;
                this.video.volume = (x / this.volumeRangeWidth);
            }

            const offset = (x * 100) / this.volumeRangeWidth;
            this.equalizer.setAttribute('offset', `${offset}%`);
        }
    }
}
