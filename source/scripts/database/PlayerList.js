import FirebaseInterface from './FirebaseInterface'

class PlayerList extends FirebaseInterface {
  constructor(database) {
    super(database);
    return this;
  }
  fetch(playerID) {
    this.database.ref('players').once('value', (snapshot) => {
      this.data = snapshot.val();
    });
    return this;
  }
}

export default PlayerList;
