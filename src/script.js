const CONTAINER = document.querySelector("section")
const PROJECTS = [
  "3d-background-boxes",
  "animated-countdown",
  "animated-navigation",
  "auto-text-effect",
  "background-slider",
  "blurry-loading",
  "button-ripple-effect",
  "content-placeholder",
  "custom-range-slider",
  "dad-jokes",
  "double-click-heart",
  "double-vertical-slider",
  "drag-n-drop",
  "drawing-app",
  "drink-water",
  "event-keycodes",
  "expanding-cards",
  "faq-collapse",
  "feedback-ui-design",
  "form-wave-animation",
  "github-profiles",
  "good-cheap-fast-checkboxes",
  "hidden-search-widget",
  "hoverboard",
  "image-carousel",
  "incrementing-counter",
  "insect-catch-game",
  "kinetic-css-loader",
  "live-user-filter",
  "mobile-tab-navigation",
  "movie-app",
  "netflix-navigation",
  "notes-app",
  "password-generator",
  "password-strength-background",
  "pokedex",
  "progress-steps",
  "quiz-app",
  "random-choice-picker",
  "random-image-feed",
  "rotating-navigation",
  "scroll-animation",
  "sound-board",
  "split-landing-page",
  "sticky-navbar",
  "testimonial-box-switcher",
  "theme-clock",
  "toast-notification",
  "todo-list",
  "verify-account-ui",
]

PROJECTS.forEach((project) => {
  let card = `
    <a
      class="card clr-neutral-white text-center bg-primary-blue border-1 shadow-1"
      href="./src/projects/${project}/"
    >
      <img src="./src/screenshots/${project}.png" alt="" />
      <p>${project}</p>
    </a>
  `

  CONTAINER.innerHTML += card
})
