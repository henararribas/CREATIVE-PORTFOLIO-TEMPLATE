/**
 * Creative Portfolio Template
 * Copyright (c) 2025 Henara Arribas
 * Licensed under the MIT License
 * See LICENSE file for more details
 */

// ==========================================================================
// GSAP SETUP
// ==========================================================================

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches;

// ==========================================================================
// HERO ANIMATIONS
// ==========================================================================

function initHeroAnimations() {
	if (prefersReducedMotion) return;

	const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	heroTl
		.from('.hero-title', {
			y: 100,
			opacity: 0,
			duration: 1,
		})
		.from(
			'.hero-subtitle',
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
			},
			'-=0.6'
		)
		.from(
			'.hero-cta',
			{
				y: 30,
				opacity: 0,
				duration: 0.6,
			},
			'-=0.4'
		)
		.from(
			'.scroll-indicator',
			{
				opacity: 0,
				duration: 0.5,
			},
			'-=0.2'
		);

	// Parallax effects
	gsap.to('.hero-bg', {
		yPercent: 30,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});

	gsap.to('.floating-shapes', {
		yPercent: 20,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS
// ==========================================================================

function initScrollReveals() {
	if (prefersReducedMotion) return;

	gsap.utils.toArray('.gsap-reveal').forEach((el) => {
		gsap.from(el, {
			y: 50,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				toggleActions: 'play none none none',
			},
		});
	});
}

// ==========================================================================
// SKILL BARS ANIMATION
// ==========================================================================

function initSkillBars() {
	const skillBars = document.querySelectorAll('.skill-bar');

	skillBars.forEach((bar) => {
		const targetWidth = bar.dataset.width + '%';

		if (prefersReducedMotion) {
			bar.style.width = targetWidth;
			return;
		}

		gsap.to(bar, {
			width: targetWidth,
			duration: 1.2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: bar,
				start: 'top 90%',
				toggleActions: 'play none none none',
			},
		});
	});
}

// ==========================================================================
// PROJECT CARDS STAGGER ANIMATION
// ==========================================================================

function initProjectCards() {
	if (prefersReducedMotion) return;

	ScrollTrigger.batch('.project-card', {
		onEnter: (batch) => {
			batch.forEach((card) => card.classList.add('gsap-animated'));

			gsap.from(batch, {
				y: 60,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'power2.out',
				clearProps: 'transform',
			});
		},
		start: 'top 90%',
		once: true,
	});
}

// ==========================================================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================================================

function initNavbarScroll() {
	const navbar = document.querySelector('.navbar');

	ScrollTrigger.create({
		start: 'top -100',
		onUpdate: (self) => {
			if (self.scroll() > 100) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		},
	});
}

// ==========================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================

function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			const targetId = anchor.getAttribute('href');
			if (targetId === '#') return;

			const target = document.querySelector(targetId);
			if (target) {
				e.preventDefault();

				const navbarCollapse = document.querySelector('.navbar-collapse');
				if (navbarCollapse.classList.contains('show')) {
					bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
				}

				const navHeight = document.querySelector('.navbar').offsetHeight;

				gsap.to(window, {
					duration: 0.8,
					scrollTo: { y: target, offsetY: navHeight },
					ease: 'power2.inOut',
				});
			}
		});
	});
}

// ==========================================================================
// INITIALIZE EVERYTHING
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
	initHeroAnimations();
	initScrollReveals();
	initSkillBars();
	initProjectCards();
	initNavbarScroll();
	initSmoothScroll();

	console.log('🚀 Portfolio animations initialized');

	window.addEventListener('load', () => {
		ScrollTrigger.refresh();
	});
});

// ==========================================================================
// CLEANUP (for SPA environments)
// ==========================================================================

window.cleanupAnimations = () => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	gsap.killTweensOf('*');
};