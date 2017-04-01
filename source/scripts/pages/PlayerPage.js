import React from 'react';
import Player from '../models/Player'

/**
 * A counter button: tap the button to increase the count.
 */
class PlayerPage extends React.Component {
  constructor({playerKey, app}) {
    super();
    let player = new Player(app.database()).fetch(playerKey)
    this.state = player.data
    player.ref.on('value', (snapshot) => {
      this.setState(player.data);
    });
  }

  render() {
    const avatarURL = this.state.avatarURL;
    const playerName = this.state.name
    return (
      <div className="PlayerPage">
        <img className="Player-Avatar" src={avatarURL}/>
        <h1>{playerName}</h1>
      </div>
    );
  }
}
export default PlayerPage;
