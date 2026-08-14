"use client";


import {

useEffect,

useRef

} from "react";


import Leaf from "./Leaf";


import {

leafFloat

} from "@/animations/leafAnimation";



export default function LeafScene(){


const leaf=
useRef<SVGSVGElement>(null);



useEffect(()=>{


if(leaf.current){

leafFloat(
leaf.current
)

}


},[])




return(

<section className="leafScene">


<Leaf ref={leaf}/>



<div className="leafText">


我是天空

<br/><br/>

我是飞鸟

<br/><br/>

我是枯木

<br/><br/>

我是流水

<br/><br/>

我是你


</div>


</section>


)


}