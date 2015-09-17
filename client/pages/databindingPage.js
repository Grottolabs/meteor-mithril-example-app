/**
 * Created by jakob on 16-09-2015.
 */


myApp.databindingPage = {

  vm: {
    databinder     : function (data) {
      return {
        oninput: function (e) {
          var name = e.target.name;
          var value = e.target.value;
          data[ name ] = value;
        }
      };
    }
  },

  controller: function () {
    this.vm = myApp.databindingPage.vm;
    this.user = {
      first : 'John',
      last  : 'Doe',
      domain: 'https://mydomain.com'
    };
  },

  view: function (ctrl) {
    var vm = ctrl.vm;
    return myApp.layout(
      m(".container", [
        m("form", vm.databinder(ctrl.user), [
          m("input[type=text][name=first]", {value: ctrl.user.first}),
          m("input[type=text][name=last]", {value: ctrl.user.last}),
          m("input[type=text][name=domain]", {value: ctrl.user.domain})

        ]),

        m("div", "Hello " + ctrl.user.first + " " + ctrl.user.last + " from " + ctrl.user.domain)

      ])
    )
  }

};

