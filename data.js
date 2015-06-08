var templates = {};


var album1photos = [
  {
    title: "Favorites",
    src: "photos/stars.jpg"
  },
  {
    title: "soccer",
    src: "photos/soccer.jpeg"
  },
  {
    title: "fish",
    src: "photos/fish.jpeg"
  },
  {
    title: "music",
    src: "photos/music.jpg"
  },
  {
    title: "boondock",
    src: "photos/boondock.jpeg"
  },
  {
    title: "frogs",
    src: "photos/frogs.jpeg"
  },
];

var album2photos = [
  {
    title: "places",
    src: "photos/worldmap.svg"
  },
  {
    title: "germany",
    src: "photos/germany.png"
  },
  {
    title: "france",
    src: "photos/france.jpeg"
  },
  {
    title: "ireland",
    src: "photos/ireland.jpeg"
  },
  {
    title: "italy",
    src: "photos/italy.jpeg"
  },
  {
    title: "australia",
    src: "photos/australia.jpeg"
  },
];

var album3photos = [
  {
    title: "family",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    title: "luckles",
    src: "photos/2012-06-20_22-04-16_66.jpg"
  },
  {
    title: "dad",
    src: "photos/2012-10-05_20-53-51_587.jpg"
  },
  {
    title: "sadie",
    src: "photos/20120722_120722.jpg"
  },
  {
    title: "mustache",
    src: "photos/IMAG0665.jpg"
  },
  {
    title: "sisters",
    src: "photos/IMAG0260.jpg"
  },
];

var album4photos = [
  {
    title: "bahamas",
    src: "photos/IMAG0394.jpg"
  },
  {
    title: "nassau",
    src: "photos/IMAG0360.jpg"
  },
  {
    title: "cave",
    src: "photos/IMAG0371.jpg"
  },
  {
    title: "island",
    src: "photos/IMAG0436.jpg"
  },
];

var album5photos = [
  {
    title: "cerulean",
    src: "photos/cerulean.jpg"
  },
  {
    title: "paints",
    src: "photos/paints.jpeg"
  },
  {
    title: "pallet",
    src: "photos/pallets.jpeg"
  },
  {
    title: "shades",
    src: "photos/shades.jpeg"
  },
  {
    title: "circles",
    src: "photos/circles.jpeg"
  },
];

var album6photos = [
  {
    title: "blizzard",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    title: "diablo",
    src: "photos/diablo.jpeg"
  },
  {
    title: "wow",
    src: "photos/wow.jpeg"
  },
  {
    title: "starcraft",
    src: "photos/starcraft.jpeg"
  },
  {
    title: "hearthstone",
    src: "photos/hearthstone.jpeg"
  },
];



//home page
templates.home = [
  "<div class = columns>",
  "<div class = column1>",
  "<div class = album1>",
  "<a href='Favorites'><img src='photos/stars.jpg' alt=''></a>",
  "<p><a href='#' rel='.home'>Some of my Favorite Things</a></p>",
  "</div>",
  "<div class = album4>",
  "<a href='Bahamas'><img src='photos/IMAG0394.jpg' alt=''></a>",
  "<p><a href='#' rel='.home'>Atlantis and the Bahamas</a></p>",
  "</div>",
  "</div>",
  "<div class = column2>",
  "<div class = album2>",
  "<a href='places'><img src='photos/worldmap.svg' alt=''></a>",
  "<p><a href='#' rel='.home'>Oh the Places We'll Go</a></p>",
  "</div>",
  "<div class = album5>",
  "<img src='photos/cerulean.jpg' alt=''>",
  "<p><a href='#' rel='.home'>Cerulean</a></p>",
  "</div>",
  "</div>",
  "<div class = column3>",
  "<div class = album3>",
  "<img src='photos/IMG_318682884612064.jpeg' alt=''>",
  "<p><a href='#' rel='.home'>Family Time</a></p>",
  "</div>",
  "<div class = album6>",
  "<img src='http://cdn.entertainmentfuse.com/media/2014/09/blizzard-entertainment.jpg' alt=''>",
  "<p><a href='#' rel='.home'>Blizzard Entertainment</a></p>",
  "</div>",
  "</div>"
].join("");

templates.album1 = [
  "<div class = album1>",
  "<a href='Favorites'><img src='photos/stars.jpg' alt=''></a>",
  "<p><a href='#' rel='.home'>Some of my Favorite Things</a></p>",
  "</div>"
].join("");

templates.album2 = [
  "<div class = album2>",
  "<a href='Favorites'><img src='photos/worldmap.svg' alt=''></a>",
  "<p><a href='#' rel='.home'>Oh the Places We'll Go</a></p>",
  "</div>"
].join("");
