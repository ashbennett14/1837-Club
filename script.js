const socialEvents = [
  {
    id: "castle-lodge-charity-golf-day",
    date: "2026-05-23",
    title: "Castle Lodge Charity Golf Day",
    time: "09:30 arrival, 11:20 first tee",
    location: "Milford Golf Course, Station Lane, Milford, GU8 5HS",
    host: "Castle Lodge 6657",
    type: "social",
    poster: "assets/charity-golf-day.jpg",
    posterAlt: "Castle Lodge Charity Golf Day poster",
    tags: ["£65 per person", "All abilities", "Charity golf"],
    description:
      "A fun charity golf day for all abilities, with bacon roll and hot drink on arrival, curry, beers and presentation after, trophies and prizes, and a prize for the best traditionally dressed golfer.",
  },
  {
    id: "smsa-charity-golf-day",
    date: "2026-05-29",
    title: "SMSA Charity Golf Day",
    time: "18 holes of golf",
    location: "Croham Hurst Golf Club",
    host: "Friends of James Terry and The Surrey Masonic Sports Association",
    type: "social",
    poster: "assets/smsa-golf-day.jpg",
    posterAlt: "SMSA Charity Golf Day poster",
    tags: ["£75", "£35 for club members", "Bacon roll and meal"],
    description:
      "Charity Golf Day presented by the Friends of James Terry and The Surrey Masonic Sports Association. Includes 18 holes of golf, bacon roll, two course meal, prizes, raffle, and the Rose Bowl trophy for the winning lady.",
  },
  {
    id: "waterloo-surgical-techniques",
    date: "2026-06-11",
    title: "Surgical Techniques From The Battle Of Waterloo",
    time: "17:00 convocation",
    location: "Surbiton Masonic Centre",
    host: "North Surrey First Principals",
    type: "talk",
    poster: "assets/waterloo-surgical-techniques.jpg",
    posterAlt: "Surgical Techniques From The Battle Of Waterloo presentation poster",
    tags: ["Historical presentation", "Waterloo", "Surbiton"],
    description:
      "A fascinating historical presentation on the surgical techniques and medical practices used on the battlefield at Waterloo.",
  },
  {
    id: "paintballing-day",
    date: "2026-06-20",
    title: "Paintballing Day",
    time: "09:00-15:30",
    location: "Go Paintball London, Salmons Lane, Whyteleafe, CR3 0HB",
    host: "Surrey 1837 Club",
    type: "social",
    poster: "assets/paintballing-day.jpg",
    posterAlt: "1837 Club Paintballing Day event poster",
    tags: ["£25.99", "Pizza lunch included", "Family and friends welcome"],
    description:
      "Open to family, friends and children. Ticket includes entry to the site, full kit and equipment hire, standard issue rifle, battle packs, pods, loaders and camo combat suit. Ammo packages are purchased on the day from £30 per person for 400 paintballs.",
  },
  {
    id: "go-karting-grand-prix",
    date: "2026-08-02",
    title: "Go-Karting Grand Prix",
    time: "11:15 arrival, 12:15 on track",
    location: "Buckmore Park Kart Circuit, Maidstone Road, Chatham, Kent, ME5 9QG",
    host: "Surrey 1837 Club",
    type: "social",
    poster: "assets/go-karting-grand-prix.jpg",
    posterAlt: "Surrey 1837 Club Go-Karting Grand Prix event poster",
    tags: ["£72.50 per person", "Minimum age 16", "Limited grid"],
    description:
      "A 60-minute Grand Prix at Buckmore Park Kart Circuit. Arrive at 11:15 for a 12:15 track start. Race kit is provided, safety briefing is mandatory, and trophies are awarded to the top three teams.",
  },
  {
    id: "lodge-of-resolve-charity-golf-day",
    date: "2026-07-31",
    title: "Lodge Of Resolve Charity Golf Day",
    time: "09:00 tea, 10:30 first tee",
    location: "Addington Court Golf Club",
    host: "Lodge of Resolve No. 7177",
    type: "social",
    poster: "assets/lodge-of-resolve-golf-day.jpg",
    posterAlt: "Lodge of Resolve Charity Golf Day poster",
    tags: ["£60 per golfer", "£25 non-golfers", "Stableford competition"],
    description:
      "Charity Golf Day at Addington Court Golf Club. Includes tea or coffee and bacon rolls, 18 holes, dinner, prizes, a post-dinner prize raffle, and a Stableford competition.",
  },
  {
    id: "surrey-3-peaks-challenge",
    date: "2026-10-31",
    title: "Surrey 3 Peaks Challenge",
    time: "23 miles, 3 hills, 9 hours",
    location: "Box Hill, Holmbury Hill and Leith Hill",
    host: "Surrey 2030 Festival",
    type: "social",
    poster: "assets/surrey-3-peaks.jpg",
    posterAlt: "Surrey 3 Peaks Challenge poster",
    tags: ["23 miles", "£250 minimum sponsorship", "Limited spaces"],
    description:
      "A Surrey 2030 Festival challenge covering Box Hill, Holmbury Hill and Leith Hill: 23 miles, 3 hills and 9 hours, with limited spaces available.",
  },
];

