// Edit this file to personalize the invitation. No other file needs to change
// for basic customization (names, date, venue, images, music).

export const config = {
  // Names as displayed. nameFirst shows first: "nameFirst & nameSecond".
  nameFirst: "Marco",
  nameSecond: "Youstina",

  // Verse shown on the splash screen and at the top of the hero.
  openingVerse: "“I have found the one whom my soul loves.”",
  openingVerseRef: "Song of Solomon 3:4",

  // Fuller verse shown under the opening line at the top of the hero.
  heroVerse:
    "Love is patient, love is kind. It bears all things, believes all things, hopes all things, endures all things. Love never fails. — 1 Corinthians 13",

  tagline: "Two hearts, one soul, one promise",

  // Ceremony date and time. countdownTarget drives the live countdown and is
  // interpreted in the visitor's local timezone.
  weddingDateLine: "Sunday, 30 August 2026",
  weddingTimeLine: "8:30 PM",
  countdownTarget: "2026-08-30T20:30:00",

  inviteLine:
    "We\u2019ve spent years being each other\u2019s favorite person. Now it\u2019s time to celebrate the beginning of forever, and we\u2019d be so happy to share this moment with you.",

  venue: {
    name: "Sea Mariage Wedding Hall",
    city: "Alexandria, Egypt",
    googleMapsUrl: "https://maps.app.goo.gl/RaoXoKFKgWX3i8LMA",
    // Drop a photo of the hall at public/images/venue.jpg and it replaces
    // the illustrated night-sea artwork automatically.
    photo: "/images/venue.jpg",
  },

  // Six photos. Drop files with these exact names into public/images/ and
  // they appear automatically; until then an elegant placeholder is shown.
  gallery: [
    "/images/couple-01.jpg",
    "/images/couple-02.jpg",
    "/images/couple-03.jpg",
    "/images/couple-04.jpg",
    "/images/couple-05.jpg",
    "/images/couple-06.jpg",
  ],

  // Discreet credit line at the very bottom of the page.
  credit: {
    name: "Shenouda Isaac",
    phone: "01284493242",
    whatsappUrl: "https://wa.me/201284493242",
  },

  // Song file lives at public/audio/perfect.mp3 (Perfect — Ed Sheeran).
  // Playback starts at startAtSeconds and loops back there when the song ends.
  music: {
    src: "/audio/perfect.mp3",
    startAtSeconds: 0,
  },
};
