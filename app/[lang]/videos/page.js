import VideoListSection from "@/components/VideoList";

export default function VideosPage({ params: { lang } }) {
  return <VideoListSection pathName="/videos" lang={lang} />;
}
