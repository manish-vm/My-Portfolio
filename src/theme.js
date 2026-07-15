const toCssVariables = (tokens) =>
  Object.fromEntries(Object.entries(tokens).map(([key, value]) => [`--${key}`, value]));

export const createPortfolioTheme = () =>
  toCssVariables({
    bg: "#050816",
    panel: "rgba(15, 23, 42, 0.82)",
    "panel-soft": "rgba(15, 23, 42, 0.62)",
    "panel-strong": "#0f172a",
    text: "#f8fafc",
    muted: "#94a3b8",
    "text-soft": "#cbd5e1",
    "chip-text": "#dbeafe",
    line: "rgba(148, 163, 184, 0.18)",
    accent: "#22d3ee",
    "accent-2": "#8b5cf6",
    success: "#34d399",
    "surface-shadow": "0 20px 70px rgba(0, 0, 0, 0.2)",
    "image-shadow": "0 24px 80px rgba(0, 0, 0, 0.35)",
    "card-bg":
      "linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.64)), radial-gradient(circle at top right, rgba(34, 211, 238, 0.12), transparent 16rem)",
    "chip-bg": "rgba(255, 255, 255, 0.055)",
    "accent-bg": "rgba(34, 211, 238, 0.08)",
    "accent-line": "rgba(34, 211, 238, 0.35)",
    "brand-gradient": "linear-gradient(135deg, var(--accent), var(--accent-2))",
    "underline-gradient": "linear-gradient(90deg, var(--accent-2), var(--accent))",
  });
