const createStars = () => {
	const star = document.createElement('div')
	star.classList.add('star')
	document.body.append(star)
	star.style.left = Math.random() * window.innerWidth + 'px'
	star.style.animationDuration = Math.random() * 5 + 3 + 's'
	star.style.opacity = Math.random()
	setTimeout(() => {
		star.remove()
	}, 7000)
}
createStars()
setInterval(createStars, 500)

let laserShot = document.createElement('div')





let spaceship = document.querySelector('.spaceship')
let moveBy = 30
window.addEventListener('load', () => {
	spaceship.style.position = 'absolute'
	spaceship.style.left = '0'
	spaceship.style.top = '0'
	spaceship.style.transform = 'translate(-50%, -50%)'
})
window.addEventListener('keypress', e => {
	switch (e.key) {
		case 'a':
			spaceship.style.left = parseInt(spaceship.style.left) - moveBy + 'px'
			break
		case 'd':
			spaceship.style.left = parseInt(spaceship.style.left) + moveBy + 'px'
			break
		case 'w':
			spaceship.style.top = parseInt(spaceship.style.top) - moveBy + 'px'
			break
		case 's':
			spaceship.style.top = parseInt(spaceship.style.top) + moveBy + 'px'
			break
	}
})
