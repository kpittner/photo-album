$(document).ready(function(){

var page = {
  init: function(arguments) {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function(arguments) {
    console.log("I'm initialize Styling");
  },
  initEvents: function(arguments) {
    console.log("I'm initializing events");
    homePage.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });
  },

  loadTemplate: function(name, data, $target) {
    var content = _.template(templates[name]);
    $target.append(content(data));
  },
  pageHandler: function(event) {
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    console.log( clickedPage );

    $('body').on('click','#favorites-button', function(e) {
      e.preventDefault();
      $('#home').removeClass('activePage');
      // $('#places-button').removeClass('activePage');
      // $('#cerulean-button').removeClass('activePage');
      // $('#family-button').removeClass('activePage');
      // $('#blizzard-button').removeClass('activePage');
      $('.container').addClass('activePage');
    });

    favorites.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    places.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    family.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    bahamas.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    cerulean.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });

    blizzard.forEach(function(el) {
     page.loadTemplate( 'home',el,$('.container'))
    });


    // 1. find all albumNames that do not equal clickedPage, and remove class active.
    // 2. add class active to clickedPage elements.
  }

};



  page.init();
  $('.navbar').on('click', '#home-button', page.pageHandler);
  $('.navbar').on('click', '#favorites-button', page.pageHandler);
  $('.navbar').on('click', '#bahamas-button', page.pageHandler);
  $('.navbar').on('click', '#places-button', page.pageHandler);
  $('.navbar').on('click', '#cerulean-button', page.pageHandler);
  $('.navbar').on('click', '#family-button', page.pageHandler);
  $('.navbar').on('click', '#blizzard-button', page.pageHandler);

});