const lodgeEvents = [];

const today = new Date();
const calendarType = document.body.dataset.calendar || "social";
const calendarConfig = {
  social: {
    events: socialEvents,
    initialDate: new Date(2026, 5, 1),
  },
  lodge: {
    events: lodgeEvents,
    initialDate: new Date(today.getFullYear(), today.getMonth(), 1),
  },
};

const selectedCalendar = calendarConfig[calendarType] || calendarConfig.social;
const events = selectedCalendar.events;

const calendarGrid = document.querySelector("#calendarGrid");
const monthLabel = document.querySelector("#monthLabel");
const eventCount = document.querySelector("#eventCount");
const emptyState = document.querySelector("#emptyState");
const eventDetails = document.querySelector("#eventDetails");
const detailsPanel = document.querySelector("#detailsPanel");

const detailDate = document.querySelector("#detailDate");
const detailTitle = document.querySelector("#detailTitle");
const detailTime = document.querySelector("#detailTime");
const detailLocation = document.querySelector("#detailLocation");
const detailHost = document.querySelector("#detailHost");
const detailDescription = document.querySelector("#detailDescription");
const detailTags = document.querySelector("#detailTags");
const detailPoster = document.querySelector("#detailPoster");

let activeDate = selectedCalendar.initialDate;
let selectedEventId = null;

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
});

function toKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function parseLocalDate(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getMonthDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const mondayOffset = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

function renderCalendar() {
  const visibleDays = getMonthDays(activeDate);
  const activeMonth = activeDate.getMonth();
  const activeYear = activeDate.getFullYear();
  const monthlyEvents = events.filter((event) => {
    const eventDate = parseLocalDate(event.date);
    return eventDate.getMonth() === activeMonth && eventDate.getFullYear() === activeYear;
  });

  monthLabel.textContent = monthFormatter.format(activeDate);
  eventCount.textContent = `${monthlyEvents.length} event${monthlyEvents.length === 1 ? "" : "s"}`;
  calendarGrid.innerHTML = "";

  visibleDays.forEach((day) => {
    const dateKey = toKey(day);
    const dayEvents =
      day.getMonth() === activeMonth ? events.filter((event) => event.date === dateKey) : [];
    const cell = document.createElement("section");
    cell.className = "day-cell";
    cell.setAttribute("aria-label", dateFormatter.format(day));

    if (day.getMonth() !== activeMonth) {
      cell.classList.add("outside");
    }

    if (dateKey === toKey(today)) {
      cell.classList.add("today");
    }

    cell.innerHTML = `
      <div class="day-number">
        <span>${day.getDate()}</span>
      </div>
      <div class="event-list"></div>
    `;

    const list = cell.querySelector(".event-list");

    dayEvents.forEach((event) => {
      const button = document.createElement("button");
      button.className = "event-pill";
      button.type = "button";
      button.dataset.eventId = event.id;
      button.dataset.type = event.type;
      button.setAttribute("aria-pressed", event.id === selectedEventId ? "true" : "false");
      button.textContent = event.title;

      button.addEventListener("click", () => selectEvent(event.id));
      list.append(button);
    });

    calendarGrid.append(cell);
  });
}

function selectEvent(eventId) {
  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return;
  }

  selectedEventId = eventId;
  const eventDate = parseLocalDate(event.date);

  emptyState.classList.add("hidden");
  eventDetails.classList.remove("hidden");
  detailDate.textContent = dateFormatter.format(eventDate);
  detailTitle.textContent = event.title;
  detailTime.textContent = event.time;
  detailLocation.textContent = event.location;
  detailHost.textContent = event.host;
  detailDescription.textContent = event.description;
  detailTags.innerHTML = "";
  detailPoster.classList.toggle("hidden", !event.poster);

  if (event.poster) {
    detailPoster.src = event.poster;
    detailPoster.alt = event.posterAlt || `${event.title} poster`;
  }

  event.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    detailTags.append(tagElement);
  });

  renderCalendar();

  if (window.matchMedia("(max-width: 980px)").matches) {
    detailsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.querySelector("#prevMonth").addEventListener("click", () => {
  activeDate = new Date(activeDate.getFullYear(), activeDate.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#nextMonth").addEventListener("click", () => {
  activeDate = new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 1);
  renderCalendar();
});

document.querySelector("#todayButton").addEventListener("click", () => {
  activeDate = new Date(today.getFullYear(), today.getMonth(), 1);
  renderCalendar();
});

renderCalendar();
