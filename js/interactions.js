// OPGESLAGEN VERHALEN NOTIFICATIE
// Gebruik gemaakt van: http://jsfiddle.net/uq7ud/

var label = document.querySelector('header li:last-of-type a')
var bookmarkButtons = document.querySelectorAll('input.bookmark')
var checkCount = 0

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.checked) {
      checkCount++
    } else {
      checkCount--
    }
    updateLabel()
  })
})

function updateLabel() {
  label.setAttribute('data-value', checkCount);
  if (label.getAttribute('data-value') > 0) {
    label.classList.add('bookmarks')
  } else {
    label.classList.remove('bookmarks')
  }
}

// NIEUW/POPULAIR FILTER

var popularButton = document.querySelector('input#populair')
var alphabeticButton = document.querySelector('input#alfabetisch')
var mainTitle = document.querySelector('main h1')
var articles = document.querySelector('main div')

popularButton && popularButton.addEventListener("click", function () {
  mainTitle.innerHTML = 'Populaire verhalen'
  articles.classList.add('popular')

})

alphabeticButton && alphabeticButton.addEventListener("click", function () {
  mainTitle.innerHTML = 'Verhalen'
  articles.classList.remove('popular')
})


// VERHAAL
// https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element


window.onscroll = function (e) {
  reset_animation()
}

function reset_animation() {
  var el = document.querySelector('.overlay');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}