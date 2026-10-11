export interface VisualTimerProps {
  totalSeconds: number;
  remainingSeconds: number;
  label?: string;
  urgentAtSeconds?: number;
  className?: string;
}

function formatDuration(seconds: number) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function VisualTimer({
  totalSeconds,
  remainingSeconds,
  label = "Time remaining",
  urgentAtSeconds = 60,
  className
}: VisualTimerProps) {
  const safeTotal = Math.max(1, totalSeconds);
  const safeRemaining = Math.min(Math.max(remainingSeconds, 0), safeTotal);
  const elapsed = safeTotal - safeRemaining;
  const percent = Math.round((elapsed / safeTotal) * 100);
  const urgent = safeRemaining > 0 && safeRemaining <= urgentAtSeconds;
  const complete = safeRemaining === 0;
  const rootClass = ["upli-timer", className].filter(Boolean).join(" ");

  return (
    <section className={rootClass} data-urgent={urgent || undefined} data-complete={complete || undefined}>
      <div className="upli-timer-copy">
        <span>{label}</span>
        <strong>{complete ? "Complete" : formatDuration(safeRemaining)}</strong>
      </div>
      <div
        className="upli-timer-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={safeTotal}
        aria-valuenow={elapsed}
        aria-valuetext={complete ? "Time complete" : `${formatDuration(safeRemaining)} remaining`}
      >
        <span style={{ width: `${percent}%` }} />
      </div>
      <p>{urgent ? "Less than one minute remains." : complete ? "The timer has finished." : `${percent}% elapsed.`}</p>
    </section>
  );
}
