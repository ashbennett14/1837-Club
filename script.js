const socialEvents = [
  {
    id: "castle-lodge-charity-golf-day",
    date: "2026-05-23",
    title: "Castle Lodge Charity Golf Day",
    time: "09:30 arrival, 11:20 first tee",
    location: "Milford Golf Course, Station Lane, Milford, GU8 5HS",
    host: "Castle Lodge 6657",
    type: "social",
    category: "Community Event",
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
    category: "Community Event",
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
    category: "Community Event",
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
    category: "1837 Club Event",
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
    category: "1837 Club Event",
    poster: "assets/go-karting-grand-prix.jpg",
    posterAlt: "Surrey 1837 Club Go-Karting Grand Prix event poster",
    tags: ["£72.50 per person", "Minimum age 16", "Limited grid"],
    description:
      "A 60-minute Grand Prix at Buckmore Park Kart Circuit. Arrive at 11:15 for a 12:15 track start. Race kit is provided, safety briefing is mandatory, and trophies are awarded to the top three teams.",
  },
  {
    id: "city-of-london-walking-tour",
    date: "2026-07-11",
    title: "City Of London Walking Tour",
    time: "11:00 walk, lunch at 13:30",
    location: "City Thameslink Station, Holborn Viaduct exit, opposite Starbucks",
    host: "Surrey 1837 Club",
    type: "social",
    category: "1837 Club Event",
    poster: "assets/city-of-london-walking-tour.png",
    posterAlt: "1837 Club City of London Walking Tour poster",
    tags: ["Free", "Maximum 14 people", "Donations welcome"],
    description:
      "A guided walking tour through the heart of the City of London with an official City of London Green Badge Guide, exploring masonic connections and wider history. The walk lasts approximately two hours, with an optional pub lunch booked for 13:30.",
  },
  {
    id: "lodge-of-resolve-charity-golf-day",
    date: "2026-07-31",
    title: "Lodge Of Resolve Charity Golf Day",
    time: "09:00 tea, 10:30 first tee",
    location: "Addington Court Golf Club",
    host: "Lodge of Resolve No. 7177",
    type: "social",
    category: "Community Event",
    poster: "assets/lodge-of-resolve-golf-day.jpg",
    posterAlt: "Lodge of Resolve Charity Golf Day poster",
    tags: ["£60 per golfer", "£25 non-golfers", "Stableford competition"],
    description:
      "Charity Golf Day at Addington Court Golf Club. Includes tea or coffee and bacon rolls, 18 holes, dinner, prizes, a post-dinner prize raffle, and a Stableford competition.",
  },
  {
    id: "rifle-shooting-day",
    date: "2026-09-05",
    title: "Rifle Shooting Day",
    time: "09:00-15:00",
    location: "Private range near Bexhill-on-Sea",
    host: "Surrey 1837 Club",
    type: "social",
    category: "1837 Club Event",
    poster: "assets/rifle-shooting-day.png",
    posterAlt: "1837 Club Rifle Shooting Day poster",
    tags: ["£215 per person", "Only 7 spaces remain", "BBQ lunch included"],
    description:
      "A rifle shooting day on a private range near Bexhill-on-Sea, with professional instruction and the opportunity to shoot multiple rifles at distances from 50m to 200m. Includes at least 100 rounds of ammunition, BBQ lunch and refreshments.",
  },
  {
    id: "surrey-3-peaks-challenge",
    date: "2026-10-31",
    title: "Surrey 3 Peaks Challenge",
    time: "23 miles, 3 hills, 9 hours",
    location: "Box Hill, Holmbury Hill and Leith Hill",
    host: "Surrey 2030 Festival",
    type: "social",
    category: "Community Event",
    poster: "assets/surrey-3-peaks.jpg",
    posterAlt: "Surrey 3 Peaks Challenge poster",
    tags: ["23 miles", "£250 minimum sponsorship", "Limited spaces"],
    description:
      "A Surrey 2030 Festival challenge covering Box Hill, Holmbury Hill and Leith Hill: 23 miles, 3 hills and 9 hours, with limited spaces available.",
  },
];

