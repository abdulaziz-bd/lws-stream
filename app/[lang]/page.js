import HeroSection from "@/components/Hero";
import VideoListSection from "@/components/VideoList";

export default function Home({ params: { lang } }) {
  return (
    <>
      <HeroSection lang={lang} />

      <VideoListSection lang={lang} />
    </>
  );
}
