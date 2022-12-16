export default class Duration {
    constructor(video: HTMLVideoElement) {
        this.video = video;
        this.timeFormatter = new Intl.NumberFormat(undefined, {
            minimumIntegerDigits: 2,
        });
        this.timer = document.querySelector('.current-time');
        this.init();
    }

    private video: HTMLVideoElement;
    private timeFormatter: Intl.NumberFormat;
    private timer: HTMLDivElement;

    private init() {
        this.video.addEventListener('loadeddata', () => {
            this.timer.textContent = this.formatDuration(this.video.duration);
        });

        this.video.addEventListener('timeupdate', (e) => {
            this.timer.textContent = this.formatDuration(this.video.currentTime);
        });
    }

    private formatDuration(time: number): string {
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor((time / 60) % 60);
        const hours = Math.floor(time / 3600);

        if (hours !== 0) {
            return `${hours}:${this.timeFormatter.format(minutes)}:${this.timeFormatter.format(seconds)}`;
        }

        return `${minutes}:${this.timeFormatter.format(seconds)}`;
    }
}