import React from "react";
import ShortFormMux from "./ShortFormMux";

export function VideoPlaceholder({
  aspectRatio = "9/16",
  videoId = "bTqVqk7FSmY",
  muxPlaybackId = null,
  muxTitle = "",
  thumbnailTime = null,
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        aspectRatio,
        overflow: "hidden",
      }}
    >
      {muxPlaybackId ? (
        thumbnailTime ? (
          <div style={{ width: "100%", height: "100%" }}>
            <iframe
              src={`https://player.mux.com/${muxPlaybackId}?poster=${encodeURIComponent(
                `https://image.mux.com/${muxPlaybackId}/thumbnail.png?time=${thumbnailTime}`
              )}${muxTitle ? `&metadata-video-title=${encodeURIComponent(muxTitle)}` : ""}`}
              title={muxTitle || "Mux video"}
              style={{ width: "100%", height: "100%", border: "none", aspectRatio }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <ShortFormMux
            playbackId={muxPlaybackId}
            title={muxTitle}
            aspectRatio={aspectRatio}
          />
        )
      ) : (
        <div
          className="plyr__video-embed"
          id="player"
          style={{ width: "100%", height: "100%" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&playsinline=1&rel=0&showinfo=0&controls=1&fs=1`}
            allowFullScreen
            allow="autoplay"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
