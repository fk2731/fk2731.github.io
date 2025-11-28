/**
* Admin theme switching between light and dark modes.
 */
class ThemeSwitcherController {
  private html: HTMLElement;
  private checkbox!: HTMLInputElement;

  constructor() {
    this.html = document.documentElement;
    const checkboxEl = document.getElementById("theme-toggle-checkbox");

    // Fail fast: check required elements
    if (!(checkboxEl instanceof HTMLInputElement)) {
      const log = "ThemeSwitcher initialization failed: Required elements not found.";
      console.error(log);
      if (window) console.error(log);
      return;
    }

    this.checkbox = checkboxEl;
    this.init();
  }

  private setTheme(isDark: boolean): void {
    this.html.classList.toggle("dark", isDark);
    this.html.dataset.theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");

    this.checkbox.checked = isDark;
  }

  private init(): void {
    // -- Initial Theme State ---
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : this.html.classList.contains("dark");
    this.setTheme(isDark);

    this.checkbox.addEventListener("change", () => {
      this.setTheme(this.checkbox.checked);
    });
  }
}

new ThemeSwitcherController();
