"use client";
import VideoDetailsNotFound from "@/components/VideoDetailsNotFound";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export default function NotFound() {
  const pathName = usePathname();
  const videoId = pathName.split("/")?.[3];
  const lang = pathName.split("/")?.[1] || "en";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Suspense fallback={<Loading />}>
        <VideoDetailsNotFound videoId={videoId} lang={lang} />
      </Suspense>
    </div>
  );
}
