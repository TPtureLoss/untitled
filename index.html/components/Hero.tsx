"use client";


import {
useRef,
useEffect
} from "react";


import {
gsap
} from "@/animations/gsap";


import LineArtwork from "./LineArtwork";



export default function Hero(){


const box=
useRef(null);



useEffect(()=>{


gsap.from(

box.current,

{

opacity:0,

y:60,

duration:2,

ease:"power4.out"

}

)


},[])



return(

<section className="hero">


<LineArtwork/>


<div

ref={box}

className="heroText"

>


<h1>

Untitled

</h1>


<p>

Who am I?

</p >


</div>


</section>

)

}