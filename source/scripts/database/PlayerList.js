import ListInterface from './ListInterface'

class PlayerList extends ListInterface {
  get parentKey() {
    return 'players';
  }
}

export default PlayerList;
