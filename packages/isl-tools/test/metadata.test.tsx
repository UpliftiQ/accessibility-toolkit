import axe from "axe-core";
import { render } from "@testing-library/react";
import { SignLanguageVideo, canPublishSignLanguageMedia, validateSignLanguageMetadata } from "../src";
import type { SignLanguageMediaMetadata } from "../src";

const completeMetadata: SignLanguageMediaMetadata = {
  languageName: "Indian Sign Language",
  signerCredit: "Approved educator credit",
  consentReference: "consent-2026-001",
  rightsStatement: "Licensed for this educational website",
  allowedUses: ["education", "web publication"],
  aiTrainingAllowed: false
};

describe("sign-language metadata", () => {
  it("accepts complete publication metadata", () => {
    expect(validateSignLanguageMetadata(completeMetadata)).toEqual([]);
    expect(canPublishSignLanguageMedia(completeMetadata)).toBe(true);
  });

  it("requires separate consent for AI training", () => {
    const issues = validateSignLanguageMetadata({ ...completeMetadata, aiTrainingAllowed: true });
    expect(issues).toContainEqual(expect.objectContaining({ field: "aiConsentReference", severity: "error" }));
  });

  it("renders accessible media details", async () => {
    const { container } = render(
      <SignLanguageVideo title="Welcome in Indian Sign Language" videoSrc="/welcome-isl.mp4" metadata={completeMetadata} />
    );
    const results = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } }
    });
    expect(results.violations).toEqual([]);
  });
});
