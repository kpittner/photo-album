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
    albums.albumhome.forEach(function(el) {
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
    console.log( $(clickedPage) )
    $(clickedPage).removeClass('active');
    $(clickedPage).addClass('active');
  }

};


$(document).ready(function(){

  page.init();
  $('.navbar').on('click', '#home-button', page.pageHandler);
  $('.navbar').on('click', '#favorites-button', page.pageHandler);
  $('.navbar').on('click', '#bahamas-button', page.pageHandler);
  $('.navbar').on('click', '#places-button', page.pageHandler);
  $('.navbar').on('click', '#cerulean-button', page.pageHandler);
  $('.navbar').on('click', '#family-button', page.pageHandler);
  $('.navbar').on('click', '#blizzard-button', page.pageHandler);

});
