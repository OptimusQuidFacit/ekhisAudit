import { getResponses } from "@/lib/data";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

 export const GET = async (request:NextRequest, {params}:{params:Params}) =>{
    try{
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("query");
        let queryObject = JSON.parse(decodeURIComponent(query as string));
        let response = await getResponses(queryObject);
        // console.log(queryObject)
        return NextResponse.json(response);
     }
     catch(err){
        console.log(err)
        return NextResponse.json(err)
     }
    }