
import { mount } from
  "https://cdn.jsdelivr.net/gh/rubjo/molten-glass@main/src/index.js";

const nav = document.getElementById("bottom-nav");
const content = document.getElementById("app-view");

if (nav && content && window.html2canvas) {
  try {
    const glass = mount(nav, {
      html2canvas: window.html2canvas,

      // Clear, subtle refraction
      refraction: 0.15,
      twist: 0.06,
      edgeExponent: 5.0,

      // Gentle reflections
      specular: 0.22,
      chromaticAberration: 0.035,

      // Nearly invisible white tint
      tint: [1, 1, 1],
      tintStrength: 0.010,

      // Low blur, like Flutter
      canvasBlur: 0,
      canvasOpacity: 1.0,

      // iPhone performance
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      captureScale: 1.0,

      background: null,
      raiseContent: true,
      draggable: false
    });

    nav.classList.add("webgl-glass-active");

    let refreshTimer;

    function refreshGlass() {
      clearTimeout(refreshTimer);

      refreshTimer = setTimeout(() => {
        if (!document.hidden) {
          glass.recapture();
        }
      }, 350);
    }

    const observer = new MutationObserver(refreshGlass);

    observer.observe(content, {
      childList: true,
      subtree: true,
      characterData: true
    });

    window.addEventListener("pageshow", refreshGlass);

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) refreshGlass();
    });

  } catch (error) {
    console.warn("Liquid Glass unavailable:", error);
  }
}
