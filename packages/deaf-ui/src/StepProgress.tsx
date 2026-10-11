import type { CSSProperties } from "react";

export interface ProgressStep {
  id: string;
  label: string;
  description?: string;
}

export interface StepProgressProps {
  steps: ProgressStep[];
  currentStep: number;
  label?: string;
  className?: string;
}

export function StepProgress({
  steps,
  currentStep,
  label = "Progress",
  className
}: StepProgressProps) {
  const safeCurrentStep = Math.min(Math.max(currentStep, 0), Math.max(steps.length - 1, 0));
  const rootClass = ["upli-steps", className].filter(Boolean).join(" ");

  return (
    <nav
      className={rootClass}
      aria-label={label}
      style={{ "--upli-step-count": Math.max(steps.length, 1) } as CSSProperties}
    >
      <ol>
        {steps.map((step, index) => {
          const state = index < safeCurrentStep ? "complete" : index === safeCurrentStep ? "current" : "upcoming";
          return (
            <li key={step.id} data-state={state} aria-current={state === "current" ? "step" : undefined}>
              <span className="upli-step-marker" aria-hidden="true">
                {state === "complete" ? "✓" : index + 1}
              </span>
              <span className="upli-step-copy">
                <strong>{step.label}</strong>
                {step.description ? <small>{step.description}</small> : null}
                <span className="upli-visually-hidden">
                  {state === "complete" ? "Completed" : state === "current" ? "Current step" : "Not started"}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
