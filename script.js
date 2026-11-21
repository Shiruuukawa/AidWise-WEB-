
"use strict";

// =====================================================
// AidWise Web
// Client-side recreation of the Flutter design.
// Medical guides other than the blister example are
// illustrative and need clinical review before release.
// =====================================================

const PARTS = [
  "Head",
  "Face",
  "Eyes",
  "Nose",
  "Mouth and teeth",
  "Neck",
  "Shoulders and arms",
  "Chest",
  "Stomach",
  "Back",
  "Hands and fingers",
  "Wrists",
  "Legs",
  "Ankles",
  "Feet and toes"
];

const GUIDES = {
  blister: {
    title: "Foot blister",
    subtitle: "A fluid-filled pocket on the skin",
    description:
      "A small pocket of fluid under the skin, often caused by rubbing or friction.",
    part: "Feet and toes",
    symptoms: [
      "A raised pocket of clear fluid",
      "Tender or sore skin",
      "Discomfort when walking"
    ],
    causes: [
      "Shoes rubbing against the skin",
      "Long walks, sport or repeated friction"
    ],
    warning:
      "Hot skin, green or yellow pus, or redness around the blister may mean infection. Redness may be harder to see on darker skin.",
    urgent:
      "Seek medical advice if the blister is very painful or looks infected.",
    steps: [
      {
        title: "Clean gently",
        text: "Wash the area and pat the skin dry."
      },
      {
        title: "Cover and protect",
        text: "Use a soft plaster or padded dressing."
      },
      {
        title: "If it bursts",
        text: "Wash your hands, let the fluid drain, then cover it. Do not peel off the skin."
      }
    ],
    avoid:
      "Do not burst the blister or pick the skin. Avoid shoes or equipment that caused the rubbing.",
    source: "NHS",
    url: "https://www.nhs.uk/conditions/blisters/"
  },

  bruise: {
    title: "Bruises",
    subtitle: "Tenderness or a change in skin colour",
    description:
      "A bruise happens when small blood vessels under the skin are damaged.",
    part: "Legs",
    symptoms: [
      "Skin discolouration",
      "Tenderness or swelling",
      "Pain around the affected area"
    ],
    causes: [
      "A bump, impact or fall",
      "Pressure against the skin"
    ],
    warning:
      "Seek medical advice for severe pain, extensive swelling, unexplained bruising or difficulty moving the affected area.",
    urgent:
      "Get medical help if the injury follows a serious fall or you suspect a broken bone.",
    steps: [
      {
        title: "Rest the area",
        text: "Avoid activities that make the pain worse."
      },
      {
        title: "Apply a cool compress",
        text: "Use a cold pack wrapped in cloth for a short period. Never place ice directly against skin."
      },
      {
        title: "Monitor changes",
        text: "Seek advice if pain or swelling worsens."
      }
    ],
    avoid:
      "Avoid pressing or massaging a painful injury.",
    source: "Sample educational guide",
    url: ""
  },

  cut: {
    title: "Cuts",
    subtitle: "Broken skin or bleeding",
    description:
      "A cut is an injury where the surface of the skin is broken.",
    part: "Hands and fingers",
    symptoms: [
      "Broken skin",
      "Bleeding",
      "Pain around the wound"
    ],
    causes: [
      "Contact with a sharp object",
      "Accidental scraping or impact"
    ],
    warning:
      "Heavy bleeding, a deep wound, loss of sensation or signs of infection need prompt medical attention.",
    urgent:
      "Get emergency help for severe bleeding. Apply firm direct pressure with a clean dressing while seeking help.",
    steps: [
      {
        title: "Control bleeding",
        text: "For a minor cut, apply gentle direct pressure using a clean dressing."
      },
      {
        title: "Clean the wound",
        text: "Rinse a minor wound with clean running water."
      },
      {
        title: "Protect the cut",
        text: "Cover with a clean dressing and monitor for infection."
      }
    ],
    avoid:
      "Do not remove a deeply embedded object. Seek professional medical help.",
    source: "Sample educational guide",
    url: ""
  },

  fracture: {
    title: "Suspected fracture",
    subtitle: "Possible broken bone or deformity",
    description:
      "A fracture is a break or crack in a bone. A healthcare professional must assess a suspected fracture.",
    part: "Arms and legs",
    symptoms: [
      "Significant pain",
      "Swelling or deformity",
      "Difficulty moving or bearing weight"
    ],
    causes: [
      "Falls or direct impact",
      "Sports or road accidents"
    ],
    warning:
      "A suspected fracture requires prompt medical assessment. Serious injuries may require emergency services.",
    urgent:
      "Get emergency help for severe injury, heavy bleeding, exposed bone or reduced consciousness.",
    steps: [
      {
        title: "Limit movement",
        text: "Keep the affected area still and supported in a comfortable position."
      },
      {
        title: "Do not straighten",
        text: "Do not try to straighten a deformed limb."
      },
      {
        title: "Seek medical care",
        text: "Arrange prompt professional assessment."
      }
    ],
    avoid:
      "Do not force the injured area into position or attempt to reset the bone.",
    source: "Sample educational guide",
    url: ""
  },

  burn: {
    title: "Burns",
    subtitle: "Skin injury caused by heat or another source",
    description:
      "A burn damages the skin or underlying tissue.",
    part: "Hands and fingers",
    symptoms: [
      "Pain or tenderness",
      "Skin colour changes",
      "Blisters or damaged skin"
    ],
    causes: [
      "Hot objects or liquids",
      "Heat, chemicals or electricity"
    ],
    warning:
      "Seek urgent medical advice for deep, extensive, chemical or electrical burns, or burns affecting sensitive areas.",
    urgent:
      "Call emergency services for serious burns, electrical injuries or breathing difficulties.",
    steps: [
      {
        title: "Move away from danger",
        text: "Stop contact with the source if safe to do so."
      },
      {
        title: "Cool a minor thermal burn",
        text: "Cool with cool running water. Seek professional advice for significant burns."
      },
      {
        title: "Protect the area",
        text: "Avoid further friction or injury while arranging appropriate care."
      }
    ],
    avoid:
      "Do not use ice directly, apply household oils or pull away clothing stuck to the burn.",
    source: "Sample educational guide",
    url: ""
  },

  sprain: {
    title: "Sprains",
    subtitle: "Pain and swelling around a joint",
    description:
      "A sprain involves damage to ligaments surrounding a joint.",
    part: "Ankles",
    symptoms: [
      "Pain around a joint",
      "Swelling",
      "Difficulty moving normally"
    ],
    causes: [
      "Twisting a joint",
      "Sudden awkward movement"
    ],
    warning:
      "Get medical assessment if you cannot bear weight, have severe pain or suspect a fracture.",
    urgent:
      "Seek prompt care for a visibly deformed joint or severe injury.",
    steps: [
      {
        title: "Stop the activity",
        text: "Rest the injured joint and avoid painful movement."
      },
      {
        title: "Support the injury",
        text: "Keep the joint comfortable and avoid unnecessary strain."
      },
      {
        title: "Monitor symptoms",
        text: "Seek medical assessment when pain or swelling is significant or persistent."
      }
    ],
    avoid:
      "Do not force movement through severe pain.",
    source: "Sample educational guide",
    url: ""
  },

  nosebleed: {
    title: "Nosebleed",
    subtitle: "Bleeding from the nose",
    description:
      "A nosebleed occurs when small blood vessels inside the nose bleed.",
    part: "Nose",
    symptoms: [
      "Blood coming from one or both nostrils",
      "Blood dripping from the nose"
    ],
    causes: [
      "Nose irritation",
      "Minor injury or dry air"
    ],
    warning:
      "Seek urgent advice if bleeding is heavy, follows a serious injury, or does not stop.",
    urgent:
      "Seek emergency care for severe bleeding or breathing difficulties.",
    steps: [
      {
        title: "Sit upright",
        text: "Lean slightly forward rather than backward."
      },
      {
        title: "Pinch the soft part",
        text: "Pinch the soft part of the nose and breathe through the mouth for 10 to 15 minutes."
      },
      {
        title: "Reassess",
        text: "If bleeding continues or is severe, seek medical help."
      }
    ],
    avoid:
      "Do not tilt your head backward.",
    source: "Sample educational guide",
    url: ""
  }
};

