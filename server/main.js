import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  Players.insert({
    name: 'Saibot',
    score: 4
  });
  console.log(Players.find().fetch());
});
