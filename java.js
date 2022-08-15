var audio = new Audio('https://www.youtube.com/watch?v=7S_tz1z_5bA');

document.onclick = function() {
  audio.play();
}
window.addEventListener('load',()=>{
  const preload=document.querySelector('.preload');
  preload.classList.add("complete")
});