const PART_GUIDES = {
  "Head": ["bruise", "cut", "fracture"],
  "Face": ["bruise", "cut", "burn"],
  "Eyes": ["cut", "bruise"],
  "Nose": ["nosebleed", "bruise", "cut"],
  "Mouth and teeth": ["cut", "bruise"],
  "Neck": ["sprain", "bruise", "fracture"],
  "Shoulders and arms": ["bruise", "sprain", "cut", "fracture"],
  "Chest": ["bruise", "cut", "fracture"],
  "Stomach": ["bruise", "cut"],
  "Back": ["bruise", "sprain", "fracture"],
  "Hands and fingers": ["cut", "burn", "bruise", "blister"],
  "Wrists": ["sprain", "bruise", "fracture"],
  "Legs": ["bruise", "cut", "fracture", "sprain"],
  "Ankles": ["sprain", "bruise", "fracture"],
  "Feet and toes": ["blister", "bruise", "cut", "fracture"]
};

const REGIONS = {
  "": {
    name: "Choose your region",
    number: "",
    note: "No region selected. Numbers vary by location."
  },
  PH: {
    name: "Philippines",
    number: "911",
    note: "National emergency hotline. Local services may have additional numbers."
  },
  US: {
    name: "United States",
    number: "911",
    note: "Emergency services."
  },
  CA: {
    name: "Canada",
    number: "911",
    note: "Emergency services."
  },
  GB: {
    name: "United Kingdom",
    number: "999",
    note: "999 or 112 for emergency services."
  },
  AU: {
    name: "Australia",
    number: "000",
    note: "Emergency services."
  },
  HK: {
    name: "Hong Kong",
    number: "999",
    note: "Emergency services."
  },
  SG: {
    name: "Singapore",
    number: "995",
    note: "Emergency ambulance and fire services."
  },
  JP: {
    name: "Japan",
    number: "119",
    note: "Emergency ambulance and fire services."
  }
};

