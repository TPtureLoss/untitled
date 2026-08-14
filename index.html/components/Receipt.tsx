"use client";


import {

useEffect,

useState,

useRef

} from "react";


import {

gsap

} from "@/animations/gsap";




export default function Receipt(){


const[data,setData]
=
useState<string[]>([]);



const receipt=
useRef<HTMLDivElement>(null);



useEffect(()=>{


const saved=
localStorage.getItem(

"untitled_profile"

);



if(saved){

setData(
JSON.parse(saved)
)

}



gsap.from(

receipt.current,

{

y:100,

opacity:0,

duration:2

}

)



},[])




return(


<section className="receiptPage">



<div

ref={receipt}

className="paper"

>


<div className="tear">


</div>



<div className="store">


UNTITLED STORE

<br/>

SELF RECORD


</div>


<div className="divider"/>



<div className="items">


{

data.length>0


?

data.map(

item=>(

<p key={item}>

{item}

</p >

)

)


:

<p>

我

<br/>

似乎有点不同

</p >


}


</div>



<div className="divider"/>



<div className="answer">


我是：

<br/><br/>


{

data.length>0

?

data.join(" ")

:

"未知的"

}


</div>


<div className="bottom">

THANK YOU

</div>



</div>



</section>


)


}


async function save(){


await fetch(

"/api/save",

{


method:"POST",

headers:{

"Content-Type":

"application/json"

},


body:

JSON.stringify({

words:data

})


}

)


}