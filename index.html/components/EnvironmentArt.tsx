export default function EnvironmentArt({

type

}:{

type:string

}){


return(

<svg

className="environment"

viewBox="0 0 600 600"

>


{

type==="天空"

&&

<circle

cx="300"

cy="300"

r="180"

/>

}



{

type==="飞鸟"

&&

<path

d="
M100 300
Q300 100
500 300
"

className="birdLine"

/>

}



{

type==="枯木"

&&

<path

d="
M300 550
L300 200
M300 300
L150 150
M300 350
L450 200

"

className="treeLine"

/>

}



{

type==="流水"

&&

<path

d="
M50 300
C200 100
400 500
550 300

"

className="waterLine"

/>

}



{

type==="你"

&&

<circle

cx="300"

cy="250"

r="100"

/>

}



</svg>


)

}