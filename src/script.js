import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

console.log(THREE);

// Cursor Event
// const cursor = { x: 0, y: 0 };
// window.addEventListener('mousemove', event => {
//     cursor.x = (event.clientX / size.width) - 0.5;
//     cursor.y = - ((event.clientY / size.height) - 0.5);
//     // console.log(cursor);
// });

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
const aspectRatio = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100); // degree // Vertical Field of View , // aspect ratio, // how close the obbject tot he camera can be rendered, // how far it can be rendered 
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100); 
// camera.position.x = 2; // 2 units
// camera.position.y = 2; // 2 units
camera.position.z = 3; // 2 units
scene.add(camera);

// camera.lookAt(new THREE.Vector3(1, 1, 0));
camera.lookAt(mesh.position);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.x = 3;
// controls.update();

// Clock
const clock = new THREE.Clock();

const tick = () => {
    // Time
    const elapsedTime = clock.getElapsedTime();

    // Update Object Position
    // mesh.rotation.y = elapsedTime; // to make it 1 revolution/sec  = elapsedTime * Math.PI * 2;

    // Update Camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    // camera.position.y = cursor.y * 3;
    // camera.lookAt(mesh.position);

    // Update Controls
    controls.update();

    // Render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();
