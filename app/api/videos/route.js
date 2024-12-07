import { getVideos } from "@/data/videos-db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getVideos();
  return NextResponse.json(data);
}
