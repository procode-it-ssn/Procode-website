// Source of truth for the public /events page.
//
// The Supabase `events` table is no longer read by /events — see README.
//
// To add an event:
//   1. Crop 2-4 photos to a consistent 4:3 and drop them in assets/events/.
//   2. Import them below and add an entry to `Events`.
//   3. Commit.
//
// Order in this array does not matter; the page sorts by start_date, newest first.
// Events without a start_date sort last.
// To hide an event without losing it, comment the entry out.
//
// Field reference:
//   id           stable, unique — used as the React key
//   name         event title
//   description  shown clamped on hover, in full in the dialog
//   images       [0] is the cover; omit the key entirely for a placeholder tile
//   start_date   "YYYY-MM-DD"
//   end_date     optional — set it and the card shows a date range
//   is_handson   optional — shows a "Hands-on" badge
//
// Photos and copy below come from ProCoDe_Events_Page_Content_3.pdf.
// Each event leads with its poster, matching the "Main image file" in that doc.
// Posters are portrait (4:5) and the card frame is 4:3, so the centre ~60% shows
// at rest — the date strip at the top and the venue at the bottom are cropped off.
// The full poster is visible in the dialog that opens when a card is clicked.

import InternshipInfo1 from "@/assets/events/internship-info-1.jpg";

import SihLaunchpadPoster from "@/assets/events/sih-launchpad-poster.png";
import SihLaunchpad1 from "@/assets/events/sih-launchpad-1.jpg";
import SihLaunchpad2 from "@/assets/events/sih-launchpad-2.jpg";

import ReactFrontend1 from "@/assets/events/react-frontend-1.jpg";
import ReactFrontend2 from "@/assets/events/react-frontend-2.jpg";
import ReactFrontendPoster from "@/assets/events/react-frontend-poster.jpg";

import MlDl1 from "@/assets/events/ml-dl-1.jpg";
import MlDl2 from "@/assets/events/ml-dl-2.jpg";
import MlDl3 from "@/assets/events/ml-dl-3.jpg";
import MlDlPoster from "@/assets/events/ml-dl-poster.jpg";

import Devops1 from "@/assets/events/devops-1.jpg";
import Devops2 from "@/assets/events/devops-2.jpg";
import Devops3 from "@/assets/events/devops-3.jpg";
import DevopsPoster from "@/assets/events/devops-poster.jpg";

import Internships1011 from "@/assets/events/internships-101-1.jpg";
import Internships1012 from "@/assets/events/internships-101-2.jpg";
import Internships1013 from "@/assets/events/internship-101-3.jpg";
import Internships101Poster from "@/assets/events/internships-101-poster.jpg";

import GitJira1 from "@/assets/events/git-jira-1.jpg";
import GitJira2 from "@/assets/events/git-jira-2.jpg";
import GitJiraPoster from "@/assets/events/git-jira-poster.jpg";

import ProcodeCup2 from "@/assets/events/procode-cup-2.jpg";
import ProcodeCup3 from "@/assets/events/procode-cup-3.jpg";
import ProcodeCupPoster from "@/assets/events/procode-cup-poster.jpg";

