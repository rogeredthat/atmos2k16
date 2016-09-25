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
            height: 100%;
            z-index: 0;
            position: absolute;
        }
        .card
        {
            height: 100%;
            background: white;
            box-shadow: 10px 0px 10px 0px rgb(0,0,0,1);
            width: 50%;
            z-index: +10;
            position:absolute;
            top:0;
            left: 0;
            display: block;
            text-align: center;
            line-height: 2.5;
            white-space: nowrap;
            font-family: 'Trajan Pro';
        }
        .card>h1>span
        {
            color:darkgoldenrod;
        }
        h1
        {
            color:black;
            white-space: nowrap;
            position:relative;
            display: inline-block;
        }
        h1:before
        {
            background: darkgoldenrod;
            width: 0%;
            opacity: 0.7;
            height:2px;
            position:absolute;
            content: "";
            top:90%;
            right:10%;
            animation:MainHeadingUnderline 1s 5s 1 ease-out;
        }
        @keyframes MainHeadingUnderline
        {
            0%{
                right:100%;
                width:0%;
            }
            50%{
                right:10%;
                width:80%;
            }
            100%{
                width:0%;
            }
        }
        h1:after
        {
            background: darkgoldenrod;
            width: 4px;
            opacity: 0;
            height:4px;
            position:absolute;
            content: "";
            top:90%;
            margin-top:-2px;
            right:6px;
            animation:MainHeadingDot 0.7s 0s infinite linear;
        }
        @keyframes MainHeadingDot
        {
            0%{
                transform:rotateZ(45deg);
                opacity: 1;
            }
            50%{
                transform:rotateZ(405deg)
            }
            75%{
                opacity:0;
            }
            
        }
        #shockwave
        {
            animation:hyperGlitch 0.5s infinite;
            width:50vh;
            height:50vh;
            text-align: center;
            line-height: 50vh;
            font-family:"FOUGHTKNIGHT";
            font-size:10vh;
            position:absolute;
            border-radius:50%;
            background:white;
            left:50%;
            z-index: +100;
            display: block;
            margin-left: -25vh;
            top:25vh;
            box-shadow:0px 0px 0px 0px rgba(200,0,0,0.5),0px 0px 0px 0px rgba(0,0,200,0.5);
        }
        @keyframes hyperGlitch
        {
            0%{
                box-shadow:-10px 0px 0px 0px rgba(200,0,0,0.5),10px 0px 0px 0px rgba(0,0,200,0.5);
            }
            5%{
                box-shadow:0px 0px 0px 0px rgba(200,0,0,0.5),10px 0px 0px 0px rgba(0,0,200,0.5);
            }
            15%{
                box-shadow:-10px 0px 0px 0px rgba(200,0,0,0.5),0px 0px 0px 0px rgba(0,0,200,0.5);
            }
            30%{
                box-shadow:0px 0px 0px 0px rgba(200,0,0,0.5),10px 0px 0px 0px rgba(0,0,200,0.5);
            }
            35%{
                box-shadow:0px 0px 0px 0px rgba(200,0,0,0.5),0px 0px 0px 0px rgba(0,0,200,0.5);
            }
            55%{
                box-shadow:-10px 0px 0px 0px rgba(200,0,0,0.5),10px 0px 0px 0px rgba(0,0,200,0.5);
            }
            70%{
                box-shadow:0px 0px 0px 0px rgba(200,0,0,0.5),0px 0px 0px 0px rgba(0,0,200,0.5);
            }
            
        }
    </style>
</head>

<body>
    <div class="card">
        <h1><i>HELLO</i><span>&nbsp;&nbsp;WORLD?</span></h1>
    </div>
    <div id="shockwave">ATMOS</div>
    <script src="js/three.js"></script>
    <script src="js/OrbitControls.js"></script>
    <script>
        // Our Javascript will go here.
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.001, 1000);
        camera.position.z=5;
        var controls=new THREE.OrbitControls(camera);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1,1,1);
        colors=[0x0C1526,0x121D40,0x223773,0x516973,0x301830];
        var spotLight=new THREE.PointLight(0xFFFFFF);
        spotLight.position.x=0;
        spotLight.position.y=0;
        spotLight.position.z=0;
        scene.add(spotLight);
        var ambience=new THREE.AmbientLight(0xFFFFFF);
        scene.add(ambience);
        var light=new THREE.SpotLight(0xFFFFFF,2,100,Math.PI/2,1,1);
        light.position.set(camera.position.x,camera.position.y,camera.position.z);
        scene.add(light);
        scene.fog=new THREE.Fog(colors[4],0.01,1000);
        var plane = [];
        var sustain = 0.9; /*From 0 to 1*/
        for (i = 0,m=0; i < 360; i++) {
            point={x:50*Math.sin(i*Math.PI/180),z:50*Math.cos(i*Math.PI/180)};
            for(j=0;j<10;j++,m++) {
                plane.push({
                    draw:function(){
                        scene.add(this.obj);
                    }
                });
                    
            /*
                Randomize the Sizes
            */
            plane[m].obj = new THREE.Mesh(new THREE.BoxGeometry(0.5*Math.random(),0.5*Math.random(),0.5*Math.random()), new THREE.MeshPhongMaterial({
            color: colors[Math.floor(Math.random()*5)], specular: 0xffffff, shininess: 50 }
        ));
            
            /*
                Scatter The Cubes
            */
            plane[m].obj.position.x= point.x+50 * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            plane[m].obj.position.y= 50 * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            plane[m].obj.position.z= point.z+50 * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            
            /*
                Randomize the Rotation
            */
            plane[m].obj.rotation.x= Math.PI * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            plane[m].obj.rotation.y= Math.PI * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            plane[m].obj.rotation.z= Math.PI * Math.random() * Math.pow(-1, Math.floor(1 + (Math.random() * 2)));
            
            }
        }

        camBasePos=5;
        phase=0;
        function render() {
            requestAnimationFrame(render);
            /*camera.position.z = camBasePos * Math.cos(phase);
            camera.position.x = camBasePos * Math.sin(phase);*/
            /*camera.position.z=100*Math.sin(phase);
            camera.position.x=0;
            camera.rotation.z=phase;*/
            camera.position.x=Math.sin(phase)*25;
            camera.position.z=Math.cos(phase)*25;
            camera.rotation.y=phase-Math.PI/2;
            phase += 0.01;
            light.position.set(camera.position.x,camera.position.y,camera.position.z);
            for (i = 0; i < 3000; i++)
                    plane[i].draw();
            renderer.render(scene, camera);
        }
        render();
    </script>
</body>

</html>1