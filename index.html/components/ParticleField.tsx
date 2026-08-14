"use client";


import {
useEffect,
useRef
} from "react";


export default function ParticleField(){


const ref=
useRef<HTMLCanvasElement>(null);



useEffect(()=>{


const canvas=
ref.current!;


const ctx=
canvas.getContext("2d")!;


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;



const particles=
Array.from(

{
length:80

},

()=>({

x:
Math.random()*canvas.width,


y:
Math.random()*canvas.height,


size:
Math.random()*1.5,


speed:
Math.random()*0.2+.05


})

);



function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(p=>{


p.y-=p.speed;


if(p.y<0)
p.y=canvas.height;



ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);


ctx.fillStyle=
"rgba(0,0,0,.08)";


ctx.fill();



});


requestAnimationFrame(
animate
);


}


animate();



},[])



return(

<canvas

ref={ref}

className="particles"

/>

)

}