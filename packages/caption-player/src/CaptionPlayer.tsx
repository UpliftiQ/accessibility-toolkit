import { useId, useRef, useState } from "react";
import { TranscriptPanel } from "./TranscriptPanel";
import type { CaptionPlayerProps, CaptionSize, LayoutMode } from "./types";
import { useSyncedVideo } from "./useSyncedVideo";

const LAYOUT_LABELS: Record<LayoutMode, string> = {
  "side-by-side": "Side by side",
  "picture-in-picture": "Sign video overlay",
  "primary-only": "Primary video only",
  "sign-only": "Sign video only"
};

const CAPTION_LABELS: Record<CaptionSize, string> = {
  small: "Small captions",
  medium: "Medium captions",
  large: "Large captions"
};

function formatTime(seconds: number) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = Math.floor(safeSeconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function CaptionPlayer({
  title,
  videoSrc,
  poster,
  captionTracks = [],
  signLanguage,
  transcript = [],
  defaultLayout = "side-by-side",
  defaultTranscriptOpen = false,
  className,
  onLayoutChange
}: CaptionPlayerProps) {
  const primaryRef = useRef<HTMLVideoElement>(null);
  const signRef = useRef<HTMLVideoElement>(null);
  const [layout, setLayout] = useState<LayoutMode>(signLanguage ? defaultLayout : "primary-only");
  const [captionSize, setCaptionSize] = useState<CaptionSize>("medium");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcriptOpen, setTranscriptOpen] = useState(defaultTranscriptOpen);
  const [status, setStatus] = useState("");
  const transcriptId = useId();

  useSyncedVideo(primaryRef, signRef, Boolean(signLanguage));

  const changeLayout = (nextLayout: LayoutMode) => {
    setLayout(nextLayout);
    setStatus(`Layout changed to ${LAYOUT_LABELS[nextLayout]}.`);
    onLayoutChange?.(nextLayout);
  };

  const rootClass = ["upli-caption-player", className].filter(Boolean).join(" ");
  const availableLayouts: LayoutMode[] = signLanguage
    ? ["side-by-side", "picture-in-picture", "primary-only", "sign-only"]
    : ["primary-only"];

  const togglePlayback = () => {
    const media = primaryRef.current;
    if (!media) return;
    if (media.paused) {
      void media.play();
    } else {
      media.pause();
    }
  };

  const seek = (seconds: number) => {
    if (!primaryRef.current) return;
    primaryRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  return (
    <section
      className={rootClass}
      data-layout={layout}
      data-caption-size={captionSize}
      aria-label={title}
    >
      <header className="upli-player-header">
        <div>
          <span className="upli-player-kicker">Accessible media</span>
          <h2>{title}</h2>
        </div>

        <div className="upli-player-settings">
          {signLanguage ? (
            <fieldset>
              <legend>Video layout</legend>
              <div className="upli-button-group">
                {availableLayouts.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={layout === option}
                    onClick={() => changeLayout(option)}
                  >
                    {LAYOUT_LABELS[option]}
                  </button>
                ))}
              </div>
            </fieldset>
          ) : null}

          <fieldset>
            <legend>Caption size</legend>
            <div className="upli-button-group upli-caption-size">
              {(Object.keys(CAPTION_LABELS) as CaptionSize[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-label={CAPTION_LABELS[size]}
                  aria-pressed={captionSize === size}
                  onClick={() => setCaptionSize(size)}
                >
                  A
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </header>

      <div className="upli-media-stage">
        <div className="upli-primary-media">
          <video
            ref={primaryRef}
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            aria-label={`${title} primary video`}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onDurationChange={(event) => setDuration(event.currentTarget.duration)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            {captionTracks.map((track) => (
              <track
                key={`${track.srcLang}-${track.label}`}
                kind="captions"
                src={track.src}
                srcLang={track.srcLang}
                label={track.label}
                default={track.default}
              />
            ))}
            Your browser does not support HTML video.
          </video>
        </div>

        {signLanguage ? (
          <div className="upli-sign-media">
            <video
              ref={signRef}
              src={signLanguage.src}
              poster={signLanguage.poster}
              muted
              playsInline
              preload="metadata"
              aria-label={signLanguage.label}
            >
              Your browser does not support HTML video.
            </video>
            <span>{signLanguage.label}</span>
          </div>
        ) : null}
      </div>

      <div className="upli-playback-controls" aria-label="Playback controls">
        <button type="button" onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</button>
        <label>
          <span className="upli-visually-hidden">Seek video</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.currentTarget.value))}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          />
        </label>
        <output aria-live="off">{formatTime(currentTime)} / {formatTime(duration)}</output>
      </div>

      {transcript.length > 0 ? (
        <div className="upli-transcript-control">
          <button
            type="button"
            aria-expanded={transcriptOpen}
            aria-controls={transcriptId}
            onClick={() => setTranscriptOpen((open) => !open)}
          >
            {transcriptOpen ? "Hide transcript" : "Show transcript"}
          </button>
          <span>{transcript.length} transcript cues</span>
        </div>
      ) : null}

      {transcriptOpen && transcript.length > 0 ? (
        <div id={transcriptId}>
          <TranscriptPanel cues={transcript} currentTime={currentTime} mediaRef={primaryRef} title={title} />
        </div>
      ) : null}

      <p className="upli-visually-hidden" role="status" aria-live="polite">
        {status}
      </p>
    </section>
  );
}
