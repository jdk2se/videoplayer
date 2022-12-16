import './assets/styles/index.scss';
import PlayPause from "./hooks/PlayPause";
import Duration from "./hooks/Duration";
import Volume from "./hooks/Volume";

const video = document.querySelector('video');
const videoContainer: HTMLDivElement = document.querySelector('.video-container');
const playPause = new PlayPause(video, videoContainer);
const timer = new Duration(video);
const volume = new Volume(video);
