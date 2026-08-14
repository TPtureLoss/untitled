import {

NextResponse

} from "next/server";


import {

supabase

} from "@/lib/supabase";



export async function POST(

req:Request

){


const body=

await req.json();



const {

words

}=body;



const result=

await supabase

.from("receipts")

.insert({

words

});



return NextResponse.json({

success:true,

data:result


})


}