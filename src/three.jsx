import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import "./App.scss"

export default function Render3D() {
  const loader = new GLTFLoader();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(4, window.innerWidth / window.innerHeight, 0.6, 1000);
  const renderer = new THREE.WebGLRenderer();


  function updateRendererSize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    renderer.setClearColor( 0xffffff, 0);
  }

  updateRendererSize();

  document.body.appendChild(renderer.domElement);

  camera.position.z = 20;
  camera.position.x = -0.2;
  camera.position.y = 1.5;
  let model;

  function loadModel() {
    loader.load('./3D/ChuckNorris.gltf', (gltf) => {
      model = gltf.scene;
      scene.add(model);
    });
  }

  loadModel();

  function animate() {
    requestAnimationFrame(animate);

    if (model) {
        model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
  }

  animate();
  window.addEventListener('resize', updateRendererSize);
}