export const Events = [
  {
    id: "procode-cup-2026",
    name: "ProCoDe Cup 2026",
    description:
      "This is the one everyone waits for. ProCoDe's flagship hackathon, IT department only, brought out serious hustle from freshers and second years alike. EdTech, FinTech, digital assistants, defense tech, wild UI/UX ideas, someone built it all. Sleepless nights, way too much coffee, and ideas that actually had a shot: that is the ProCoDe Cup energy.",
    images: [ProcodeCupPoster, ProcodeCup3, ProcodeCup2],
    start_date: "2026-03-31",
    is_handson: true,
  },
  {
    id: "git-jira-fundamentals-2026",
    name: "Git & Jira Fundamentals",
    description:
      "First years walked in slightly intimidated by words like Agile and Scrum, and walked out throwing them around like pros. This bootcamp made Git and Jira feel less like corporate jargon and more like tools they actually wanted to use, right before diving into their first real team projects.",
    images: [GitJiraPoster, GitJira1, GitJira2],
    start_date: "2026-03-05",
    is_handson: true,
  },
  {
    id: "internships-101-2026",
    name: "Internships 101",
    description:
      "Intern season nerves are real, and this session met them head on. Seniors got brutally honest about resumes, project picks, and the constant juggle between DSA and everything else, no gatekeeping, no judgement. One line stuck with everyone walking out: know your projects inside out, because that is what actually gets you through the interview.",
    images: [Internships101Poster, Internships1011, Internships1012, Internships1013],
    start_date: "2026-02-24",
    is_handson: false,
  },
  {
    id: "devops-mlops-system-design-2026",
    name: "DevOps, MLOps & System Design Bootcamp",
    description:
      "URL flows, JWTs, OAuth, CAP theorem: yes, it sounds intense, and it was, but in the best way. This bootcamp tackled the questions every second year secretly googles, including the golden one, why does it only work on my laptop? Enter Docker, and suddenly the whole dev ops world felt a lot less scary.",
    images: [DevopsPoster, Devops1, Devops2, Devops3],
    start_date: "2026-02-18",
    is_handson: true,
  },
  {
    id: "ml-dl-bootcamp-2026",
    name: "ML & DL Bootcamp",
    description:
      "Two days, zero fluff, all hands-on. Participants got their hands dirty with real housing price and heart disease datasets, riding the full ML rollercoaster from messy raw data to a working, evaluated model. The kind of bootcamp where you walk in curious and walk out genuinely confident you could build this stuff yourself.",
    images: [MlDlPoster, MlDl1, MlDl2, MlDl3],
    start_date: "2026-02-05",
    // TODO: description says it ran two days — add end_date: "2026-02-06" to show a range.
    is_handson: true,
  },
  {
    id: "react-frontend-fundamentals-2026",
    name: "React & Frontend Fundamentals Bootcamp",
    description:
      "Ever stared at a tech stack decision and just frozen? This workshop fixed that. React got broken down piece by piece, with food analogies (yes, really) making Hooks finally click. By the end, the room was not just taking notes, people were already sketching out their own portfolio sites in their heads.",
    images: [ReactFrontendPoster, ReactFrontend1, ReactFrontend2],
    start_date: "2026-01-08",
    is_handson: true,
  },
  {
    id: "sih-launchpad",
    name: "The SIH Launchpad",
    description:
      "The room was buzzing with hackathon energy. Past SIH finalists and winners walked in not just to talk, but to hype everyone up, sharing the wins, the 3 a.m. debugging chaos, and the lessons that actually matter. By the time the technical session on problem analysis and AI/ML wrapped up, SIH had stopped feeling like a far off dream and started feeling like the next big thing worth chasing.",
    images: [SihLaunchpadPoster, SihLaunchpad1, SihLaunchpad2],
    // TODO: no date in the content doc — add it.
    is_handson: false,
  },
  {
    id: "online-internship-info-session",
    name: "Online Internship Info Session",
    description:
      "Picture this: summer break, and instead of scrolling reels all day, everyone's finally cracking the internship code. This session brought in seniors who had landed roles at CMU, IITM, and top companies to spill exactly how they did it, no sugarcoating. From that first nervous \"where do I even start\" to a full game plan, the energy in the room made internships feel less like a mountain and more like a mission worth taking on.",
    images: [InternshipInfo1],
    // TODO: no date in the content doc — add it.
    is_handson: false,
  },
  {
    id: "invente-codera-websitica",
    name: "Invente: Codera & Websitica",
    description:
      "This was ProCoDe's biggest stage of the year, and it showed. Codera and Websitica pulled in a massive crowd from colleges across the city, all fired up to solve real coding problems developers actually face. Multiple rounds of coding, quizzing, and pure creative chaos later, Invente proved once again why it is the techfest everyone circles on their calendar.",
    // TODO: the content doc has no photo for Invente — this card shows the
    // placeholder tile until photos are pulled from the club drive or Canva.
    // TODO: no date in the content doc — add it.
    is_handson: false,
  },
];
