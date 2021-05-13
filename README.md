1. Scene is like the set where the shooting will take place
2. Objects are created by two things the shape/geometry and the material with can have many properties, colour being one of them.
3. Once done we need to add it to the scene.
4. Camera is how you want to look at the scene, the dimensions and the poisition
5. Once camera properties are defined we need to add it to the scene as well
6. We can set position to any object in the scene, because by default evrey thing is added in the center and if the camera is not positioned at a distance from the objects we cannot see anything.
7. Once the scene it setup we need to render it in the html, using canvas.
8. We need to provide the canvas DOM reference to WebGL Renderer
8. WebGL Renderer will resize the canvas based on the scene size once we set the size
9. Wiew your very first WebGL Render on the HTML.

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