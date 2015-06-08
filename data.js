var templates = {};


var album2photos = [
  {
    albumName: 'album2',
    title: "Places",
    src: "photos/worldmap.svg"
  },
  {
    albumName: 'album2',
    title: "Germany",
    src: "photos/germany.png"
  },
  {
    albumName: 'album2',
    title: "France",
    src: "photos/france.jpeg"
  },
  {
    albumName: 'album2',
    title: "Ireland",
    src: "photos/ireland.jpeg"
  },
  {
    albumName: 'album2',
    title: "Italy",
    src: "photos/italy.jpeg"
  },
  {
    albumName: 'album2',
    title: "Australia",
    src: "photos/australia.jpeg"
  },
];

var album3photos = [
  {
    albumName: 'album3',
    title: "Family",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    albumName: 'album3',
    title: "Luckles",
    src: "photos/2012-06-20_22-04-16_66.jpg"
  },
  {
    albumName: 'album3',
    title: "Dad",
    src: "photos/2012-10-05_20-53-51_587.jpg"
  },
  {
    albumName: 'album3',
    title: "Sadie and Me",
    src: "photos/20120722_120722.jpg"
  },
  {
    albumName: 'album3',
    title: "I Mustache You a Question",
    src: "photos/IMAG0665.jpg"
  },
  {
    albumName: 'album3',
    title: "Sisters",
    src: "photos/IMAG0260.jpg"
  },
];

var album4photos = [
  {
    albumName: 'album4',
    title: "Atlantis and the Bahamas",
    src: "photos/IMAG0394.jpg"
  },
  {
    albumName: 'album4',
    title: "Nassau",
    src: "photos/IMAG0360.jpg"
  },
  {
    albumName: 'album4',
    title: "Cave",
    src: "photos/IMAG0371.jpg"
  },
  {
    albumName: 'album4',
    title: "Island",
    src: "photos/IMAG0436.jpg"
  },
];

var album5photos = [
  {
    albumName: 'album5',
    title: "Cerulean",
    src: "photos/cerulean.jpg"
  },
  {
    albumName: 'album5',
    title: "Paints",
    src: "photos/paints.jpeg"
  },
  {
    albumName: 'album5',
    title: "Pallet",
    src: "photos/pallets.jpeg"
  },
  {
    albumName: 'album5',
    title: "Shades",
    src: "photos/shades.jpeg"
  },
  {
    albumName: 'album5',
    title: "Circles",
    src: "photos/circles.jpeg"
  },
];

var album6photos = [
  {
    albumName: 'album6',
    title: "Blizzard",
    src: "photos/IMG_318682884612064.jpeg"
  },
  {
    albumName: 'album6',
    title: "Diablo III",
    src: "photos/diablo.jpeg"
  },
  {
    albumName: 'album6',
    title: "WOW",
    src: "photos/wow.jpeg"
  },
  {
    albumName: 'album6',
    title: "StarCraft",
    src: "photos/starcraft.jpeg"
  },
  {
    albumName: 'album6',
    title: "Hearthstone",
    src: "photos/hearthstone.jpeg"
  },
];

var album1photos = [
  {
    albumName: 'album1',
    title: "Favorites",
    src: "photos/stars.jpg"
  },
  {
    albumName: 'album1',
    title: "Soccer",
    src: "photos/soccer.jpeg"
  },
  {
    albumName: 'album1',
    title: "Swedish Fish",
    src: "photos/fish.jpeg"
  },
  {
    albumName: 'album1',
    title: "Music",
    src: "photos/music.jpg"
  },
  {
    albumName: 'album1',
    title: "The Boondock Saints",
    src: "photos/boondock.jpeg"
  },
  {
    albumName: 'album1',
    title: "Frogs",
    src: "photos/frogs.jpeg"
  }
]


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
