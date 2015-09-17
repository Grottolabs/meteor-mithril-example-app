/**
 * Created by jakob on 16-09-2015.
 */
myApp.layout = function(body) {
  return m(".layout", [
    m("header",myApp.header),
    m("main", body)
  ]);
};
