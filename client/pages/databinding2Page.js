/**
 * Created by jakob on 17-09-2015.
 */

myApp.databinding2Page = {

  vm: {
    databinder     : function (data, manipulators) {
      return {
        oninput: function (e) {
          var name = e.target.name;
          var value = e.target.value;
          data[ name ] = manipulators[ name ] ? manipulators[ name ](value) : value;
          caret.redraw();
        }
      };
    },
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    domainify : function (value) {
      var http = 'https://';
      http.split("").forEach(function (char, index) {
        if (value[ index ] !== char) {
          value = value.substring(0, index) + char + value.substring(index);
        }
      });
      value = value.substring(0, 8) + value.substring(8).replace(/[^a-zA-Z0-9\.]*/g, '');
      return value
    }
  },

  controller: function () {
    this.vm = myApp.databinding2Page.vm;
    this.user = {
      first : 'John',
      last  : 'Doe',
      domain: 'https://mydomain.com'
    };
    this.manipulators = {
      first : this.vm.capitalize,
      last  : this.vm.capitalize,
      domain: this.vm.domainify
    }
  },

  view: function (ctrl) {
    var vm = ctrl.vm;
    return myApp.layout(
      m(".container", [
        m("form", vm.databinder(ctrl.user, ctrl.manipulators), [
          m("label[for=first]", 'First name (capitalized)'),
          m("input[type=text][name=first]", {value: ctrl.user.first}),
          m("label[for=last]", 'Last name (capitalized)'),
          m("input[type=text][name=last]", {value: ctrl.user.last}),
          m("label[for=domain]", 'Domain (character restriction)'),
          m("input[type=text][name=domain]", {value: ctrl.user.domain}),
          m("br"),
          m("input[type=submit]", {onclick: ctrl.submit})
        ]),

        m("div", "Hello " + ctrl.user.first + " " + ctrl.user.last + " from " + ctrl.user.domain)

      ])
    )
  }

};

