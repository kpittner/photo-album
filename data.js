var templates = {};
var albums = {}

var homePage = [
  {
    albumName: 'homePage',
    title: "Favorites",
    src: "photos/stars.jpg"
  },
  {
    albumName: 'homePage',
    title: "Bahamas",
    src: "photos/IMAG0394.jpg"
  },
  {
    albumName: 'homePage',
    title: "Places",
    src: "photos/worldmap.svg"
  },
  {
    albumName: 'homePage',
    title: "Cerulean",
    src: "photos/cerulean.jpg"
  },
  {
    albumName: 'homePage',
    title: "Family",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    albumName: 'homePage',
    title: "Blizzard",
    src: "photos/blizzard.jpeg"
  },
];

var places = [
  {
    albumName: 'places',
    title: "Places",
    src: "photos/worldmap.svg"
  },
  {
    albumName: 'places',
    title: "Germany",
    src: "photos/germany.png"
  },
  {
    albumName: 'places',
    title: "France",
    src: "photos/france.jpeg"
  },
  {
    albumName: 'places',
    title: "Ireland",
    src: "photos/ireland.jpeg"
  },
  {
    albumName: 'places',
    title: "Italy",
    src: "photos/italy.jpeg"
  },
  {
    albumName: 'places',
    title: "Australia",
    src: "photos/australia.jpeg"
  },
];

var family = [
  {
    albumName: 'family',
    title: "Family",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    albumName: 'family',
    title: "Luckles",
    src: "photos/2012-06-20_22-04-16_66.jpg"
  },
  {
    albumName: 'family',
    title: "Dad",
    src: "photos/2012-10-05_20-53-51_587.jpg"
  },
  {
    albumName: 'family',
    title: "Sadie and Me",
    src: "photos/20120722_120722.jpg"
  },
  {
    albumName: 'family',
    title: "I Mustache You a Question",
    src: "photos/IMAG0665.jpg"
  },
  {
    albumName: 'family',
    title: "Sisters",
    src: "photos/IMAG0260.jpg"
  },
];

var bahamas = [
  {
    albumName: 'bahamas',
    title: "Atlantis and the Bahamas",
    src: "photos/IMAG0394.jpg"
  },
  {
    albumName: 'bahamas',
    title: "Nassau",
    src: "photos/IMAG0360.jpg"
  },
  {
    albumName: 'bahamas',
    title: "Cave",
    src: "photos/IMAG0371.jpg"
  },
  {
    albumName: 'bahamas',
    title: "Island",
    src: "photos/IMAG0436.jpg"
  },
];

var cerulean = [
  {
    albumName: 'cerulean',
    title: "Cerulean",
    src: "photos/cerulean.jpg"
  },
  {
    albumName: 'cerulean',
    title: "Paints",
    src: "photos/paints.jpeg"
  },
  {
    albumName: 'cerulean',
    title: "Pallet",
    src: "photos/pallet.jpeg"
  },
  {
    albumName: 'cerulean',
    title: "Shades",
    src: "photos/shades.jpeg"
  },
  {
    albumName: 'cerulean',
    title: "Circles",
    src: "photos/circles.jpeg"
  },
];

var blizzard = [
  {
    albumName: 'blizzard',
    title: "Blizzard",
    src: "photos/blizzard.jpeg"
  },
  {
    albumName: 'blizzard',
    title: "Diablo III",
    src: "photos/diablo.jpeg"
  },
  {
    albumName: 'blizzard',
    title: "WOW",
    src: "photos/wow.jpeg"
  },
  {
    albumName: 'blizzard',
    title: "StarCraft",
    src: "photos/starcraft.jpeg"
  },
  {
    albumName: 'blizzard',
    title: "Hearthstone",
    src: "photos/hearthstone.jpeg"
  },
];

var favorites = [
  {
    albumName: 'favorites',
    title: "Favorites",
    src: "photos/stars.jpg"
  },
  {
    albumName: 'favorites',
    title: "Soccer",
    src: "photos/soccer.jpeg"
  },
  {
    albumName: 'favorites',
    title: "Swedish Fish",
    src: "photos/fish.jpeg"
  },
  {
    albumName: 'favorites',
    title: "Music",
    src: "photos/music.jpg"
  },
  {
    albumName: 'favorites',
    title: "The Boondock Saints",
    src: "photos/boondock.jpeg"
  },
  {
    albumName: 'favorites',
    title: "Frogs",
    src: "photos/frogs.jpeg"
  }
]

albums.homePage = homePage;
albums.favorites = favorites;
albums.places = places;
albums.family = family;
albums.bahamas = bahamas;
albums.cerulean = cerulean;
albums.blizzard = blizzard;

templates.home = [
  "<div class='col-lg-4'>",
  "<div class='<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album1 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album2 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album3 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album4 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album5 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");

templates.album6 = [
  "<div class='col-lg-4'>",
  "<div class = '<%= albumName %>'",
  "<a href='Favorites'><img src='<%= src %>' alt=''></a>",
  "<p><a href='#' rel='.home'><%= title %></a></p>",
  "</div>",
  "</div>"
].join("");
