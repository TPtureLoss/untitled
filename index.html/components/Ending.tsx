"use client";


import {

useEffect,

useRef

} from "react";


import {

gsap

} from "@/animations/gsap";



export default function Ending(){


const leaf=
useRef<HTMLDivElement>(null);


const text=
useRef<HTMLDivElement>(null);



useEffect(()=>{


const tl=

gsap.timeline({

scrollTrigger:{

trigger:leaf.current,

start:"top center",

}

});



tl.to(

leaf.current,

{


scale:.6,

rotation:180,

filter:"grayscale(1)",

opacity:.5,


duration:4


}

)



.to(

leaf.current,

{


opacity:0,

duration:3


}

)



.to(

text.current,

{


opacity:1,

y:-20,

duration:3


}

)



},[])



return(

<section className="ending">


<div

ref={leaf}

className="finalLeaf"

>


<svg

viewBox="0 0 200 300"

>


<path

d="

M100 10

C180 100 180 220 100 280

C20 220 20 100 100 10

Z

"

/>


</svg>


</div>



<div

ref={text}

className="finalWords"

>


我普通

<br/>

可是我是唯一一个我


</div>


</section>

)

}