const scoreEl = document.querySelector('#scoreEl')
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var mySound;
var myMusic;

canvas.width = 984
canvas.height = 1230

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

class Player {
	constructor() {

		this.velocity = {
			x: 0,
			y: 0
		}
		
		this.rotation = 0
		this.opacity = 1
		
		const image = new Image()
		image.src = './IMG/PLAYER_1_FRAME_2.png'
		image.onload = () => {
		const scale = 2
			this.image = image
			this.width = image.width * scale
			this.height = image.height * scale
			this.position = {
				x: canvas.width / 2 - this.width / 2,
				y: canvas.height - this.height - 130
			}
		}
	}

	draw() {
		//c.fillStyle = 'red'
		//c.fillRect(this.position.x, this.position.y, this.width, this.height)
		
		c.save()
		c.globalAlpha = this.opacity
		c.translate(
			player.position.x + player.width / 2, 
			player.position.y + player.height / 2
		)
		
		c.rotate(this.rotation)
		
		c.translate(
			-player.position.x - player.width / 2, 
			-player.position.y - player.height / 2
		)
		
		c.drawImage(
			this.image, 
			this.position.x, 
			this.position.y,
			this.width, 
			this.height
		)
		c.restore()
	}
	
	update() {
		if(this.image){
			this.draw()
			this.position.x += this.velocity.x
		}	
	}
}

class Projectile {
	constructor({position, velocity }) {
		this.position = position
		this.velocity = velocity
	
		this. radius = 5
		
	}
	
	draw() {
		c.beginPath()
		c.arc(this.position.x, this.position.y, this.radius, 0,
			Math.PI * 2) 
		c.fillStyle = 'yellow'
		c.fill()
		c.closePath()
	}
	update(){
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
}

class InvaderProjectile {
	constructor({position, velocity }) {
		this.position = position
		this.velocity = velocity
	
		this.width = 8
		this.height = 30
		
	}
	
	draw() {
		c.fillStyle = 'green'
		c.fillRect(this.position.x, this.position.y, this.width,
			this.height)
			
	}
	
	update(){
		this.draw()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
}

class Invader1 {
	constructor({position}) {

		this.velocity = {
			x: 0,
			y: 0
		}
		
		
		const image = new Image()
		image.src = './IMG/DRUNK_1.png'
		image.onload = () => {
		const scale = 2
			this.image = image
			this.width = image.width * scale
			this.height = image.height * scale
			this.position = {
				x: position.x,
				y: position.y
			}
		}
	}

	draw() {
		
		c.drawImage(
			this.image, 
			this.position.x, 
			this.position.y,
			this.width, 
			this.height
		)
	}
	
	update({velocity}) {
		if(this.image){
			this.draw()
			this.position.x += velocity.x
			this.position.y += velocity.y
		}	
	}
	
	shoot(invadersProjectiles){
		invaderProjectiles.push(
			new InvaderProjectile({
				position: {
					x: this.position.x+ this.width / 2,
					y: this.position.y + this.height
				},
				velocity: {
					x: 0,
					y: 5
				}
			})
		)
	
	}
}

class Invader2 {
	constructor({position}) {

		this.velocity = {
			x: 0,
			y: 0
		}
		
		
		const image = new Image()
		image.src = './IMG/DRUNK_2.png'
		image.onload = () => {
		const scale = 2
			this.image = image
			this.width = image.width * scale
			this.height = image.height * scale
			this.position = {
				x: position.x,
				y: position.y
			}
		}
	}

	draw() {
		
		c.drawImage(
			this.image, 
			this.position.x, 
			this.position.y,
			this.width, 
			this.height
		)
	}
	
	update({velocity}) {
		if(this.image){
			this.draw()
			this.position.x += velocity.x
			this.position.y += velocity.y
		}	
	}
	
	shoot(invadersProjectiles){
		invaderProjectiles.push(
			new InvaderProjectile({
				position: {
					x: this.position.x + this.width / 2,
					y: this.position.y + this.height
				},
				velocity: {
					x: 0,
					y: 5
				}
			})
		)
	}
}

class Invader3 {
	constructor({position}) {

		this.velocity = {
			x: 0,
			y: 0
		}
		
		
		const image = new Image()
		image.src = './IMG/DRUNK_3.png'
		image.onload = () => {
		const scale = 2
			this.image = image
			this.width = image.width * scale
			this.height = image.height * scale
			this.position = {
				x: position.x,
				y: position.y
			}
		}
	}

	draw() {
		
		c.drawImage(
			this.image, 
			this.position.x, 
			this.position.y,
			this.width, 
			this.height
		)
	}
	
	update({velocity}) {
		if(this.image){
			this.draw()
			this.position.x += velocity.x
			this.position.y += velocity.y
		}	
	}
	
	shoot(invadersProjectiles){
		invaderProjectiles.push(
			new InvaderProjectile({
				position: {
					x: this.position.x + this.width / 2,
					y: this.position.y + this.height
				},
				velocity: {
					x: 0,
					y: 5
				}
			})
		)
	}
}	

class Grid {
	constructor() {
		this.position = {
			x: 0,
			y: 0
		}
		
		this.velocity = {
			x: 3,
			y: 0
		}
		
		this.invaders = []
		
		const columns = Math.floor(Math.random() * 3 + 8)
		
		this.width = columns * 70
		for (let x = 0; x < columns; x++) {
			this.invaders.push(
				new Invader1({position:{
					x: x * 70,
					y: 90}
				}),
				new Invader2({position:{
					x: x * 70,
					y: 0}
				}),
				new Invader3({position:{
					x: x * 70,
					y: 190}
				})
			)
		}
	}
	
