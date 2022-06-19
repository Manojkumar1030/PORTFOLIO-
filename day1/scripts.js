const canvas=document.querySelector('.webgl')
// Scene
const Scene= new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})

const cube = new THREE.Mesh(geometry,material)
Scene.add(cube)

//Sizes
const Sizes={
    width: 800,
    height:600
}
//Camera
const camera = new THREE.PerspectiveCamera(75,Sizes.width/Sizes.height)
camera.position.z=3
camera.position.y=1
camera.position.x=0.5

Scene.add(camera)

//renderer
const renderer =new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(Sizes.width,Sizes.height)
renderer.render(Scene,camera)

