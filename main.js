var page = {
  init: function(arguments) {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function(arguments) {
    console.log("I'm initialize Styling");
  },
  initEvents: function(arguments) {
    console.log("I'm initialize events");
    page.album1photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    page.album2photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    page.album3photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    page.album4photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    page.album5photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    page.album6photos.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });
    // page.loadTemplate('home',album1Photos, $('body'));
    // page.loadTemplate("album1", {}, $('body'));
  },
  loadTemplate: function(name, data, $target) {
    var content = _.template(templates[name]);
    $target.append(content(data));
  },
  pageHandler: function(event) {
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickPage).addClass('active');
  },
  album1photos: [
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


   //$('.home').on('click', page.pageHandler);
};


$(document).ready(function(){

  page.init();

});
