"use client";


import {

useEffect,

useRef

} from "react";


import {

gsap

} from "@/animations/gsap";


import WaterSurface from "./WaterSurface";



export default function FallingReceipt(){


const paper=
useRef<HTMLDivElement>(null);


const ink=
useRef<HTMLDivElement>(null);



useEffect(()=>{


const tl=

gsap.timeline();



tl.to(

paper.current,

{

y:400,

rotation:12,

duration:3,

ease:"power2.in"

}

)



.to(

paper.current,

{

scaleY:.8,

opacity:.8,

duration:1

}

)



.to(

ink.current,

{

filter:"blur(20px)",

opacity:0,

duration:3

}

)



.to(

paper.current,

{

opacity:0,

duration:2

}

);



},[])



return(

<section className="waterScene">


<div

ref={paper}

className="wetPaper"

>


<div

ref={ink}

>


我是谁？

<br/>

我的标签

<br/>

我的故事


</div>


</div>



<WaterSurface/>


<div className="leafIntro">


我消失了


<br/>


藏匿在混沌的社会中


<br/>


有人会找到我吗……



</div>



</section>


)


}