const lodgeEvents = [
  {
    id: "arnold-lodge-raising",
    date: "2026-06-02",
    title: "Arnold Lodge",
    lodgeName: "Arnold Lodge",
    lodgeNumber: "1981",
    degree: "Raising",
    time: "TBC",
    location: "Surbiton",
    host: "Arnold Lodge No. 1981",
    type: "lodge",
    poster: "assets/arnold-lodge-logo.png",
    posterAlt: "Arnold Lodge No. 1981 logo",
    tags: ["Raising", "Lodge No. 1981", "Surbiton"],
    description: "Arnold Lodge No. 1981 meeting in Surbiton for a Raising.",
  },
  {
    id: "hale-lodge-initiation",
    date: "2026-06-03",
    title: "Hale Lodge",
    lodgeName: "Hale Lodge",
    lodgeNumber: "9272",
    degree: "Initiation",
    time: "TBC",
    location: "Farnham",
    host: "Hale Lodge No. 9272",
    type: "lodge",
    poster: "assets/hale-lodge-crest.jpg",
    posterAlt: "Hale Lodge No. 9272 crest",
    tags: ["Initiation", "Lodge No. 9272", "Farnham"],
    description: "Hale Lodge No. 9272 meeting in Farnham for an Initiation.",
  },
  {
    id: "st-georges-lodge-initiation",
    date: "2026-06-06",
    title: "St Georges Lodge",
    lodgeName: "St Georges Lodge",
    lodgeNumber: "370",
    degree: "Initiation",
    time: "TBC",
    location: "Chertsey",
    host: "St Georges Lodge No. 370",
    type: "lodge",
    poster: "assets/st-georges-lodge-crest.png",
    posterAlt: "St Georges Lodge No. 370 crest",
    tags: ["Initiation", "Lodge No. 370", "Chertsey"],
    description: "St Georges Lodge No. 370 meeting in Chertsey for an Initiation.",
  },
  {
    id: "crescamus-lodge-passing",
    date: "2026-06-08",
    title: "Crescamus Lodge",
    lodgeName: "Crescamus Lodge",
    lodgeNumber: "7776",
    degree: "Passing",
    time: "TBC",
    location: "Croydon",
    host: "Crescamus Lodge No. 7776",
    type: "lodge",
    poster: "assets/crescamus-lodge-crest.png",
    posterAlt: "Crescamus Lodge No. 7776 crest",
    tags: ["Passing", "Lodge No. 7776", "Croydon"],
    description: "Crescamus Lodge No. 7776 meeting in Croydon for a Passing.",
  },
  {
    id: "croydon-chantry-lodge-other",
    date: "2026-06-16",
    title: "Croydon Chantry Lodge",
    lodgeName: "Croydon Chantry Lodge",
    lodgeNumber: "5063",
    degree: "Other",
    time: "TBC",
    location: "Croydon",
    host: "Croydon Chantry Lodge No. 5063",
    type: "lodge",
    poster: "assets/croydon-chantry-lodge-crest.png",
    posterAlt: "Croydon Chantry Lodge No. 5063 crest",
    tags: ["Other", "Lodge No. 5063", "Croydon"],
    description: "Croydon Chantry Lodge No. 5063 meeting in Croydon.",
  },
  {
    id: "saxondom-lodge-initiation",
    date: "2026-06-20",
    title: "Saxondom Lodge",
    lodgeName: "Saxondom Lodge",
    lodgeNumber: "6786",
    degree: "Initiation",
    time: "TBC",
    location: "Croydon",
    host: "Saxondom Lodge No. 6786",
    type: "lodge",
    poster: "assets/saxondom-lodge-crest.png",
    posterAlt: "Saxondom Lodge No. 6786 crest",
    tags: ["Initiation", "Lodge No. 6786", "Croydon"],
    description: "Saxondom Lodge No. 6786 meeting in Croydon for an Initiation.",
  },
  {
    id: "lodge-of-quality-initiation-passing",
    date: "2026-06-09",
    title: "Lodge of Quality",
    lodgeName: "Lodge of Quality",
    lodgeNumber: "9356",
    degree: "Initiation & Passing",
    time: "TBC",
    location: "Croydon",
    host: "Lodge of Quality No. 9356",
    type: "lodge",
    poster: "assets/lodge-of-quality-crest.png",
    posterAlt: "Lodge of Quality No. 9356 crest",
    tags: ["Initiation & Passing", "Lodge No. 9356", "Croydon"],
    description: "Lodge of Quality No. 9356 meeting in Croydon for an Initiation and Passing.",
  },
  {
    id: "lumen-lodge-initiation",
    date: "2026-06-11",
    title: "Lumen Lodge",
    lodgeName: "Lumen Lodge",
    lodgeNumber: "4922",
    degree: "Initiation",
    time: "TBC",
    location: "Surbiton",
    host: "Lumen Lodge No. 4922",
    type: "lodge",
    poster: "assets/lumen-lodge-crest.png",
    posterAlt: "Lumen Lodge No. 4922 crest",
    tags: ["Initiation", "Lodge No. 4922", "Surbiton"],
    description: "Lumen Lodge No. 4922 meeting in Surbiton for an Initiation.",
  },
  {
    id: "ember-manor-lodge-raising",
    date: "2026-06-15",
    title: "Ember Manor Lodge",
    lodgeName: "Ember Manor Lodge",
    lodgeNumber: "4740",
    degree: "Raising",
    time: "TBC",
    location: "Esher",
    host: "Ember Manor Lodge No. 4740",
    type: "lodge",
    poster: "assets/ember-manor-lodge-crest.png",
    posterAlt: "Ember Manor Lodge No. 4740 crest",
    tags: ["Raising", "Lodge No. 4740", "Esher"],
    description: "Ember Manor Lodge No. 4740 meeting in Esher for a Raising.",
  },
  {
    id: "lodge-of-united-endeavour-raising",
    date: "2026-06-20",
    title: "Lodge of United Endeavour",
    lodgeName: "Lodge of United Endeavour",
    lodgeNumber: "7405",
    degree: "Raising",
    time: "TBC",
    location: "Sutton",
    host: "Lodge of United Endeavour No. 7405",
    type: "lodge",
    poster: "assets/lodge-of-united-endeavour-crest.png",
    posterAlt: "Lodge of United Endeavour No. 7405 crest",
    tags: ["Raising", "Lodge No. 7405", "Sutton"],
    description: "Lodge of United Endeavour No. 7405 meeting in Sutton for a Raising.",
  },
  {
    id: "windlesham-dawn-installation",
    date: "2026-10-16",
    title: "Windlesham Dawn",
    lodgeName: "Windlesham Dawn",
    lodgeNumber: "9686",
    degree: "Installation",
    time: "TBC",
    location: "Chertsey",
    host: "Windlesham Dawn Lodge No. 9686",
    type: "lodge",
    poster: "assets/windlesham-dawn-logo.jpg",
    posterAlt: "Windlesham Dawn Lodge No. 9686 logo",
    tags: ["Installation", "Lodge No. 9686", "Chertsey"],
    description:
      "Windlesham Dawn Lodge No. 9686 meeting in Chertsey for an Installation.",
  },
];

