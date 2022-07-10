import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(":root") as HTMLElement;

  const components = [
    "body-background",
    "card-background",
    "components-background",
    "card-box-shadow",
    "text-color",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}