import ListInterface from './ListInterface'

class RoundList extends ListInterface {
  get parentKey() {
    return 'rounds';
  }
}

export default RoundList;
