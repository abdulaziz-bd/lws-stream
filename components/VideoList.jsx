import { getDictionary } from "@/app/[lang]/dictionaries";
import { getVideos } from "@/data/videos-db";
import Link from "next/link";
import VideoCard from "./VideoCard";

export default async function VideoListSection({ pathName = "/", lang }) {
  let videos = await getVideos();
  const dictionary = await getDictionary(lang);

  if (pathName === "/") {
    videos = videos.slice(0, 8);
  }

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {dictionary?.stream_of_the_day.heading}
        </h2>
        {pathName === "/" && (
          <Link
            href="/videos"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            {dictionary?.stream_of_the_day.view_all}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </section>
  );
}
