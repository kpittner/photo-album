$(document).ready(function(){
  var page = {
    init: function(arguments) {
      page.initStyling();
      page.initEvents();

    },
    initStyling: function(arguments) {

    },
    initEvents: function(arguments) {
      page.loadTemplate("album1", {}, $('body'));
    },
    loadTemplate: function(name, data, $target) {
      var content = _.template(templates[name]);
      $target.append(content(data));
    }
  };
  page.init();






var pageHandler = function(event) {
  event.preventDefault();
  var clickedPage = $(this).attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickPage).addClass('active');
};


$('.home').on('click', pageHandler);
});
