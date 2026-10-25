const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const schedules = {
  one: [
    ["10:00 AM", "OPENING", "Doors Open & Welcome", "Collect your pass, find your crew, and explore the festival grounds.", "MAIN STAGE", "orange"],
    ["12:00 PM", "CREATIVE", "Campus Creators Showcase", "Discover student art, design, photography, and ideas.", "ART ZONE", "blue"],
    ["03:00 PM", "DANCE", "Move Mode Battles", "Crews take the floor for high-energy dance face-offs.", "ARENA", "purple"],
    ["06:30 PM", "LIVE MUSIC", "Soundwave After Hours", "End day one with live performances and festival lights.", "MAIN STAGE", "pink"]
  ],
  two: [
    ["09:30 AM", "WARM-UP", "Coffee, Crew & Check-in", "Start the day, meet other participants, and get ready.", "FESTIVAL HUB", "orange"],
    ["11:00 AM", "GAMING", "Level Up Arena Finals", "Final rounds, friendly rivalries, and campus gaming.", "GAME ZONE", "purple"],
    ["02:00 PM", "CREATIVE", "Make & Create Awards", "Celebrate the ideas and work of student creators.", "ART ZONE", "blue"],
    ["05:30 PM", "FINALE", "The Big Campus Finale", "A final celebration with performances and festival moments.", "MAIN STAGE", "pink"]
  ]
};

const timeline = document.querySelector("#timeline");
document.querySelectorAll(".day-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".day-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    timeline.innerHTML = schedules[button.dataset.day].map(([time, tag, title, description, place, color]) => `
      <article class="timeline-row">
        <time>${time}</time><span class="timeline-dot"></span>
        <div><span class="tag tag-${color}">${tag}</span><h3>${title}</h3><p>${description}</p></div>
        <span class="timeline-place">${place}</span>
      </article>`).join("");
  });
});

document.querySelector("#passForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email");
  document.querySelector("#formNote").textContent =
    `Thanks! ${email.value} was added to this demo's local confirmation — no data was sent.`;
  email.value = "";
});

document.querySelector("#year").textContent = new Date().getFullYear();
