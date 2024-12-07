import Image from "next/image";

export default function SimilarVideo({ video }) {
  return (
    <div className="flex items-start space-x-4">
      <Image
        src={video.thumbnail}
        alt="Fallout Shelter PC Thumbnail"
        className="w-30 h-20 rounded object-cover"
        width="120"
        height="80"
      />
      <div>
        <h3 className="font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-400">{video.channelTitle}</p>
        <p className="text-sm text-gray-400">26,389M</p>
      </div>
    </div>
  );
}
