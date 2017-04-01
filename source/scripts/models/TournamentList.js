import ListInterface from './ListInterface'

class TournamentList extends ListInterface {
  get parentKey() {
    return 'tournaments';
  }
}

export default TournamentList;
