import ObjectInterface from './ObjectInterface'

class Round extends ObjectInterface {
  create(data) {
    data.date = data.date || new Date().toString();
    super.create(data);
    this.database.ref('games/' + data.gameKey + '/rounds/' + this.key).set(true);
    this.database.ref('tournaments/' + data.tournamentKey + '/rounds/' + this.key).set(true);
    for (let playerKey of Object.keys(data.players)) {
      this.database.ref('players/' + playerKey + '/rounds/' + this.key).set(true);
    }
  }
  get parentKey() {
    return 'rounds'
  }
}

export default Round;
