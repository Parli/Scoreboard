import ObjectInterface from './ObjectInterface'

class Tournament extends ObjectInterface {
  create(data = {}) {
    data.startDate = data.startDate || new Date().toString();
    return super.create(data);
  }
  get parentKey() {
    return 'tournaments';
  }
}

export default Tournament;
