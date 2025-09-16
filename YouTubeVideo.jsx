import React from "react";
import YouTube from "react-youtube";

function YouTubeVideo({ videoId, title, link }) {
  // Options for the YouTube player

  // Callback when video is ready
  const onReady = (event) => {
    // event.target.pauseVideo(); // Example: To pause the video when it is ready
    console.log("Video is ready.");
  };
  const opts = {
    width: "100%", // Make width 100% of parent container
    height: "100%", // Maintain aspect ratio based on parent container
    playerVars: {
      autoplay: 0, // Turn off autoplay to enhance user experience
      controls: 1,
      modestbranding: 1, // Limit YouTube branding
    },
  };

  return (
    <div className="youtube-container">
      <h3>{title}</h3>
      <YouTube videoId={videoId} opts={opts} />

      {/* <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${link}?rel=0`} // 'rel=0' tries to limit related videos after yours ends
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe> */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      )}
    </div>
  );
}

export default YouTubeVideo;
