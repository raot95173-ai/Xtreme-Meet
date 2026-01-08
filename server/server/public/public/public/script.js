const socket = io();
const video = document.getElementById("video");

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room");

socket.emit("join-room", roomId);

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  video.srcObject = stream;
});
