var audio = new Audio("/sound/click.mp3");

document.onclick = function() {
  audio.play();
}
window.addEventListener('load',()=>{
  const preload=document.querySelector('.preload');
  preload.classList.add("complete")
});