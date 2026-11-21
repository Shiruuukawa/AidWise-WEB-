
"use strict";

async function initializeGlass() {
  const nav = document.getElementById("bottom-nav");
  const content = document.getElementById("app-view");

  if (!nav || !content) {
    console.error("AidWise: Navigation or content missing.");
    return;
  }

  if (typeof window.html2canvas !== "function") {
    console.error("AidWise: html2canvas failed to load.");
    return;
  }

  try {
    // Load the renderer from our own repository.
    const { mount } = await import(
      "./vendor/molten-glass/index.js"
    );

    const glass = mount(nav, {
      html2canvas: window.html2canvas,

      // Flutter-inspired clear glass
      refraction: 0.15,
      twist: 0.06,
      edgeExponent: 5.0,

      // Subtle edge reflections
      specular: 0.22,
      chromaticAberration: 0.035,

      // Nearly transparent
      tint: [1, 1, 1],
      tintStrength: 0.010,

      // Sharp background
      canvasBlur: 0.0,
      canvasOpacity: 1.0,

      // Performance settings
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      captureScale: 1.0,

      background: null,
      raiseContent: true,
      draggable: false
    });

    nav.classList.add("webgl-glass-active");

    // Accessible for debugging.
    window.aidwiseGlass = glass;

    console.log("AidWise: WebGL renderer initialized.");

    let refreshTimer;

    function refreshGlass() {
      clearTimeout(refreshTimer);

      refreshTimer = setTimeout(() => {
        if (document.hidden) return;

        try {
          glass.recapture();
        } catch (error) {
          console.error("AidWise glass capture error:", error);
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
    console.error("AidWise Liquid Glass failed:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeGlass,
    { once: true }
  );
} else {
  initializeGlass();
}
