// -- selectors
let spaceship = document.querySelector('.spaceship')

// - functions
const runGame = () => {
	spaceshipMovement()
	backgroundAnimation()
	
}
const backgroundAnimation = () => {
	const starsMovement = () => {
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
	setInterval(starsMovement, 500)
}

const spaceshipMovement = () => {
	let movementSpeed = 30
	window.addEventListener('load', () => {
		spaceship.style.position = 'absolute'
		spaceship.style.left = '0'
		spaceship.style.top = '0'
		spaceship.style.transform = 'translate(-50%, -50%)'
	})
	window.addEventListener('keypress', e => {
		switch (e.key) {
			case 'a':
				if (parseInt(spaceship.style.left) > '-600') {
					spaceship.style.left = parseInt(spaceship.style.left) - movementSpeed + 'px'
				}
				break
			case 'd':
				if (parseInt(spaceship.style.left) < '600') {
					spaceship.style.left = parseInt(spaceship.style.left) + movementSpeed + 'px'
				}
				break
			case 'w':
				if (parseInt(spaceship.style.top) > '-500') {
					spaceship.style.top = parseInt(spaceship.style.top) - movementSpeed + 'px'
				}
				break
			case 's':
				if (parseInt(spaceship.style.top) < '0') {
					spaceship.style.top = parseInt(spaceship.style.top) + movementSpeed + 'px'
				}
				console.log(spaceship.style.top)
				break
		}
	})
}
runGame()


import Player from "./Player.js";
import BulletController from "./BulletController.js";
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 720;

const shotController = new BulletController(canvas)
const player = new Player(canvas.width/2.2, canvas.height/1.3, shotController)

function gameLoop() {
	setCommonStyle()
	ctx.fillStyle = "rgb(0, 0, 23)"
	ctx.fillRect(0,0,canvas.width, canvas.height)
	shotController.draw(ctx)
	player.draw(ctx)
}
function setCommonStyle() {
ctx.shadowColor = '#d53'
ctx.shadowBlur = 10
ctx.lineJoin = 'bevel'
ctx.lineWidth = 5
}

setInterval(gameLoop, 1000 / 60);