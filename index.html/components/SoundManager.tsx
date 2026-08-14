"use client";


import {

useEffect

} from "react";



export default function SoundManager(){


useEffect(()=>{


const audio=

new Audio(

"/sounds/wind.mp3"

);



audio.volume=.15;



const start=()=>{


audio.play();


window.removeEventListener(

"click",

start

)


}


window.addEventListener(

"click",

start

)



},[])



return null;


}