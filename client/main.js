import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import PlayerList from './../imports/ui/PlayerList';
import './main.html';

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let jsx = (
      <div>
        <TitleBar title={title}/>
        <PlayerList players={players}/>
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  
});

