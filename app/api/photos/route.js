import { NextResponse } from "next/server";
import { getPhotos } from "../../lib/imageData";


export  async function GET(request) {

    const photos = await getPhotos();

    return NextResponse.json(photos)

} 