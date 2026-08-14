"use client";


import {

useRef,

useEffect

} from "react";


import {

gsap

} from "@/animations/gsap";


import EnvironmentArt from "./EnvironmentArt";



export default function LifeChapter({

title,

text

}:{

title:string,

text:string

}){


const box=
useRef<HTMLDivElement>(null);



useEffect(()=>{


gsap.fromTo(

box.current,

{

opacity:0,

y:100

},

{


opacity:1,

y:0,

duration:2,


scrollTrigger:{


trigger:box.current,

start:"top 70%"


}



}

)



},[])



return(

<section className="chapter">


<EnvironmentArt

type={title}

/>



<div

ref={box}

className="chapterText"

>


<h2>

{title}

</h2>


<p>

{text}

</p >


</div>


</section>


)

}