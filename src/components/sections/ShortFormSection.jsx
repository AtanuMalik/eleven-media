import React from "react";
import { BLACK, FONT } from "../../constants/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { Highlight } from "../common/Highlight";
import { VideoPlaceholder } from "../common/VideoPlaceholder";

export function ShortFormSection() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <section
      id="work"
      style={{ padding: mob ? "56px 20px" : "80px 40px", background: "#fff" }}
    >
      <Reveal>
        <h2
          style={{
            fontSize: mob ? 23 : 31,
            fontWeight: 700,
            color: BLACK,
            fontFamily: FONT,
            textAlign: "center",
            marginBottom: mob ? 30 : 46,
            letterSpacing: "-0.02em",
          }}
        >
          Short Form Content That <Highlight>Goes Viral</Highlight>
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "repeat(2,1fr)" : "repeat(4,1fr)",
          gap: mob ? 10 : 16,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {[
          {
            muxPlaybackId: "JxYBeqQOjtd5oye4NX01o5PBhMU01uwVKP4Dm01XcN0000uw",
            title: "Short 1",
          },
          {
            muxPlaybackId: "MYwUWUId2cWu6MLuiUv6soPPyVouO00sAOfJ5NkPS6J4",
            title: "Short 2",
          },
          {
            muxPlaybackId: "DImOWj9CvX9T65nYorJhefZy02OmolM7AuCZ1Fx8NFho",
            title: "Short 3",
            thumbnailTime: 18,
          },
          {
            muxPlaybackId: "ISI021By5tMp011MqTqSlRrC00iAf02L1qwLJAIQH63iyHw",
            title: "Short 4",
          },
        ].map((video, i) => (
          <Reveal key={i} delay={i * 70} direction="up">
            <VideoPlaceholder
              aspectRatio="9/16"
              muxPlaybackId={video.muxPlaybackId}
              muxTitle={video.title}
              // request unmuted playback on user click (autoplay still follows browser rules)
              muxMuted={false}
              thumbnailTime={video.thumbnailTime}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
