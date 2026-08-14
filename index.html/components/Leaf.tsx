"use client";


import {

forwardRef

} from "react";



const Leaf=

forwardRef<SVGSVGElement>((_,ref)=>{


return(

<svg

ref={ref}

className="leaf"

viewBox="0 0 300 500"


>


{/* 外轮廓 */}

<path

className="leafBody"

d="

M150 20

C260 120

260 300

150 460

C40 300

40 120

150 20

Z

"

/>



{/* 主叶脉 */}

<path

className="vein"

d="

M150 60

L150 430

"

/>



{/* 侧叶脉 */}

<path

className="vein"

d="

M150 150

L80 90

M150 200

L230 140

M150 260

L70 220

M150 330

L230 300

"

/>



</svg>


)

});


export default Leaf;