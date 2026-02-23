import React from "react";
import { BLACK, FONT } from "../../constants/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { Highlight } from "../common/Highlight";
import { VideoPlaceholder } from "../common/VideoPlaceholder";
import { CTAButton } from "../common/CTAButton";

export function LongFormSection() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <section
      id="case-studies"
      style={{
        padding: mob ? "0 20px 56px" : "0 40px 80px",
        background: "#fff",
      }}
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
          Podcast <Highlight>Trailers</Highlight>
        </h2>
      </Reveal>

      {/* Podcast Trailers landscape videos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          gap: mob ? 10 : 16,
          maxWidth: 900,
          margin: "0 auto 14px",
        }}
      >
        {[{ id: "3I25xH4GEvbc7umgeM01BX1c9fTIlZBhN5N02YLPD8dlU", thumbnailTime: 38 }, { id: "DoQPVMAI8Yqi6mSi5k9AoNkukqJCyCpAvm02YyRNcFgk", thumbnailTime: 45 }].map((video, i) => (
          <Reveal key={i} delay={i * 90} direction="up">
            <VideoPlaceholder aspectRatio="16/9" muxPlaybackId={video.id} thumbnailTime={video.thumbnailTime} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h2
          style={{
            marginTop: mob ? 0 : 60,
            fontSize: mob ? 23 : 31,
            fontWeight: 700,
            color: BLACK,
            fontFamily: FONT,
            textAlign: "center",
            marginBottom: mob ? 30 : 46,
            letterSpacing: "-0.02em",
          }}
        >
          Long Form <Highlight>Videos</Highlight>
        </h2>
      </Reveal>

      {/* Two large landscape videos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          gap: mob ? 10 : 16,
          maxWidth: 900,
          margin: "0 auto 14px",
        }}
      >
        {[
          { id: "78Bqz1IiX00RcIzcyuFcB9mElqjyp4cNjwZ702646hb2k" },
          { id: "iqre02O01rDVxrBWkxY6VLC2h00w7q9DDHyIrib9Z01nHwQ", thumbnailTime: 17 }
        ].map((video, i) => (
          <Reveal key={i} delay={i * 90} direction="up">
            <VideoPlaceholder
              aspectRatio="16/9"
              muxPlaybackId={video.id}
              thumbnailTime={video.thumbnailTime}
            />
          </Reveal>
        ))}
      </div>

      {/* Software explainer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          gap: mob ? 24 : 16,
          maxWidth: 900,
          margin: "0 auto",
          marginTop: mob ? 0 : 40,
          alignItems: "center",
        }}
      >
        <Reveal delay={0} direction={mob ? "up" : "right"}>
          <div style={{ order: mob ? 2 : 1 }}>
            <h3
              style={{
                fontSize: mob ? 21 : 27,
                maxWidth: 400,
                fontWeight: 800,
                color: BLACK,
                fontFamily: FONT,
                lineHeight: 1.2,
                marginBottom: 18,
                letterSpacing: "-0.025em",
              }}
            >
              Software Explainer Videos For Your Next Product Launch
            </h3>
            <CTAButton small>Book a Discovery Call</CTAButton>
          </div>
        </Reveal>
        <Reveal delay={100} direction={mob ? "up" : "left"}>
          <div style={{ order: mob ? 1 : 2 }}>
            <VideoPlaceholder aspectRatio="16/9" muxPlaybackId="tA1d53kH00ZyotP801EN02j017L3FYq01Lt3SSmbh3juz2pY" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
