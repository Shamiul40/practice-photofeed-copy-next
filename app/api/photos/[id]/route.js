import { getPhotosById } from "@/app/lib/imageData"
import { NextResponse } from "next/server"

export async function GET(request, {params : {id}}) {
    
    const singlePhoto = await getPhotosById(id)

    return NextResponse.json(singlePhoto)
}