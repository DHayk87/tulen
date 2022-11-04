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
// let slideTime = setInterval( nextSlide, 4000)
let currentSlide = 0
let interval = true
let slideTime

function first (){
  if(parent <= parent.matches){
    slideTime = setInterval( nextSlide, 4000)
    console.log(parent , slideTime);
  }
}
first()
window.addEventListener('load', first())
parent.onchange = () => {
  if (parent.matches) {
    console.log('small')
    // nextSlide()

    function inter() {
      if (!interval) {
        interval = setInterval(nextSlide, 4000)
      }
    }
    inter()
  } else {
    console.log('big')
    // stopInt()

    function stoped() {
      clearInterval(interval)
      interval = false
    }
    stoped()
  }
}
// console.log(slideTime)

// let text = document.querySelector('.sliderText')


// function slideTime (){
//   setInterval( nextSlide, 4000)
// }

function sliderStyle(s) {
  el[currentSlide].className = ('slide')
  currentSlide = (s + el.length) % el.length
  el[currentSlide].className = ('slide slideShow')
  console.log(currentSlide);
}

function nextSlide() {
  sliderStyle(currentSlide + 1)
}

function stopInt() {
  clearInterval(slideTime)
}
// stopInt()





// let imgArr = [
//   '../image/1.jpg.webp',
//   '../image/2.jpg.webp',
//   '../image/3.jpg.webp',
//   '../image/4.jpg.webp',
//   '../image/5.jpg.webp'
// ]


// function sliderStyle (s){
//   el[currentSlide].style.opacity = '0'
//   currentSlide = (s + el.length) % el.length
//   el[currentSlide].style.zIndex = '10'
//   el[currentSlide].style.opacity = '1'
//   el[currentSlide].style.transition = '1s'
//   console.log(currentSlide);
// }