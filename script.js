const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-links a, .footer-links a, .hero-actions a, .final-cta a, .pricing-card a");
const form = document.querySelector("[data-early-form]");
const successMessage = document.querySelector("[data-form-success]");
const storageKey = "filterWizardEarlyAccess";

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 8);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
}

function toggleNav() {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("nav-open", !isOpen);
  navMenu.classList.toggle("open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function getStoredSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch (error) {
    console.warn("Filter Wizard submissions could not be read from localStorage.", error);
    return [];
  }
}

function saveSubmission(submission) {
  const submissions = getStoredSubmissions();
  submissions.push(submission);
  localStorage.setItem(storageKey, JSON.stringify(submissions));
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const photo = formData.get("filterPhoto");
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    customerType: formData.get("customerType"),
    filterCount: formData.get("filterCount"),
    filterSize: formData.get("filterSize"),
    frequency: formData.get("frequency"),
    filterPhoto: photo && photo.name ? {
      name: photo.name,
      type: photo.type,
      size: photo.size
    } : null,
    submittedAt: new Date().toISOString()
  };

  saveSubmission(submission);
  console.log("Filter Wizard early access submission:", submission);

  successMessage.hidden = false;
  form.reset();
  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

if (header && navToggle && navMenu && form && successMessage) {
  setHeaderState();
  setupRevealAnimations();

  window.addEventListener("scroll", setHeaderState, { passive: true });

  navToggle.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        closeNav();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("open")) {
      closeNav();
    }
  });

  form.addEventListener("submit", handleFormSubmit);

  form.addEventListener("input", () => {
    successMessage.hidden = true;
  });
}
