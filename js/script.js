// White Devil @ Devilshalani javascript ES6
gsap.to('.moon', {
	scrollTrigger: {
		scrub: true
	},
	scale: 2
})

gsap.to('.sky', {
	scrollTrigger: {
		scrub: true
	},
	x: - innerWidth / 2
})

gsap.to('.cloud1', {
	scrollTrigger: {
		scrub: true
	},
	x: - innerWidth / 3,
	scale: 1.1
})

gsap.to('.cloud2', {
	scrollTrigger: {
		scrub: true
	},
	x: innerWidth / 3,
	y: innerHeight / 3,
	scale: 1.1
})

gsap.to('.tree', {
	scrollTrigger: {
		scrub: true
	},
	backgroundPosition: innerWidth,
})

gsap.to('.wish', {
	scrollTrigger: {
		scrub: true
	},
	y: - 900
})

window.addEventListener("scroll", () => {
	let intro = document.querySelector('.intro');
	intro.style.transform = 'translate(-50%, '+ window.scrollY + 'px)';
});