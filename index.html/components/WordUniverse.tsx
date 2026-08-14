"use client";


import {

useState

} from "react";


import {

words

} from "@/data/words";



export default function WordUniverse(){


const[selected,setSelected]
=
useState<string[]>([]);



function toggle(word:string){


let next;


if(selected.includes(word)){


next=
selected.filter(
x=>x!==word
)


}else{


next=[
...selected,
word
]


}



setSelected(next);



localStorage.setItem(

"untitled_profile",

JSON.stringify(next)

);


}




return(

<section className="wordSection">


<div className="wordTitle">

请选择符合你的词语

</div>



<div className="wordField">


{

words.map(

(word,index)=>(


<button


key={word}


className={

selected.includes(word)

?

"word selected"

:

"word"

}


style={{

"--x":
`${(index*73)%90}%`,

"--y":
`${(index*41)%70}%`

}as React.CSSProperties}



onClick={()=>toggle(word)}


>


{word}


</button>


)

)


}


</div>



<div className="selectedCount">

{

selected.length>0

?

`已选择 ${selected.length} 个`

:

""

}

</div>



</section>


)

}