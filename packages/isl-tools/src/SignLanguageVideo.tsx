import { validateSignLanguageMetadata } from "./metadata";
import type { SignLanguageVideoProps } from "./types";

export function SignLanguageVideo({
  title,
  videoSrc,
  poster,
  description,
  captions = [],
  metadata,
  className
}: SignLanguageVideoProps) {
  const rootClass = ["upli-sign-card", className].filter(Boolean).join(" ");
  const issues = metadata ? validateSignLanguageMetadata(metadata) : [];
  const errorCount = issues.filter((issue) => issue.severity === "error").length;

  return (
    <article className={rootClass}>
      <header>
        <span>Sign-language media</span>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>

      <div className="upli-sign-video-frame">
        <video src={videoSrc} poster={poster} controls playsInline preload="metadata" aria-label={title}>
          {captions.map((track) => (
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

      {metadata ? (
        <details className="upli-sign-metadata">
          <summary>Media details and rights</summary>
          <dl>
            <div><dt>Language</dt><dd>{metadata.languageName}</dd></div>
            {metadata.signerCredit ? <div><dt>Signer</dt><dd>{metadata.signerCredit}</dd></div> : null}
            <div><dt>Rights</dt><dd>{metadata.rightsStatement}</dd></div>
            <div><dt>Allowed uses</dt><dd>{metadata.allowedUses.join(", ")}</dd></div>
            <div><dt>AI training</dt><dd>{metadata.aiTrainingAllowed === true ? "Explicitly permitted" : "Not permitted"}</dd></div>
          </dl>
          {issues.length > 0 ? (
            <div className="upli-metadata-review" data-has-errors={errorCount > 0 || undefined}>
              <strong>{errorCount > 0 ? "Publishing information is incomplete" : "Review suggested"}</strong>
              <ul>{issues.map((issue) => <li key={`${issue.field}-${issue.message}`}>{issue.message}</li>)}</ul>
            </div>
          ) : (
            <p className="upli-metadata-ready">Required publication information is present.</p>
          )}
        </details>
      ) : (
        <p className="upli-metadata-missing">Media rights and signer consent metadata were not provided.</p>
      )}
    </article>
  );
}
