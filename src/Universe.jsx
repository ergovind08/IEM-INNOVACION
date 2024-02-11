// src/Universe.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Universe = () => {
  const universeRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    universeRef.current.appendChild(renderer.domElement);

    const stars = new THREE.Group();
    scene.add(stars);

    for (let i = 0; i < 3000; i++) {
      const star = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 2, 24),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      stars.add(star);
    }

    camera.position.z = 1;

    const animate = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-screen h-full"
      ref={universeRef}
    ></div>
  );
};

export default Universe;
