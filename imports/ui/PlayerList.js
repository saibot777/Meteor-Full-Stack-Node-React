import React from 'react';

import {Players} from './../api/players';

const renderPlayers = (playersList) => {
  
}


export default class PlayerList extends React.Component {
    renderPlayers() {
        return this.props.players.map((player) => {
           return <Player key={player._id} player={player}/>;
        });
    }
    render() {
        return (
            <div>
                {renderPlayers()}
            </div>
        );
    }
}