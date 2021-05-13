// Basic Scene
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

// Transform Objects
11. Transformation can be done using position, scale, rotation
11. Position can be added to mesh or camera anything that is inherited from Object3D.
12. tranformation should be done before the render function has been called, tranforming after the render is done will not work.
13. AxisHelper helps us to see the axis and position objects in space and passing a unit increases the length of the visible lines.
14. Functions like lookAt is prest on any Object3D which accepts a Vector3 and it orints the position to look at it, mostly done on camera to make it look at any vector position or a object postion.
15. We can Group objects together so that applying any tranformation to the group applies it to the whole group.
16. There are functions like length() which is applied on Object3D objects to get its position from the origin point.
16. There are functions like distanceTo() which is applied on Object3D objects to get its position beteween two points or objects.
16. There are functions like normalize() which is applied on Object3D objects to convert vectors into unit vectors.


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