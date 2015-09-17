Meteor.startup(function(){
  m.route.mode = 'pathname';

  m.route(document.body, "/", {
    "/": myApp.homePage,
    "/todo": myApp.todoPage,
    "/hello": myApp.helloPage,
    "/msx": myApp.msxPage,
    "/databinding": myApp.databindingPage,
    "/databinding2": myApp.databinding2Page
  });

});
