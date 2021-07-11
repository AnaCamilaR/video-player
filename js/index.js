
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('Le diste clic al boton de Play')
}

function handlePause() {
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  console.log('Le diste clic al boton de Pasusa')
}

$backward.addEventListener('click',handlebackward)
$forward.addEventListener('click',handleforward)

function handlebackward() {
  $video.currentTime -= 10
  console.log('10 segundos para atras',$video.currentTime)
}
function handleforward() {
  $video.currentTime+= 10
  console.log('10 segundos para adelante', $video.currentTime)
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max= $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value=$video.currentTime

}



