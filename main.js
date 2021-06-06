function setup() {
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function preload() {
    music = loadSound("music.mp3");
}
function draw(){
    image(video, 0, 0, 600, 550);
}
function playsong() {
    music.play();
    song.setVolume(1);
    song.rate(1);
}