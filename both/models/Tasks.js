/**
 * Created by jakob on 07-09-2015.
 */
/**
 * Created by jakob on 07-09-2015.
 */

Tasks = new Meteor.Collection('tasks');

if(Meteor.isClient){
  Meteor.subscribe('allTasks');
}

if(Meteor.isServer){
  //publish
  Meteor.publish('allTasks', function(){
    "use strict";
    return Tasks.find();
  });

  //seed
  if(!Tasks.findOne()){
    var  items = [
      { title: 'Avoid excessive coffeine', done: true, hidden: false },
      { title: 'Hidden item', done: false, hidden: true },
      { title: 'Be less provocative', done: false, hidden: false  },
      { title: 'Be nice to people', done: false, hidden: false }
    ];
    items.forEach(function(item){
      "use strict";
      Tasks.insert(item);
    })
  }

}

Meteor.methods({
  'tasks/insert': (title)=>{
    Tasks.insert({title: title})
  },
  'tasks/toggleDone': (id)=>{
    var task = Tasks.findOne(id);
    Tasks.update(id, {$set:{done: !task.done}})
  },
  'tasks/remove': (id)=>{
    Tasks.remove(id);
  }
});

