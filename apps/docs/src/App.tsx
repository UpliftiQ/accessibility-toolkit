import { CaptionPlayer, type TranscriptCue } from "@upliftiq/caption-player";
import { StepProgress, VisualAlert, VisualTimer } from "@upliftiq/deaf-ui";
import { SignLanguageVideo } from "@upliftiq/isl-tools";

const transcript: TranscriptCue[] = [
  {
    id: "cue-1",
    start: 0,
    end: 5,
    speaker: "Educator",
    text: "Plants use sunlight, water and carbon dioxide to create energy.",
    description: "A diagram shows sunlight reaching a green leaf."
  },
  {
    id: "cue-2",
    start: 5,
    end: 10,
    speaker: "Educator",
    text: "This process is called photosynthesis."
  }
];

const steps = [
  { id: "choose", label: "Choose", description: "Select a lesson" },
  { id: "learn", label: "Learn", description: "Watch and read" },
  { id: "practice", label: "Practice", description: "Try the concept" },
  { id: "complete", label: "Complete", description: "Review progress" }
];

export function App() {
  return (
    <>
      <header className="docs-header">
        <a className="docs-brand" href="#top" aria-label="UpliftiQ Accessibility Toolkit home">
          <span aria-hidden="true">UQ</span>
          <strong>Accessibility Toolkit</strong>
        </a>
        <nav aria-label="Documentation navigation">
          <a href="#components">Components</a>
          <a href="#principles">Principles</a>
          <a href="https://github.com/upliftiq/accessibility-toolkit">GitHub</a>
        </nav>
      </header>

      <main id="main">
        <section className="docs-hero" id="top">
          <p className="eyebrow">Deaf-led · open source · pre-release</p>
          <h1>Build interfaces that do not depend on sound.</h1>
          <p className="lede">React and TypeScript components for caption-first media, sign-language-ready presentation and clear visual states.</p>
          <div className="hero-actions">
            <a href="#components">Explore components</a>
            <a href="https://github.com/upliftiq/accessibility-toolkit">View on GitHub</a>
          </div>
        </section>

        <section className="docs-section" aria-labelledby="status-title">
          <VisualAlert title="Pre-release developer preview" variant="warning">
            <p id="status-title">The APIs are ready for community review but may change before the first npm publication.</p>
          </VisualAlert>
        </section>

        <section className="docs-section" id="components" aria-labelledby="components-title">
          <div className="section-intro">
            <p className="eyebrow">Component preview</p>
            <h2 id="components-title">Caption-first media</h2>
            <p>This example uses poster placeholders. Replace the demo paths with your rights-cleared video and caption files.</p>
          </div>
          <CaptionPlayer
            title="Photosynthesis lesson"
            videoSrc="/demo/lesson-placeholder.mp4"
            poster="/demo/lesson-poster.svg"
            captionTracks={[
              { src: "/demo/lesson-en.vtt", srcLang: "en", label: "English", default: true }
            ]}
            signLanguage={{
              src: "/demo/isl-placeholder.mp4",
              poster: "/demo/isl-poster.svg",
              label: "Indian Sign Language video placeholder"
            }}
            transcript={transcript}
            defaultTranscriptOpen
          />
        </section>

        <section className="docs-section component-grid" aria-label="Additional component examples">
          <article>
            <div className="section-intro compact">
              <p className="eyebrow">Progress</p>
              <h2>Visible learning state</h2>
            </div>
            <StepProgress steps={steps} currentStep={1} label="Lesson progress" />
          </article>
          <article>
            <div className="section-intro compact">
              <p className="eyebrow">Time</p>
              <h2>No audio-only countdown</h2>
            </div>
            <VisualTimer totalSeconds={300} remainingSeconds={45} label="Practice time remaining" />
          </article>
        </section>

        <section className="docs-section" aria-labelledby="isl-title">
          <div className="section-intro">
            <p className="eyebrow">Media governance</p>
            <h2 id="isl-title">Sign-language media with consent metadata</h2>
          </div>
          <SignLanguageVideo
            title="Indian Sign Language example"
            videoSrc="/demo/isl-placeholder.mp4"
            poster="/demo/isl-poster.svg"
            description="This placeholder demonstrates the component structure; it is not an ISL translation."
            metadata={{
              languageName: "Indian Sign Language",
              signerCredit: "Demo signer credit required before publication",
              consentReference: "demo-consent-reference",
              rightsStatement: "Placeholder media only",
              allowedUses: ["documentation demo"],
              aiTrainingAllowed: false
            }}
          />
        </section>

        <section className="docs-section principles" id="principles" aria-labelledby="principles-title">
          <div className="section-intro">
            <p className="eyebrow">Definition of done</p>
            <h2 id="principles-title">Tested with standards and people.</h2>
          </div>
          <div className="principle-grid">
            <article><span>01</span><h3>Semantic first</h3><p>Native elements before ARIA or custom behaviour.</p></article>
            <article><span>02</span><h3>Keyboard complete</h3><p>Logical order, visible focus and no trapped interaction.</p></article>
            <article><span>03</span><h3>Sound never stands alone</h3><p>Every meaningful cue has text or a visual state.</p></article>
            <article><span>04</span><h3>Deaf-led review</h3><p>Major experience changes need relevant lived-experience review.</p></article>
          </div>
        </section>
      </main>

      <footer>
        <p>MIT licensed · Built by UpliftiQ with the Deaf community.</p>
        <a href="mailto:hi@upliftiq.in">hi@upliftiq.in</a>
      </footer>
    </>
  );
}
