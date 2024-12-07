import Modal from "@/components/Modal";
import VideoDetailsPage from "@/components/VideoDetails";

const VideoModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <VideoDetailsPage id={id} lang={lang} />
    </Modal>
  );
};

export default VideoModal;
