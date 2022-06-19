import './style.css'
import * as THREE from 'three'
console.log(THREE);
const canvas=document.querySelector('.webgl')

// Scene
const Scene= new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const materialRed = new THREE.MeshBasicMaterial({color:'#ff0000'})
const materialGreen = new THREE.MeshBasicMaterial({color:'#00ff00'})

const cubeRed = new THREE.Mesh(geometry,materialRed)
cubeRed.position.set(0,0,0)
cubeRed.rotation.set(Math.PI/2,Math.PI/4,0)
cubeRed.scale.set(1,2,1)
Scene.add(cubeRed)

const cubeGreen = new THREE.Mesh(geometry,materialGreen)
cubeGreen.position.set(0,0,0)
cubeGreen.rotation.set(Math.PI/2,Math.PI,0)
cubeGreen.scale.set(1,2,1)
Scene.add(cubeGreen)


//Grouping
const Grouping= new THREE.Group()
Scene.add(Grouping)
Grouping.add(cubeRed)
Grouping.add(cubeGreen)

Grouping.scale.x=2
Grouping.scale.y=2
Grouping.rotation.z=3.14687

//Sizes
const Sizes={
    width: 800,
    height:600
}
//Camera
const camera = new THREE.PerspectiveCamera(75,Sizes.width/Sizes.height)
camera.position.z=3

Scene.add(camera)

//renderer
const renderer =new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(Sizes.width,Sizes.height)
renderer.render(Scene,camera)




