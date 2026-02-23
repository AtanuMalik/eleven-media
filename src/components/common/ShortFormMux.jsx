import React from "react";

export default function ShortFormMux({
  playbackId,
  title = "",
  aspectRatio = "9/16",
  autoPlay = false,
  muted = false,
}) {
  if (!playbackId) return null;

  const qs = [];
  if (title) qs.push(`metadata-video-title=${encodeURIComponent(title)}`);
  if (autoPlay) qs.push("autoplay=1");
  // Only include muted=1 when autoplaying; avoid forcing muted on user-initiated play
  if (autoPlay && muted) qs.push("muted=1");

  const src = `https://player.mux.com/${playbackId}${qs.length ? "?" + qs.join("&") : ""}`;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={src}
        title={title || "Mux video"}
        style={{ width: "100%", height: "100%", border: "none", aspectRatio }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
