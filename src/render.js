const THREE = require('three');

module.exports = function() {

  //scene
  const scene = new THREE.Scene();

  //camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  //renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //lights
  const light1 = new THREE.AmbientLight(0xaaaaff, 1);
  scene.add(light1);
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(200, 400, 300);
  scene.add(spotLight);

  const geometry = new THREE.BoxBufferGeometry(10, 10, 20);
  const material = new THREE.MeshLambertMaterial({color: 0xeeaa77});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 100;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
  }
  animate();

}
