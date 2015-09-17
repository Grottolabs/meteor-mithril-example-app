/**
 * Created by jakob on 16-09-2015.
 */
myApp.homePage = {
  controller : (function(){
    console.log('homePage controller')
  }),
  view: function(ctrl){
    return myApp.layout(
      m("div", [
        m("h1", "Meteor Mithril Example App"),
        m("a[href='https://github.com/Grottolabs/meteor-mithril-example-app']", "Github")
      ]))
  }
};