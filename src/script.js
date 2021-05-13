import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

console.log(THREE);
console.log(gsap);

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1); // 1 unit
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000 // 'red' // '#ff0000'
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2); // 2 units is the lengthhof the axis line
scene.add(axesHelper);

// Camera
const size = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); // degree // Field of View , // aspect ration
camera.position.z = 3; // 3 units
scene.add(camera);

// camera.lookAt(new THREE.Vector3(1, 1, 0));
// camera.lookAt(mesh.position);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// Time
// let time = Date.now();

// Clock
const clock = new THREE.Clock();

// Animations
gsap.to(mesh.position, { 
    x: 2,
    duration: 1,
    delay: 1
});

const tick = () => {
    // Time
    // const currentTime = Date.now();
    // const deltaTime = currentTime  - time;
    // time = currentTime;

    // const elapsedTime = clock.getElapsedTime();

    // Update Object Position
    // mesh.rotation.y += 0.001 * deltaTime;
    // mesh.rotation.y = elapsedTime; // to make it 1 revolution/sec  = elapsedTime * Math.PI * 2;
    // mesh.position.x = Math.sin(elapsedTime); 
    // mesh.position.y = Math.cos(elapsedTime); 

    // camera.position.x = Math.sin(elapsedTime); 
    // camera.position.y = Math.cos(elapsedTime); 
    // camera.lookAt(mesh.position);

    // Render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();
