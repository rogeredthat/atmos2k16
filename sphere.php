<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8>
    <title>My first Three.js app</title>
    <style>
        body {
            margin: 0;
        }
        
        canvas {
            width: 100%;
            height: 100%
        }
    </style>
</head>

<body>
    <script src="js/three.js"></script>
    <script src="js/OrbitControls.js"></script>
    <script>
        // Our Javascript will go here.
        g = 1;
        phase = RadPhase = 0;
        persp = 10;
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.SphereGeometry(0.01);
        var material = new THREE.MeshLambertMaterial({
            color: 0xf0ffff
        });
        var tesseract = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        var geom = new THREE.BoxGeometry(1, 1, 1);
        var cube = new THREE.Mesh(geom, tesseract);
        cube.position.x = 0;
        cube.position.y = 0;
        cube.position.z = 0;
        cube.rotation.x = 1;
        cube.rotation.y = 1;
        scene.add(cube);
        var pointLight = new THREE.PointLight(0xFFaaFF);
        pointLight.position.x = 10;
        pointLight.position.y = 10;
        pointLight.position.z = 130;
        scene.add(pointLight);

        var spotLight = new THREE.SpotLight(0xFFAAFF);
        spotLight.position.set(-10, 10, -120);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;
        scene.add(spotLight);

        camera.position.z = 5;
        sphere = [];
        rad = 2;
        for (i = -15; i < 15; i++) {
            for (j = 0; j < 60; j++) {
                var dot = new THREE.Mesh(geometry, material);
                dot.position.x = rad * Math.cos(i * 6 * Math.PI / 180) * Math.sin(j * (6 / 180) * Math.PI);
                dot.position.y = rad * Math.sin(i * 6 * Math.PI / 180);
                dot.position.z = rad * Math.cos(i * 6 * Math.PI / 180) * Math.cos(j * (6 / 180) * Math.PI);
                sphere.push({
                    object: dot
                    , draw: function () {
                        scene.add(this.object);
                    }
                });
            }
        }

        function draw() {
            for (i = 0; i < 1800; i++) {
                sphere[i].draw();
            }
        }

        function pan() {
            camera.position.z = 5 * Math.max(0.2,Math.abs(Math.cos(RadPhase))) * Math.cos(phase);
            camera.position.x = 5 * Math.max(0.2,Math.abs(Math.cos(RadPhase))) * Math.sin(phase);
            camera.rotation.y = phase;
            phase += 0.01;
            RadPhase += 0.005;
        }

        function init() {
            window.requestAnimationFrame(init);
            draw();
            renderer.render(scene, camera);
            pan();
        }
        init();

        /* function grid()
        {
          $.beginPath();
          $.moveTo(w/2,0);
          $.lineTo(w/2,h);
          $.moveTo(0,h/2);
          $.lineTo(w,h/2);
          $.closePath();
          $.strokeStyle='rgba(255,255,255,1)';
          $.stroke();
        } */
    </script>
</body>

</html>