# Learning Three.js

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Points to Note

### Basic Scene
1. Scene is like the set where the shooting will take place
2. Objects are created by two things the shape/geometry and the material with can have many properties, colour being one of them.
3. Once done we need to add it to the scene.
4. Camera is how you want to look at the scene, the dimensions and the poisition
5. Once camera properties are defined we need to add it to the scene as well
6. We can set position to any object in the scene, because by default evrey thing is added in the center and if the camera is not positioned at a distance from the objects we cannot see anything.
7. Once the scene it setup we need to render it in the html, using canvas.
8. We need to provide the canvas DOM reference to WebGL Renderer
9. WebGL Renderer will resize the canvas based on the scene size once we set the size
10. View your very first WebGL Render on the HTML.

### Transform Objects
11. Transformation can be done using position, scale, rotation
12. Position can be added to mesh or camera anything that is inherited from Object3D.
13. tranformation should be done before the render function has been called, tranforming after the render is done will not work.
14. AxisHelper helps us to see the axis and position objects in space and passing a unit increases the length of the visible lines.
15. Functions like lookAt is prest on any Object3D which accepts a Vector3 and it orints the position to look at it, mostly done on camera to make it look at any vector position or a object postion.
16. We can Group objects together so that applying any tranformation to the group applies it to the whole group.
17. There are functions like length() which is applied on Object3D objects to get its position from the origin point.
18. There are functions like distanceTo() which is applied on Object3D objects to get its position beteween two points or objects.
19. There are functions like normalize() which is applied on Object3D objects to convert vectors into unit vectors.

### Animation
20. Animation is doing transitions over a period of time.
21. We can perform animations on both Objects and Camera.
22. We use reequestAnimationFrame to know when a transition can be done my the device.
23. Depending on the refresh rate of the screen the requestAnimationFrame may be called more times.
24. To fix this issue we use some techniques - Date.now() or Threejs Clock. example present in code.
25. For more complex amimations we can we external libraries like GSAP. example present in code.

### Cameras
26. There are different type of cameras each with differnt properties and use cases.
27. ArrayCamera - is used to render different perspectives of a scene mostly used in multiplayer games where different players are looking at different parts of the scene in split screen or something.
28. CubeCamers - is used to render 6 sides of a cube on all sides this is used to render the whole environment from a single point in the scene, threejs used it.
29. StereoCamera - is used to render two perspectives od the same this just like an eye, mostly used in VR experiences where who halfs of the device will render two perspective, one for each eye and together will give a sense of depth.
30. OrthographicCamera - is used to render objects without a perspective, a object will be of the same size no matter how far or close it is from the camera.
31. PerspectiveCamera - is use in most scenarios it is used to render a scene form a persepective and object change in size deplending on theor distance form the camera.
32. PerspectiveCamera takes 4 parameters, 1st is the Vertical FOV (Field of View) it is in degrees it should be between 45 to 75, 2nd is the aspect ratio of the width and height of the screen it should render, 3rd is the distace how close the object can be to the camera and still render correctly (0.1 is a good number) and 4th is the distance how far the object can be from the camera cand still render (100 seems to be a good choice but depends on the project and requirement).
33. OrthographicCamera - takes 6 parameters, it first 4 values are the felt, right, top and bottom units, it is used to create the capture aspect ratio of the camera and the last too are the neer and far values, same as the PerspectiveCamera. This type of camera takes a parallal view and not a conical view like a PerspectiveCamera.
34. We can control the object animation based on the cursor position in out screen
35. We can get the cursor position in our screen listening to the window mousemove event and using the clientX and clintY values on the event object.
36. But we cannot use this value directly as it will varie depending on screen resolution so we need to normalize the value to have a consisten range when we have done by diving the aspect ratio and inverting the y-axis values for consistency.
37. We can use this value in the render function to position the camera to rotae around the object to view different sides of it.
38. Though doing this works well but as the requirements increase implementing things gets omplicated, to help will these threejs has some built in controls.
39. DeviceOrientationControls -  you can move your device to change the orientaion of the camera, like playing a game and moving character left and right by paning the device left and right, but IOS stopped supporting it.
40. FlyControls - is can be uses to continuously move your camera to the direction in which the camera is moving taking origin as starting point, left and right ick can zomm in and out.
41. FirstPersonControls - this is an alternative to FlyControls, mouse is used to change the angle of the camera and left pr right clicking on it will move the camera forward or backward.
42. PointerLockControls - its is the same as FirstPersonControls but you cannot see the mouse 
pointer.
43. OrbitControls - its all about camera movement but with some restriction 
44. TrackballControls - its like OrbitControls with no limt.
45. TransformControls - it has nothing to do with cameras, it is used to move objects in the scene.
46. DragControls - same as TransformControls;
47. We will use OrbitalControls, but it is not part of the THREE object.
48. We have to import it as `import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';`
49. OrbitControls takes two parameter the camera and the DOMElement in out case the canvas.
50. We can change the angle from where the camera is viewing by changing the target value like target.x and hten the controls need to be updated (very important to update controls when changing target value).
51. We can give the animation a damping effect by enabling it but the controls need to be update on evrey frame change as done in the code.
