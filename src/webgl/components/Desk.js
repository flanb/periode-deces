import Experience from 'core/Experience.js'
import { MeshBasicMaterial, PlaneGeometry, Mesh } from 'three'
import addObjectDebug from '../utils/addObjectDebug'

export default class Desk {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.debug = this.experience.debug

		this._createMaterial()
		this._createMesh()
		this._createPostIts()
	}

	_createMaterial() {
		const texture = this.scene.resources.items.bakeTexture
		this._material = new MeshBasicMaterial({ map: texture })
	}

	_createMesh() {
		this.mesh = this.scene.resources.items.deskModel.scene.clone()
		this.mesh.traverse((child) => {
			if (child.isMesh) {
				child.material = this._material
				if (child.name === '_NAS') {
					console.log(child)
					child.geometry.attributes.uv = child.geometry.attributes.uv1.clone()
				}
			}
		})
		this.mesh.name = 'background'
		this.scene.add(this.mesh)
	}

	_createPostIts() {
		const geometry = new PlaneGeometry(1, 1)
		const texture1 = this.scene.resources.items.postItZiziTexture
		const material1 = new MeshBasicMaterial({ map: texture1 })
		const postIt1 = new Mesh(geometry, material1)
		let scale = 0.3
		postIt1.scale.set(scale, scale, scale)
		postIt1.position.set(-1.15, 1.7, -1.)
		postIt1.rotation.set(-0.2, 0, -0.2)
		this.scene.add(postIt1)

		const texture2 = this.scene.resources.items.postItWolfTexture
		const material2 = new MeshBasicMaterial({ map: texture2 })
		const postIt2 = new Mesh(geometry, material2)
		postIt2.position.set(1.7, 2, -1.)
		postIt2.rotation.set(-0.2, 0, 0.2)
		scale = 0.4
		postIt2.scale.set(scale, scale, scale)
		this.scene.add(postIt2)

		addObjectDebug
	}
}