	update() {
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
		
		this.velocity.y = 0
		
		if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
			this.velocity.x = -this.velocity.x
			this.velocity.y = 50
		}
	}
}

mySound = new sound('./SOUND/laserShoot.wav');
myMusic = new sound('./SOUND/GRUFFBANGER.wav');
const player = new Player()
const projectiles = []
const grids = []
const invaderProjectiles = []
var cooldown = 0
const keys = {
	a: {
		pressed: false
	},
	d: {
		pressed: false
	},
	space: {
		pressed: false
	},
}

let frames = 0
let game = {
	over: false,
	active: true
}
let score = 0


function animate() {
	if (cooldown > 0){
		cooldown -= 0.5
	}
	if (!game.active) return
	requestAnimationFrame(animate)
	var background = new Image();
	background.src = './IMG/BG2.png';
	
	background.onload = function(){
	c.drawImage(background,0,0, 984, 1230);
	}
	
	player.update()
	invaderProjectiles.forEach((invaderProjectile, index) => {
		if (
			invaderProjectile.position.y + invaderProjectile.height 
				>= 
			canvas.height
		)	{
			setTimeout(() => {
				invaderProjectiles.splice(index, 1)
			}, 0)
		} else invaderProjectile.update()
		
		if (
			invaderProjectile.position.y + invaderProjectile.height 
				>= 
				player.position.y + 25 &&
			invaderProjectile.position.x + invaderProjectile.width
				>=
				player.position.x + 15 &&
			invaderProjectile.position.x <= player.position.x - 15 +
				player.width &&
			invaderProjectile.position.y + invaderProjectile.height
				<= 1100
		) {
			console.log('you lose')
			
			setTimeout(() => {
				invaderProjectiles.splice(index, 1)
				player.opacity = 0
				game.over = true
			}, 0)
			
			setTimeout(() => {
				game.active = false
			}, 2000)
			
		}
	})
	
	projectiles.forEach((projectile, index) => {
		if (projectile.position.y + projectile.radius <= 0) {
			setTimeout(() => {
				projectiles.splice(index, 1)
			}, 0)	
		} else {
			projectile.update()
		}
	})
		
	
	grids.forEach((grid, gridIndex) => { 
		grid.update()
		
	if (frames % 50 === 0 && grid.invaders.length > 0) {
		grid.invaders[Math.floor(Math.random() * grid.invaders.
			length)].shoot(
			invaderProjectiles
		)
	}
	
		grid.invaders.forEach((invader, i) => {
			invader.update({velocity: grid.velocity })
			
			projectiles.forEach((projectile, j) => {
				if (
					projectile.position.y - projectile.radius <=
						invader.position.y + invader.height &&
					projectile.position.x + projectile.radius >=
						invader.position.x && 
					projectile.position.x - projectile.radius <= 
						invader.position.x + invader.width && 
					projectile.position.y + projectile.radius >= 
						invader.position.y
				) {
					setTimeout(() => {
						const invaderFound = grid.invaders.find(
							(invader4) => invader4 === invader
						)
						const projectileFound = projectiles.find(
							(projectile2) => projectile2 === projectile)
						
						if (invaderFound && projectileFound) {
							score += 100
							scoreEl.innerHTML = score
							
							grid.invaders.splice(i, 1)
							projectiles.splice(j, 1)
							
							if (grid.invaders.length > 0) {
								const firstInvader = grid.invaders[0]
								const lastInvader = grid.invaders[grid.
									invaders.length - 1]
									
								grid.width = 
									lastInvader.position.x -
									firstInvader.position.x + 
									lastInvader.width
								grid.position.x = firstInvader.position.x
							} else{
								grids.splice(gridIndex, 1)
							}
						}
					
					}, 0)
					
				}
			})		
		})
	})
	
	if (keys.a.pressed && player.position.x >= 0) {
		player.velocity.x = - 8
		player.rotation = -0.15
	} else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
		player.velocity.x = 8
		player.rotation = 0.15
	} else {
		player.velocity.x = 0
		player.rotation = 0
	}
	
	if (frames % 700 === 0){
		grids.push(new Grid())
	}
	
	
	
	frames++
}

animate()

addEventListener('keydown', ({key}) => {
	if (game.over) return
	switch (key) {
		case 'a':
			//console.log('left')
			keys.a.pressed = true
			break
		case 'd':
			//console.log('right')
			keys.d.pressed = true
			break
		case ' ':
			//console.log('space')
			mySound.play(1);
			myMusic.play();
			if (cooldown == 0){
				projectiles.push(
					new Projectile({
						position: {
							x: player.position.x +player.width / 2 + 29,
							y: player.position.y
						},
						velocity: {
							x: 0,
							y: -14 
						}
					})
				)
				cooldown = +8;
			}	
			break
	}
})

addEventListener('keyup', ({key}) => {
	switch (key) {
		case 'a':
			//console.log('left')
			keys.a.pressed = false
			break
		case 'd':
			//console.log('right')
			keys.d.pressed = false
			break
		case ' ':
			//console.log('space')
			keys.space.pressed = true
			break
	}
})