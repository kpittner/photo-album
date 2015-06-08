$(document).ready(function(){
  page.init();
  var content = _.template($('#home').html());
  var string = "";


var page = {
  init: function(arguments) {
    initStyling();
    initEvents();

  },
  initStyling: function(arguments) {

    })
  },
  initEvents: function(arguments) {
    page.loadTemplate("page1")
  },
  loadTemplate: function(name, data, $target) {
    var content = _.template(templates[name]);
    $target.append(content(data));
  }
}




var pageHandler = function(event) {
  event.preventDefault();
  var clickedPage = $(this).attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickPage).addClass('active');
}



});
