/**
 * Created by jakob on 16-09-2015.
 */
myApp.helloPage = {
  vm: {
    name      : "",
    updateName: function () {
      myApp.helloPage.vm.name = this.value.toUpperCase().replace(/\d/g, '');
      caret.redraw();
    }
  },

  controller: function () {
    this.vm = myApp.helloPage.vm;
  },

  view: function (ctrl) {
    var vm = ctrl.vm;
    return myApp.layout(
      m("div", [
        m("label", "Please enter your name"),
        m("input[type='text']", {oninput: vm.updateName, value: vm.name}),
        vm.name? m("h3.helloName", "Thank you " + vm.name) : null
    ]))
  }
};
