import fs from "fs/promises";
import path from "path";

const VIDEOS_FILE_PATH = path.join(process.cwd(), "./videos.json");

// Helper function to write videos
const writeVideosFile = async (videos) => {
  await fs.writeFile(VIDEOS_FILE_PATH, JSON.stringify(videos, null, 2));
};

export const getVideos = () =>
  import("./videos.json")
    .then((module) => module.default)
    .catch((error) => {
      throw new Error("Failed to load videos: " + error.message);
    });

export const getVideoById = async (id) => {
  if (!id) throw new Error("Video ID is required");

  return import("./videos.json")
    .then((module) => module.default.find((video) => video.videoId === id))
    .catch((error) => {
      throw new Error("Failed to load video: " + error.message);
    });
};

export const updateVideo = async (id, data) => {
  if (!id) throw new Error("Video ID is required");

  try {
    const videos = (await import("./videos.json")).default;
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (videoIndex === -1) {
      throw new Error(`Video with ID ${id} not found`);
    }

    const updatedVideo = { ...videos[videoIndex], ...data };
    videos[videoIndex] = updatedVideo;

    // Write changes to video json file
    await writeVideosFile(videos);

    return updatedVideo;
  } catch (error) {
    throw new Error("Failed to update video: " + error.message);
  }
};

export const deleteVideo = async (id) => {
  if (!id) throw new Error("Video ID is required");

  try {
    const videos = (await import("./videos.json")).default;
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (videoIndex === -1) {
      throw new Error(`Video with ID ${id} not found`);
    }

    const deletedVideo = videos[videoIndex];
    videos.splice(videoIndex, 1);

    // Write changes to video json file
    await writeVideosFile(videos);

    return {
      message: "Video deleted successfully",
      video: deletedVideo,
    };
  } catch (error) {
    throw new Error("Failed to delete video: " + error.message);
  }
};

export const isVideoExist = async (id) => {
  if (!id) throw new Error("Video ID is required");

  return import("./videos.json")
    .then((module) => module.default.some((video) => video.videoId === id))
    .catch((error) => {
      throw new Error("Failed to check video existence: " + error.message);
    });
};

export const getSimilarVideos = async (title) => {
  const lowerCaseTitle = title.toLowerCase();
  return import("./videos.json").then((module) =>
    module.default.sort(() => 0.5 - Math.random()).slice(0, 3)
  );
};
