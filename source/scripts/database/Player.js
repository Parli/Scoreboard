import ObjectInterface from './ObjectInterface'

class Player extends ObjectInterface {
  get parentKey() {
    return 'players';
  }
}

export default Player;
