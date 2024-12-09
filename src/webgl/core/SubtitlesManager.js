import subtitles from '@/subtitles.js'
import { gsap } from 'gsap'
import Experience from 'core/Experience.js'
import EventEmitter from 'core/EventEmitter.js'

export class SubtitlesManager extends EventEmitter {
	constructor() {
		super()
		this._subtitleElement = document.querySelector('.subtitle')
		this._qteElement = document.querySelector('.qte')
		this._nextElement = document.querySelector('.next')
		this._experience = new Experience()

		this.typeAudio = new Audio('/audio/type.mp3')
	}

	playSubtitle(key) {
		this._currentSubtitle = subtitles[key]
		if (!this._currentSubtitle) throw new Error('key doesnt exist')
		const textElement = this._currentSubtitle.where || this._subtitleElement
		textElement.innerText = ''
		this._nextElement.style.opacity = '0'
		const splitText = this._currentSubtitle.text.split('')

		const spanElements = []

		splitText.forEach((char) => {
			const span = document.createElement('span')
			span.style.visibility = 'hidden'
			span.innerText = char
			textElement.appendChild(span)
			spanElements.push(span)
		})
		this.tl = gsap.set(spanElements, {
			stagger: {
				each: 0.05,
				onComplete: () => {
					this.typeAudio.play()
				},
			},
			autoAlpha: 1,
			onComplete: () => {
				this._nextElement.style.opacity = '1'
				if (this._currentSubtitle.success) {
					this.playQte()
				}
			},
		})
	}

	next() {
		if (this.blockSubtitle) return
		if (this.tl.progress() < 1) {
			this.tl.seek(this.tl.duration())
			this._nextElement.style.opacity = '1'
			if (this._currentSubtitle.success) {
				this.playQte()
				return
			}
			return
		}

		if (this._currentSubtitle.next) {
			this.playSubtitle(this._currentSubtitle.next)
			this.typeAudio.play()
		} else {
			this._subtitleElement.innerText = ''
			this.trigger('finish')
		}
		this._nextElement.style.opacity = '0'
	}

	playQte() {
		this._nextElement.style.opacity = '0'
		this._qteElement.style.opacity = '1'
		this.blockSubtitle = true
		const children = Array.from(this._qteElement.children)
		children.sort(() => Math.random() - 0.5)
		children.forEach((child) => {
			child.style.opacity = 1
			this._qteElement.appendChild(child)
		})
		let index = 0

		const endQte = () => {
			this._qteElement.style.opacity = '0'
			removeEventListener('keydown', handleDown)
			this.blockSubtitle = false
		}

		const handleDown = (event) => {
			if (event.key === 'a') return
			const firstChild = this._qteElement.children[index]
			const keyMap = {
				x: 'x',
				i: 'i',
				s: 's',
			}

			if (keyMap[event.key] && firstChild.alt === keyMap[event.key]) {
				firstChild.style.opacity = 0.5
				index++
			} else {
				this.playSubtitle(this._currentSubtitle.error)
				endQte()
			}

			if (index === children.length) {
				this.playSubtitle(this._currentSubtitle.success)
				endQte()
			}
		}

		requestAnimationFrame(() => {
			addEventListener('keydown', handleDown)
		})
	}
}
