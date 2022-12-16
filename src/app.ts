import './assets/styles/index.scss';
import PlayPauseController from "./controls/PlayPauseController";

const video = document.querySelector('video');
const videoContainer: HTMLDivElement = document.querySelector('.video-container');
const playPause = new PlayPauseController(video, videoContainer);