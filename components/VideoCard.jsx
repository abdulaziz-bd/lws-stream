import Image from "next/image";
import Link from "next/link";

export default function VideoCard({ video }) {
  return (
    <Link href={`/videos/${video.videoId}`}>
      <div className="rounded-lg overflow-hidden bg-color-gray">
        <Image
          src={video.thumbnail}
          alt="Stream 1"
          className="w-full h-40 object-cover"
          width="300"
          height="200"
        />
        <div className="p-2">
          <p className="font-semibold">{video.title}</p>
          <p className="text-sm text-gray-400">{video.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
}
