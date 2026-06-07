import "./VideoModal.css";
import trailer from "../../assets/videos/spiderman-trailer.mp4";

function VideoModal({ show, setShow }) {

  if (!show) return null;

  return (

    <div
      className="video-overlay"
      onClick={() => setShow(false)}
    >

      <div
        className="video-container"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        <video
          controls
          autoPlay
          width="100%"
        >

          <source
            src={trailer}
            type="video/mp4"
          />

          Your browser does not support video.

        </video>

      </div>

    </div>

  );

}

export default VideoModal;