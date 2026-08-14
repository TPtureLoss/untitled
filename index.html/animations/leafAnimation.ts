import {
gsap,
ScrollTrigger
} from "./gsap";


export function leafFloat(

element:HTMLElement

){


gsap.to(

element,

{

y:"+=1200",

x:80,

rotation:720,


ease:"none",


scrollTrigger:{


trigger:element,


start:"top center",

end:"bottom bottom",


scrub:2


}


}

);



}