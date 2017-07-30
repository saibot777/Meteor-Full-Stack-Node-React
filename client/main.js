import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import './main.html';

const players = [
  {
    _id: '1',
    name: 'Sladjana',
    score: 99,
  },
  {
    _id: '2',
    name: 'Jovan',
    score: -1,
  },
  {
    _id: '3',
    name: 'Stefan',
    score: -12,
  }
];

const renderPlayers = function(playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
}

Meteor.startup(function () {
  let title = 'Score Keep';
  let jsx = (
    <div>
      <h1>{title}</h1>
      {[renderPlayers(players)]}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});


