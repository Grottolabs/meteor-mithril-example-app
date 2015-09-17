/**
 * Created by jakob on 16-09-2015.
 */
myApp.nav = {
  vm        : {
    links  : [
      {name: 'Home', path: '/'},
      {name: 'Hello', path: '/hello'},
      {name: 'Todo', path: '/todo'},
      {name: 'MSX', path: '/msx'},
      {name: 'Databinding', path: '/databinding'},
      {name: 'Databinding2', path: '/databinding2'}
    ],
    linksVM: function () {
      return myApp.nav.vm.links.map((link)=> {
        link.active = m.route() == link.path;
        link.activeClass = link.active ? 'active' : '';
        return link;
      });
    }
  },
  controller: function () {
    this.vm = myApp.nav.vm;
  },
  view      : function (ctrl) {
    var vm = ctrl.vm;
    return m('nav', [
      m('ul.navbar', vm.linksVM().map(function (link) {
        return m('li.navbar-item', {class: link.activeClass},
          m('a.navbar-url', {href: link.path, config: m.route}, link.name)
        )
      }))
    ])
  }
};