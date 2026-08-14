import "./globals.css";


export const metadata={

title:"Untitled",

description:
"Who am I?"

}



export default function RootLayout({

children,

}:{

children:React.ReactNode

}){


return(

<html lang="en">

<body>

{children}

</body>

</html>

)

}