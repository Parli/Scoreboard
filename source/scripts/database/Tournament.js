import ObjectInterface from './ObjectInterface'

let parentKey = 'tournament';

class Tournament extends ObjectInterface {
  get parentKey() {
    return 'tournaments';
  }
}

export default Tournament;
