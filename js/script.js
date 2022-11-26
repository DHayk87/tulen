function bigImg(x) {
  x.style.flexGrow = '8'
  x.style.flexBasis = '100%'
  x.style.transition = '.4s'
}

function normalImg(x) {
  x.style.transition = '.4s'
  x.style.flexBasis = '30%'
  x.style.flexGrow = '1';
}

function show() {
  document.querySelector('.slideNav').style.transform = 'translateX(0)'
}

function hide() {
  document.querySelector('.slideNav').style.transform = 'translateX(-250px)'
}

// ************************************ slider

let parent = window.matchMedia("(max-width:768px)")
let el = document.querySelectorAll('.slide')
let currentSlide = 0
var interval 
let slideTime

parent.addEventListener('change', change )
window.addEventListener('load',change)

function change() {


  if (parent.matches) {
    console.log('small')
    interval = true

    function inter() {
      console.log(interval);
      if (interval) {

        interval = setInterval(nextSlide, 4000)
      }
    }
    inter()
  } else {
    console.log('big')


    function stoped() {
      clearInterval(interval)
      interval = false
    }
    stoped()
  }
}


function sliderStyle(s) {
  el[currentSlide].className = ('slide')
  currentSlide = (s + el.length) % el.length
  el[currentSlide].className = ('slide slideShow')
  console.log(currentSlide);
}

function nextSlide() {
  sliderStyle(currentSlide + 1)
}
