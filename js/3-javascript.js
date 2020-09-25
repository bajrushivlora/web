
// const canvas = document.querySelector('#c');
// const renderer = new THREE.WebGLRenderer({canvas});

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2.5, 32, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0x000429 } );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
}

animate();


