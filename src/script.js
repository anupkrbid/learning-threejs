import './style.css';
import * as THREE from 'three';

console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 2;
group.add(cube3);

// const geometry = new THREE.BoxGeometry(1, 1, 1); // 1 unit
// const material = new THREE.MeshBasicMaterial({
//     color: 0xff0000 // 'red' // '#ff0000'
// });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// Position 
// mesh.position.z = 3; // 3 units
// mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.position.set(0.7, -0.6, 1);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

// Rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25; // Math.PI is half rotation, *2 is full rotation
// mesh.rotation.y = Math.PI * 0.25; // Math.PI is half rotation, *2 is full rotation

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
