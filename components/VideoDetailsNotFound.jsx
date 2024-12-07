import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function VideoDetailsNotFound({ lang, videoId }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
      <svg
        className="w-24 h-24 mx-auto text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {dictionary?.video_not_found}
      </h1>
      <p className="text-gray-600 mb-6">
        {dictionary?.requested_video_not_found_1} {videoId}{" "}
        {dictionary?.requested_video_not_found_2}
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {dictionary?.return_home}
      </Link>
    </div>
  );
}
