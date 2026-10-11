import type { ReactNode } from "react";

export type VisualAlertVariant = "info" | "success" | "warning" | "danger";

export interface VisualAlertProps {
  title: string;
  children: ReactNode;
  variant?: VisualAlertVariant;
  dismissLabel?: string;
  onDismiss?: () => void;
  className?: string;
}

const SYMBOLS: Record<VisualAlertVariant, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  danger: "×"
};

export function VisualAlert({
  title,
  children,
  variant = "info",
  dismissLabel = "Dismiss notification",
  onDismiss,
  className
}: VisualAlertProps) {
  const rootClass = ["upli-alert", className].filter(Boolean).join(" ");

  return (
    <section
      className={rootClass}
      data-variant={variant}
      role={variant === "danger" ? "alert" : "status"}
      aria-live={variant === "danger" ? "assertive" : "polite"}
    >
      <span className="upli-alert-symbol" aria-hidden="true">{SYMBOLS[variant]}</span>
      <div>
        <h2>{title}</h2>
        <div className="upli-alert-message">{children}</div>
      </div>
      {onDismiss ? (
        <button type="button" className="upli-alert-dismiss" onClick={onDismiss}>
          <span aria-hidden="true">×</span>
          <span className="upli-visually-hidden">{dismissLabel}</span>
        </button>
      ) : null}
    </section>
  );
}
