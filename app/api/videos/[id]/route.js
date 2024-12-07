import {
  deleteVideo,
  getVideoById,
  isVideoExist,
  updateVideo,
} from "@/data/videos-db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const isExist = await isVideoExist(params?.id);
  console.log("Video exist: ", isExist);

  if (!isExist) {
    return NextResponse.json({ error: "Video not found" }, { status: 400 });
  }

  const video = await getVideoById(params?.id);

  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 400 });
  }

  return NextResponse.json(video);
}

export async function PATCH(request, { params }) {
  try {
    const video = await getVideoById(params?.id);

    if (!video) {
      return NextResponse.json({ message: "Video not found" }, { status: 404 });
    }

    const data = await request.json();

    if (
      (!data.title && !data.description) ||
      (data.title?.trim() === "" && data.description?.trim() === "")
    ) {
      return NextResponse.json(
        {
          message:
            "At least title or description is required. Can only update title and description!",
        },
        { status: 400 }
      );
    }

    const updatedVideo = await updateVideo(params?.id, {
      ...(data.title?.trim() && { title: data.title.trim() }),
      ...(data.description?.trim() && { description: data.description.trim() }),
    });

    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const video = await getVideoById(params?.id);

  if (!video) {
    return NextResponse.error({
      status: 404,
      message: "Video not found",
    });
  }

  const { message, video: deletedVideo } = await deleteVideo(params?.id);

  return NextResponse.json({ message, deletedVideo });
}
