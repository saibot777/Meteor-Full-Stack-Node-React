import React from 'react';

import {Players} from './../api/players';
import Player from './Player';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return <p>Add your first player!</p>;
        }   else {
                return this.props.players.map((player) => {
                    return <Player key={player._id} player={player}/>;
                });
            }
    }
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}