import "./VideoModal.css";

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
            src="/src/assets/videos/spiderman-trailer.mp4"
            type="video/mp4"
          />
        </video>

      </div>

    </div>

  );

}

export default VideoModal;