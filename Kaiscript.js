// JavaScript Document
const imgs = document.getElementaryById('imgs')
const leftBtn = document.getElementaryById('left')
const rightBtn = document.getElementaryById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
	idx++
	changeImage()
}

function changeImage() {
	if(idx > img.length - 1) {
		idx = 0
	} else if(idx < 0) {
		idx = img.length -1
	}
	
	imgs.style.transform = 'translateX(${-idx})'
}

function resetInterval() {
	clearInterval(interval)
	interval = setInterval(run, 2000)
}

rightBtn.addEventListerner('click', () => {
	idx++
	changeImage()
	resetInterval()
})


leftBtn.addEventListerner('click', () => {
	idx++
	changeImage()
	resetInterval()