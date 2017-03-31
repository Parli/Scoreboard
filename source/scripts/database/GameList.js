import ListInterface from './ListInterface'

class GameList extends ListInterface {
  get parentKey() {
    return 'games';
  }
}

export default GameList;
