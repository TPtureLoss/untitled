"use client";


import {

chapters

} from "@/data/life";


import LifeChapter from "./LifeChapter";


import Leaf from "./Leaf";


import {

useRef,

useEffect

} from "react";


import {

gsap

} from "@/animations/gsap";



export default function LifeJourney(){



const leaf=
useRef<SVGSVGElement>(null);



useEffect(()=>{


gsap.to(

leaf.current,

{


y:window.innerHeight*4,


x:100,


rotation:1080,


scrollTrigger:{


trigger:leaf.current,


start:"top center",

end:"bottom bottom",

scrub:2


}


}


)


gsap.to(

leaf.current,

{


filter:"sepia(1)",


scrollTrigger:{


trigger:leaf.current,

start:"top top",

end:"bottom bottom",

scrub:2


}


}


)



},[])



return(

<section className="journey">


<Leaf ref={leaf}/>


{

chapters.map(

(item)=>(


<LifeChapter

key={item.title}

title={item.title}

text={item.text}

/>


)

)

}


</section>


)

}