import FirebaseInterface from './FirebaseInterface'

class Player extends FirebaseInterface {
  constructor(database, data) {
    super(database);
    return this;
  }
  create({name, avatarURL}) {
    this.data.name = name;
    this.data.avatarURL = avatarURL;
    this.key = this.database.ref('players').push({name, avatarURL}).key;
    return this;
  }
  update(data) {
    if (!this.key) {
      throw new Error('Player has not been saved to the database');
    }
    this.database.ref('players').child(this.key).update(data);
    return this;
  }
  delete(playerKey) {
    if (playerKey) { this.key = playerKey; }
    if (!this.key) {
      throw new Error('Player has not been saved to the database');
    }
    this.database.ref('players').child(this.key).remove();
    return this;
  }
  fetch(playerKey) {
    if (playerKey) { this.key = playerKey; }
    if (!this.key) {
      throw new Error('Player has not been saved to the database');
    }
    this.database.ref('players').child(this.key).once('value', (snapshot) => {
      this.data = snapshot.val();
    });
    return this;
  }
}

export default Player;