const appView = document.getElementById("app-view");
const navElement = document.getElementById("bottom-nav");
const toastElement = document.getElementById("toast");

function readSetting(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (_) {
    return fallback;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    // The UI remains usable when browser storage is unavailable.
  }
}

const state = {
  page: "home",
  part: "Feet and toes",
  injury: "blister",
  region: readSetting("aidwise_region", ""),
  theme: readSetting("aidwise_theme", "system"),
  homeQuery: "",
  partQuery: "",
  suggestionQuery: ""
};

if (!Object.hasOwn(REGIONS, state.region)) {
  state.region = "";
}

if (!["light", "dark", "system"].includes(state.theme)) {
  state.theme = "system";
}

const pageStack = [];

function icon(name, extraClass = "") {
  return `
    <svg class="icon ${extraClass}" aria-hidden="true">
      <use href="#i-${name}"></use>
    </svg>
  `;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function alertBox(title, message) {
  return `
    <div class="warning-card">
      <strong>${escapeHTML(title)}</strong>
      <p>${escapeHTML(message)}</p>
    </div>
  `;
}

function infoBox(title, message) {
  return `
    <div class="info-box">
      <strong>${escapeHTML(title)}</strong>
      <p>${escapeHTML(message)}</p>
    </div>
  `;
}

function pageTop(title) {
  return `
    <div class="page-top">
      <button class="back-button" data-action="back"
              aria-label="Go back">
        ${icon("back")}
      </button>
      <strong>${escapeHTML(title)}</strong>
    </div>
  `;
}

function primaryButton(text, action) {
  return `
    <button class="primary-button" data-action="${action}">
      <span>${escapeHTML(text)}</span>
      ${icon("arrow")}
    </button>
  `;
}

function renderSearchResult(title, subtitle, attributes, type) {
  return `
    <button class="search-result" ${attributes}>
      ${icon(type === "part" ? "person" : "cross")}
      <span>
        <strong>${escapeHTML(title)}</strong>
        <small>${escapeHTML(subtitle)}</small>
      </span>
      ${icon("chevron")}
    </button>
  `;
}

// ------------------------- Navigation -------------------------

function goTo(page, changes = {}) {
  pageStack.push({
    page: state.page,
    part: state.part,
    injury: state.injury
  });

  Object.assign(state, changes, { page });
  render();
}

function goBack() {
  if (pageStack.length) {
    const previous = pageStack.pop();
    Object.assign(state, previous);
    render();
    return;
  }

  state.page = "home";
  render();
}

function selectTab(tab) {
  pageStack.length = 0;
  state.page = tab === "guide" ? "parts" : tab;
  render();
}

function currentTab() {
  if (["parts", "injuries", "info", "steps", "suggest"].includes(state.page)) {
    return "guide";
  }

  if (["about", "privacy"].includes(state.page)) {
    return "settings";
  }

  return state.page;
}

function updateNavigation() {
  const tab = currentTab();
  const tabNames = ["home", "guide", "emergency", "settings"];
  const index = Math.max(tabNames.indexOf(tab), 0);

  navElement.style.setProperty("--active", index);

  document.querySelectorAll("[data-nav]").forEach(button => {
    const active = button.dataset.nav === tab;
    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function render() {
  const screens = {
    home: renderHome,
    parts: renderParts,
    injuries: renderInjuries,
    info: renderInformation,
    steps: renderSteps,
    emergency: renderEmergency,
    settings: renderSettings,
    about: renderAbout,
    privacy: renderPrivacy,
    suggest: renderSuggestions
  };

  const screen = screens[state.page] || renderHome;
  appView.innerHTML = `<div class="page">${screen()}</div>`;

  updateNavigation();
  applyTheme();
  window.scrollTo({ top: 0, behavior: "instant" });
  document.title = `AidWise | ${state.page[0].toUpperCase()}${state.page.slice(1)}`;
}

// ------------------------- Home -------------------------

function renderHome() {
  return `
    <div class="brand-row">
      <div class="brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <span>AidWise</span>
      </div>

      <button class="icon-button" data-action="emergency"
              title="Emergency information" aria-label="Emergency">
        ${icon("phone")}
      </button>
    </div>

    <div class="eyebrow">Your everyday first-aid companion</div>
    <h1 style="margin-top:19px">Hi there, stay prepared.</h1>
    <p class="hero-subtitle">What do you need help with?</p>

    <label class="search-wrap">
      ${icon("search")}
      <input type="search" id="home-search"
             autocomplete="off"
             placeholder="Search an injury or symptom"
             value="${escapeHTML(state.homeQuery)}"
             aria-label="Search injuries">
    </label>

    <div id="home-results" class="search-results">
      ${state.homeQuery.trim() ? searchResults(state.homeQuery) : ""}
    </div>

    <section class="primary-card">
      ${icon("cross")}
      <h2>First aid starts here.</h2>
      <p>Choose a body part and find clear, practical guidance.</p>
      ${primaryButton("Start first aid guide", "guide")}
    </section>

    <section class="section">
      <h2>Explore by body part</h2>
      <div class="quick-parts">
        ${["Head", "Hands and fingers", "Feet and toes"].map(part => `
          <button class="quick-part" data-part="${escapeHTML(part)}">
            ${icon("person")}
            <span>${part === "Hands and fingers" ? "Hands" : part}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <button class="link-card" data-action="suggest">
        ${icon("sparkles", "sparkle-icon")}
        <span class="card-text">
          <strong>Need help finding a guide?</strong>
          <small>Local suggestions · not a diagnosis</small>
        </span>
        ${icon("chevron")}
      </button>
    </section>

    <section class="section">
      <div class="soft-card">
        <h3>Safety first</h3>
        <p class="muted">
          Serious injury? Contact emergency services.
          Don't wait for an AI response.
        </p>
      </div>
    </section>
  `;
}

// ------------------------- Body parts -------------------------

function renderPartOptions(query = "") {
  const filter = query.toLowerCase().trim();

  const filtered = PARTS.filter(part =>
    part.toLowerCase().includes(filter)
  );

  if (!filtered.length) {
    return `<div class="search-empty">No matching body parts found.</div>`;
  }

  return filtered.map(part => `
    <button class="part-option ${part === "Feet and toes" ? "featured" : ""}"
            data-part="${escapeHTML(part)}">
      <span>${escapeHTML(part)}</span>
      ${icon("chevron")}
    </button>
  `).join("");
}

function renderParts() {
  return `
    ${pageTop("First aid guide")}
    <div class="step-eyebrow">Step 1 of 3 · Body part</div>
    <h1>Where does it hurt?</h1>
    <p class="page-subtitle">
      Choose the affected area to find a guide.
    </p>

    <label class="search-wrap">
      ${icon("search")}
      <input type="search" id="part-search"
             placeholder="Search body parts"
             autocomplete="off"
             value="${escapeHTML(state.partQuery)}">
    </label>

    <div class="part-grid" id="part-results">
      ${renderPartOptions(state.partQuery)}
    </div>

    <p class="muted small" style="margin-top:23px">
      Not sure? Choose the closest affected area.
      <br>Serious injury? Use Emergency below.
    </p>
  `;
}

// ------------------------- Injury selection -------------------------

function renderInjuries() {
  const available = PART_GUIDES[state.part] || [
    "bruise", "cut", "fracture"
  ];

  return `
    ${pageTop("Body parts")}
    <div class="step-eyebrow">Step 2 of 3 · Injury</div>
    <h1>${escapeHTML(state.part)}</h1>
    <p class="page-subtitle">
      What happened? Choose the closest match.
    </p>

    <div class="injury-list">
      ${available.map(key => {
        const guide = GUIDES[key];

        return `
          <button class="injury-option" data-injury="${key}">
            ${icon(key === "fracture" ? "alert" : "cross")}
            <span class="injury-content">
              <strong>${escapeHTML(guide.title)}</strong>
              <small>${escapeHTML(guide.subtitle)}</small>
            </span>
            ${icon("chevron")}
          </button>
        `;
      }).join("")}
    </div>

    <div class="section">
      ${infoBox(
        "Unsure which injury to choose?",
        "Describe what happened to find a possible guide. This does not diagnose an injury."
      )}

      <button class="link-card" data-action="suggest">
        ${icon("sparkles", "sparkle-icon")}
        <span class="card-text">
          <strong>Get a guide suggestion</strong>
          <small>Search available guidance</small>
        </span>
        ${icon("chevron")}
      </button>
    </div>

    ${alertBox(
      "Don't delay urgent care",
      "Severe pain, heavy bleeding or a visibly deformed limb? Seek urgent medical help."
    )}
  `;
}

// ------------------------- Injury information -------------------------

function bulletList(items) {
  return `<ul>${items.map(item =>
    `<li>${escapeHTML(item)}</li>`
  ).join("")}</ul>`;
}

function renderInformation() {
  const guide = GUIDES[state.injury] || GUIDES.blister;

  return `
    ${pageTop(state.part)}
    <div class="step-eyebrow">Step 3 of 3 · Understand & act</div>

    <h1>${escapeHTML(guide.title)}</h1>
    <p class="page-subtitle">${escapeHTML(guide.description)}</p>

    ${infoBox(
      "General information · not a diagnosis",
      guide.source === "NHS"
        ? "Review the original source for complete guidance."
        : "This is sample educational content awaiting clinical review."
    )}

    <section class="guide-section">
      <h2>Common symptoms</h2>
      ${bulletList(guide.symptoms)}
    </section>

    <section class="guide-section">
      <h2>Possible causes</h2>
      ${bulletList(guide.causes)}
    </section>

    ${alertBox("Watch for warning signs", guide.warning)}

    ${primaryButton("View first-aid steps", "steps")}

    <p class="source-line">
      Source: ${escapeHTML(guide.source)}
      ${guide.url ? `
        <br><a href="${guide.url}" target="_blank"
               rel="noopener noreferrer">
          ${escapeHTML(guide.url)}
        </a>` : ""}
    </p>
  `;
}

// ------------------------- First-aid instructions -------------------------

function renderSteps() {
  const guide = GUIDES[state.injury] || GUIDES.blister;

  return `
    ${pageTop(guide.title)}
    <h1>First-aid steps</h1>
    <p class="page-subtitle">
      General guidance for ${escapeHTML(guide.title.toLowerCase())}.
      Ask a healthcare professional if unsure.
    </p>

    ${alertBox("Get medical advice promptly", guide.urgent)}

    <ol class="step-list">
      ${guide.steps.map((step, index) => `
        <li class="step-row">
          <span class="step-number">${index + 1}</span>
          <div>
            <strong>${escapeHTML(step.title)}</strong>
            <p>${escapeHTML(step.text)}</p>
          </div>
        </li>
      `).join("")}
    </ol>

    ${infoBox("What to avoid", guide.avoid)}

    <button class="link-card" data-action="suggest">
      ${icon("sparkles", "sparkle-icon")}
      <span class="card-text">
        <strong>Need a simpler explanation?</strong>
        <small>Find related guides. Never delay care.</small>
      </span>
      ${icon("chevron")}
    </button>

    <p class="source-line">
      Source: ${escapeHTML(guide.source)}
      ${guide.url ? `
        · <a href="${guide.url}" target="_blank"
             rel="noopener noreferrer">Read source</a>` : ""}
      <br>Educational use only. Not a substitute for professional care.
    </p>
  `;
}

// ------------------------- Search and suggestions -------------------------

function searchResults(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    return `<div class="search-empty">
      Try searching for "blister", "cut" or "ankle".
    </div>`;
  }

  const matches = [];

  for (const part of PARTS) {
    if (part.toLowerCase().includes(q)) {
      matches.push({
        type: "part",
        title: part,
        subtitle: "Explore injuries for this body part",
        key: part
      });
    }
  }

  for (const [key, guide] of Object.entries(GUIDES)) {
    const searchable = [
      guide.title,
      guide.subtitle,
      guide.description,
      guide.part,
      ...guide.symptoms,
      ...guide.causes
    ].join(" ").toLowerCase();

    if (searchable.includes(q)) {
      matches.push({
        type: "injury",
        title: guide.title,
        subtitle: guide.subtitle,
        key
      });
    }
  }

  if (!matches.length) {
    return `<div class="search-empty">
      No matching guide found. Try a different word.
      Seek medical help for serious symptoms.
    </div>`;
  }

  return matches.slice(0, 12).map(result => {
    const attribute = result.type === "part"
      ? `data-part="${escapeHTML(result.key)}"`
      : `data-injury="${escapeHTML(result.key)}"`;

    return renderSearchResult(
      result.title,
      result.subtitle,
      attribute,
      result.type
    );
  }).join("");
}

function renderSuggestions() {
  return `
    ${pageTop("Guide suggestions")}
    <div class="step-eyebrow">Local guide finder</div>
    <h1>What do you need help with?</h1>
    <p class="page-subtitle">
      Describe an injury or symptom using a few words.
      AidWise will search the available guides.
    </p>

    ${infoBox(
      "Not a medical diagnosis",
      "This web demo uses keyword matching, not artificial intelligence. It does not identify medical conditions."
    )}

    <label class="field-label" for="suggest-input">
      Describe the problem
    </label>

    <textarea class="text-area" id="suggest-input"
              placeholder="Example: I have a blister on my foot">${escapeHTML(state.suggestionQuery)}</textarea>

    <div class="suggestion-box">
      <h2>Suggested guides</h2>
      <div id="suggest-results" class="search-results">
        ${searchResults(state.suggestionQuery)}
      </div>
    </div>

    ${alertBox(
      "Safety first",
      "If someone has severe symptoms or a serious injury, contact local emergency services instead of relying on a search result."
    )}
  `;
}

// ------------------------- Emergency -------------------------

function regionOptions() {
  return Object.entries(REGIONS).map(([code, region]) => `
    <option value="${code}"
            ${state.region === code ? "selected" : ""}>
      ${escapeHTML(region.name)}
    </option>
  `).join("");
}

function renderEmergency() {
  const region = REGIONS[state.region] || REGIONS[""];

  return `
    <h1>Emergency</h1>

    <div class="emergency-hero">
      ${icon("alert")}
      <h2>Serious injury?<br>Get help now.</h2>
      <p>
        Contact local emergency services for life-threatening injuries.
        Don't wait for this app or an AI response.
      </p>
    </div>

    <section class="section soft-card">
      <h3>Your emergency number</h3>

      <p class="muted small">
        Choose your country or region to see a commonly used emergency number.
      </p>

      <label for="emergency-region" class="field-label">
        Country or region
      </label>

      <select class="select-field" id="emergency-region"
              data-setting="region">
        ${regionOptions()}
      </select>

      ${region.number ? `
        <div class="emergency-number">
          ${escapeHTML(region.number)}
        </div>
        <a class="call-button"
           href="tel:${region.number.replace(/[^0-9]/g, "")}">
          ${icon("phone")}
          <span>Call ${escapeHTML(region.number)}</span>
        </a>
      ` : `
        <p class="muted small" style="margin-top:16px">
          No region selected yet.
        </p>
      `}

      <p class="muted small" style="margin-top:12px">
        ${escapeHTML(region.note)}
        Verify local numbers, especially when travelling.
      </p>
    </section>

    <section class="section">
      <h2>While you get help</h2>
      <ol class="step-list">
        <li class="step-row">
          <span class="step-number">1</span>
          <p>Make sure you are safe before helping.</p>
        </li>
        <li class="step-row">
          <span class="step-number">2</span>
          <p>Tell the dispatcher your location and what happened.</p>
        </li>
        <li class="step-row">
          <span class="step-number">3</span>
          <p>Follow the dispatcher's instructions.</p>
        </li>
      </ol>

      ${infoBox(
        "On campus?",
        "Ask someone nearby to alert campus staff while emergency services are contacted."
      )}
    </section>
  `;
}

// ------------------------- Settings -------------------------

function renderSettings() {
  return `
    <h1>Settings</h1>
    <p class="page-subtitle">Make AidWise work for you.</p>

    <div class="section-label">Preferences</div>

    <div class="setting-row">
      ${icon("globe")}
      <span class="setting-text">
        <strong>Language</strong>
        <small>English · other translations planned</small>
      </span>
    </div>

    <div class="setting-row">
      ${icon("phone")}
      <span class="setting-text">
        <strong>Emergency region</strong>
        <small>Select your country or region</small>
      </span>
    </div>

    <label class="field-label" for="settings-region">
      Emergency country or region
    </label>
    <select class="select-field" id="settings-region"
            data-setting="region">
      ${regionOptions()}
    </select>

    <label class="field-label" for="settings-theme">
      Appearance
    </label>
    <select class="select-field" id="settings-theme"
            data-setting="theme">
      <option value="system"
        ${state.theme === "system" ? "selected" : ""}>
        Follow device theme
      </option>
      <option value="light"
        ${state.theme === "light" ? "selected" : ""}>
        Light theme
      </option>
      <option value="dark"
        ${state.theme === "dark" ? "selected" : ""}>
        Dark theme
      </option>
    </select>

    <div class="section-label">Information & privacy</div>

    <button class="setting-row" data-action="about">
      ${icon("info")}
      <span class="setting-text">
        <strong>About AidWise</strong>
        <small>Purpose, sources and limitations</small>
      </span>
      ${icon("chevron")}
    </button>

    <button class="setting-row" data-action="privacy">
      ${icon("shield")}
      <span class="setting-text">
        <strong>Privacy information</strong>
        <small>Understand how your information is used</small>
      </span>
      ${icon("chevron")}
    </button>

    ${infoBox(
      "Before using guide suggestions",
      "Don't include names, student IDs, medical records or other personal details in a description."
    )}

    <p class="footer-note">
      AidWise · Web design preview<br>
      First-aid content needs clinical review before release.
    </p>
  `;
}

// ------------------------- About and privacy -------------------------

function renderAbout() {
  return `
    ${pageTop("About")}

    <div class="about-brand">
      <div class="brand-mark large"></div>
      <h1>AidWise</h1>
      <p class="muted">Know what to do. Be ready to help.</p>
    </div>

    <section class="section">
      <h2>First aid for student life</h2>
      <p class="muted">
        AidWise helps students find clear first-aid information
        by body part and injury, with practical steps and signs
        that need medical attention.
      </p>
    </section>

    ${infoBox(
      "AI supports. It doesn't diagnose.",
      "The current web demonstration uses local keyword matching. Automated suggestions must never replace professional advice."
    )}

    <div class="soft-card" style="margin-top:17px">
      <h3>First-aid information</h3>
      <strong>Sample guide: NHS — Blisters</strong>
      <p>
        <a href="https://www.nhs.uk/conditions/blisters/"
           target="_blank" rel="noopener noreferrer">
          nhs.uk/conditions/blisters
        </a>
      </p>
      <p class="muted small">
        Other sample guides still need clinical review and
        source verification before release.
      </p>
    </div>

    ${alertBox(
      "Medical disclaimer",
      "For education and general guidance only. Not a substitute for medical diagnosis, treatment or certified first-aid training. In an emergency, contact local emergency services."
    )}
  `;
}

function renderPrivacy() {
  return `
    ${pageTop("Privacy")}
    <h1>Privacy information</h1>

    <section class="section">
      <h2>How this demo works</h2>
      <p class="muted">
        This web version runs in your browser. Injury searches
        and guide suggestions use locally stored data in script.js.
      </p>
    </section>

    ${infoBox(
      "Preferences on this device",
      "AidWise saves your selected appearance and emergency region in your browser's local storage."
    )}

    ${infoBox(
      "Search descriptions",
      "This demonstration does not send descriptions to an AI server. Search matching happens within your browser."
    )}

    ${infoBox(
      "External links",
      "Opening a medical source website or using a telephone link may involve external services and their own privacy practices."
    )}

    ${alertBox(
      "Protect personal information",
      "Avoid entering private medical details or identifying information into shared computers or untrusted websites."
    )}
  `;
}

// ------------------------- Theme and clock -------------------------

function applyTheme() {
  const darkBySystem = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolved = state.theme === "system"
    ? (darkBySystem ? "dark" : "light")
    : state.theme;

  document.documentElement.dataset.theme = resolved;

  const color = resolved === "dark" ? "#111216" : "#ffffff";
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", color);
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false
  });

  document.getElementById("status-clock").textContent = time;
}

let toastTimeout;

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}

// ------------------------- Events -------------------------

document.addEventListener("click", event => {
  const button = event.target.closest(
    "[data-nav], [data-action], [data-part], [data-injury]"
  );

  if (!button) return;

  if (button.dataset.nav) {
    selectTab(button.dataset.nav);
    return;
  }

  if (button.dataset.part) {
    goTo("injuries", { part: button.dataset.part });
    return;
  }

  if (button.dataset.injury) {
    const key = button.dataset.injury;
    const guide = GUIDES[key];

    if (!guide) return;

    // Preserve the selected body part when browsing a guide.
    // Search results instead use the guide's default body part.
    const parentPage = state.page;
    const part = ["home", "suggest"].includes(parentPage)
      ? guide.part
      : state.part;

    goTo("info", { injury: key, part });
    return;
  }

  switch (button.dataset.action) {
    case "back":
      goBack();
      break;

    case "guide":
      goTo("parts");
      break;

    case "emergency":
      selectTab("emergency");
      break;

    case "steps":
      goTo("steps");
      break;

    case "suggest":
      goTo("suggest");
      break;

    case "about":
      goTo("about");
      break;

    case "privacy":
      goTo("privacy");
      break;

    default:
      break;
  }
});

document.addEventListener("input", event => {
  const target = event.target;

  if (target.id === "home-search") {
    state.homeQuery = target.value;

    const results = document.getElementById("home-results");
    if (results) {
      results.innerHTML = target.value.trim()
        ? searchResults(target.value)
        : "";
    }
  }

  if (target.id === "part-search") {
    state.partQuery = target.value;

    const results = document.getElementById("part-results");
    if (results) {
      results.innerHTML = renderPartOptions(target.value);
    }
  }

  if (target.id === "suggest-input") {
    state.suggestionQuery = target.value;

    const results = document.getElementById("suggest-results");
    if (results) {
      results.innerHTML = searchResults(target.value);
    }
  }
});

document.addEventListener("change", event => {
  const setting = event.target.dataset.setting;
  if (!setting) return;

  if (setting === "region") {
    const value = event.target.value;

    if (!Object.hasOwn(REGIONS, value)) return;

    state.region = value;
    saveSetting("aidwise_region", value);

    render();
    showToast("Emergency region updated.");
  }

  if (setting === "theme") {
    const value = event.target.value;
    if (!["light", "dark", "system"].includes(value)) return;

    state.theme = value;
    saveSetting("aidwise_theme", value);

    applyTheme();
    showToast("Appearance updated.");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && pageStack.length) {
    const active = document.activeElement;
    if (active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)) {
      active.blur();
    } else {
      goBack();
    }
  }
});

if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener?.("change", () => {
      if (state.theme === "system") applyTheme();
    });
}


// Prevent iOS pinch-to-zoom gestures
document.addEventListener("gesturestart", (event) => {
  event.preventDefault();
}, { passive: false });

document.addEventListener("gesturechange", (event) => {
  event.preventDefault();
}, { passive: false });

// Prevent multi-touch zoom
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });


// Initialize the app.
applyTheme();
render();