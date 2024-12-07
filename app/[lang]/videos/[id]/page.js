import VideoDetailsPage from "@/components/VideoDetails";
import { isVideoExist } from "@/data/videos-db";
import { notFound } from "next/navigation";

export default async function VideoDetails({ params: { id, lang } }) {
  const isVideoAvailable = await isVideoExist(id);

  if (!isVideoAvailable) {
    return notFound();
  }
  return <VideoDetailsPage id={id} lang={lang} />;
}