const today = new Date();
const todayKey = toKey(today);
const calendarType = document.body.dataset.calendar || "social";
const calendarConfig = {
  social: {
    events: socialEvents,
    initialDate: new Date(2026, 5, 1),
  },
  lodge: {
    events: lodgeEvents,
    initialDate: new Date(2026, 5, 1),
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

    if (dateKey < todayKey) {
      cell.classList.add("past");
    }

    if (dateKey === todayKey) {
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
      button.className = event.type === "lodge" ? "event-pill lodge-event" : "event-pill";
      button.type = "button";
      button.dataset.eventId = event.id;
      button.dataset.type = event.type;
      button.dataset.degree = event.degree || "";
      button.dataset.category = event.category || "";
      if (event.date < todayKey) {
        button.classList.add("past-event");
      }
      button.setAttribute("aria-pressed", event.id === selectedEventId ? "true" : "false");

      if (event.type === "lodge") {
        button.innerHTML = `
          <span class="lodge-event-name">${event.lodgeName}</span>
          <span class="lodge-event-number">No. ${event.lodgeNumber}</span>
          <span class="lodge-event-location">${event.location}</span>
          <span class="degree-badge" data-degree="${event.degree}">${event.degree}</span>
        `;
      } else {
        button.classList.add("social-event");
        button.innerHTML = `
          <span class="social-event-title">${event.title}</span>
          <span class="category-badge" data-category="${event.category}">${event.category}</span>
        `;
      }

      button.addEventListener("click", () => selectEvent(event.id));
      list.append(button);
    });

    calendarGrid.append(cell);
  });

  if (window.prepareMotion) {
    window.prepareMotion(calendarGrid);
  }
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
  eventDetails.dataset.eventType = event.type || "";
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
