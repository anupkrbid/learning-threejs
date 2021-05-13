console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // 1 unit
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000 // 'red' // '#ff0000'
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const size = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); // degree // Field of View , // aspect ration
camera.position.z = 3; // 3 units
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);