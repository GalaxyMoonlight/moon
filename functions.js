function createCamera(scene,canvas){ 
var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(1, 1, 2), scene);
camera.applyGravity=true
camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    // Target the camera to scene origin.
    camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    camera.attachControl(canvas, false);

camera.checkCollisions = true;

}


function createLight(scene){
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1,1,0), scene);

    // Create a built-in "sphere" shape. 
}


function createSphere(scene){
var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);

    // Move the sphere upward 1/2 of its height.
    sphere.position.y = 1;
     sphere.position.x = 0;
      sphere.position.z= 0;

    var sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", scene);
sphereMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
//sphereMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
sphereMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
sphereMaterial.diffuseColor = new BABYLON.Color3(.6, .4, .9);
sphere.material=sphereMaterial
sphere.checkCollisions = true;
    

}
