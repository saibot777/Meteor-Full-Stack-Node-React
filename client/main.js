import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';
import './main.html';

const renderPlayers = function(playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
}

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let jsx = (
      <div>
        <h1>{title}</h1>
        {[renderPlayers(players)]}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

