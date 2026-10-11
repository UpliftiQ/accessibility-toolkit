import type { RefObject } from "react";
import type { TranscriptCue } from "./types";

interface TranscriptPanelProps {
  cues: TranscriptCue[];
  currentTime: number;
  mediaRef: RefObject<HTMLVideoElement | null>;
  title: string;
}

function formatTime(seconds: number) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = Math.floor(safeSeconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function TranscriptPanel({ cues, currentTime, mediaRef, title }: TranscriptPanelProps) {
  const seekToCue = (cue: TranscriptCue) => {
    if (!mediaRef.current) return;
    mediaRef.current.currentTime = cue.start;
    mediaRef.current.focus();
  };

  return (
    <section className="upli-transcript" aria-label={`${title} transcript`}>
      <h3>Transcript</h3>
      <ol>
        {cues.map((cue) => {
          const isCurrent = currentTime >= cue.start && currentTime < cue.end;
          const label = [cue.speaker, cue.text].filter(Boolean).join(": ");

          return (
            <li key={cue.id} data-current={isCurrent || undefined}>
              <button
                type="button"
                onClick={() => seekToCue(cue)}
                aria-current={isCurrent ? "true" : undefined}
                aria-label={`Go to ${formatTime(cue.start)}: ${label}`}
              >
                <time>{formatTime(cue.start)}</time>
                <span>
                  {cue.speaker ? <strong>{cue.speaker}</strong> : null}
                  <span>{cue.text}</span>
                  {cue.description ? <em>{cue.description}</em> : null}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
