  //adding sound and transitions
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`) 
  if(!audio) return;

  key.classList.add("playing")
  audio.currentTime=0;
  audio.play()
}
  //removing transition
const removeTransition = (e) => {
    if(e.propertyName !== "transform") return;
    // this.classList.remove("playing") this doesnt work because it is not inside addEventlistener so...
    e.target.classList.remove("playing")
}
   
const keys = document.querySelectorAll(".key")
keys.forEach((key)=>{key.addEventListener('transitionend',removeTransition)})
window.addEventListener('keydown', playSound);


keys.forEach((key)=>{key.addEventListener("click",function(){
    const keyId = key.dataset.key
    const audio = document.querySelector(`audio[data-key = "${keyId}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
  })})
